"""Blend AI-generated object photos onto exact Paper (#F5F2EA) and crop to the object.

The objects are generated on a near-Paper background, sometimes with gentle shading. For each image:
1. Background pixels are smooth pixels in the outer ring, close in colour to the border median.
2. A quadratic surface is fitted to them per channel (refitted without outliers), and subtracted, so the whole background
   becomes exactly Paper (flat-field correction).
3. The object and its soft contact shadow are kept through a feathered difference mask; the rest is
   exact Paper.
4. The result is cropped to the object with a 30 px margin.

Usage: python3 -I tools/objects/blend-to-paper.py <in_dir> <out_dir>
Writes <name>_paper.png for every <name>.png in <in_dir>.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter, ImageChops

PAPER = np.array([245, 242, 234], dtype=float)
src, dst = Path(sys.argv[1]), Path(sys.argv[2])
dst.mkdir(parents=True, exist_ok=True)


def design(xs, ys):
    return np.stack([np.ones_like(xs), xs, ys, xs * xs, ys * ys, xs * ys], axis=1)


for f in sorted(src.glob('*.png')):
    im = Image.open(f).convert('RGB')
    w, h = im.size
    a = np.asarray(im).astype(float)
    # 1. Background candidates on a 128 px grid: close to the border median and locally smooth.
    s = np.asarray(im.resize((128, 128), Image.BILINEAR)).astype(float)
    border = np.concatenate([s[0], s[-1], s[:, 0], s[:, -1]])
    med = np.median(border, axis=0)
    close = np.all(np.abs(s - med) < 22, axis=2)
    gy, gx = np.gradient(s.mean(axis=2))
    smooth = np.hypot(gx, gy) < 1.5
    # Objects are centred, so the surface is fitted from the outer ring only.
    gy2, gx2 = np.mgrid[0:128, 0:128]
    ring = (np.minimum(np.minimum(gx2, 127 - gx2), np.minimum(gy2, 127 - gy2)) < 22)
    bgmask = close & smooth & ring
    yy, xx = np.nonzero(bgmask)
    X = design(xx / 127.0, yy / 127.0)
    # 2. Quadratic surface per channel, refitted twice without outliers, evaluated at full resolution.
    keep = np.ones(len(xx), dtype=bool)
    for _ in range(3):
        coefs = [np.linalg.lstsq(X[keep], s[yy[keep], xx[keep], c], rcond=None)[0] for c in range(3)]
        resid = np.max(np.abs(np.stack([X @ coefs[c] - s[yy, xx, c] for c in range(3)], axis=1)), axis=1)
        keep = resid < 3
    fy, fx = np.mgrid[0:h, 0:w]
    F = design(fx.ravel() / (w - 1), fy.ravel() / (h - 1))
    field = np.empty_like(a)
    for c in range(3):
        field[..., c] = (F @ coefs[c]).reshape(h, w)
    flat = np.clip(a - field + PAPER, 0, 255).astype(np.uint8)
    sh = Image.fromarray(flat)
    # 3. Keep what differs from Paper, feathered.
    paper = Image.new('RGB', (w, h), tuple(int(v) for v in PAPER))
    diff = ImageChops.difference(sh, paper).convert('L')
    mask = diff.point(lambda v: 0 if v < 4 else min(255, (v - 4) * 18)).filter(ImageFilter.GaussianBlur(3))
    out = Image.composite(sh, paper, mask)
    # 4. Crop to the object.
    bbox = mask.point(lambda v: 255 if v > 25 else 0).getbbox()
    m = 30
    bbox = (max(0, bbox[0] - m), max(0, bbox[1] - m), min(w, bbox[2] + m), min(h, bbox[3] + m))
    out = out.crop(bbox)
    out.save(dst / f'{f.stem}_paper.png', optimize=True)
    corners = [out.getpixel(p) for p in [(0, 0), (out.width - 1, 0), (0, out.height - 1), (out.width - 1, out.height - 1)]]
    spread = np.ptp(field.reshape(-1, 3), axis=0).round(1)
    print(f'{f.stem:26} bg_px={bgmask.mean():.0%} field_spread={spread} crop={bbox} out={out.size} corners_paper={all(c == tuple(int(v) for v in PAPER) for c in corners)}')
