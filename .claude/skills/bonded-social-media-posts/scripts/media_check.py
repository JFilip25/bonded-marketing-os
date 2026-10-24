#!/usr/bin/env python3
"""Quick rights and size screen for the photos and clips meant for a BONDED post.

Reads each file's bytes only (it never opens, runs or uploads the files) and reports a level per file:
  block  stock or social media markers: needs a licence or the creator's permission first
  warn   AI credentials (needs the platform AI label), no known source (ask the owner), or too small
  check  no markers found: can't be used until the owner confirms where it came from
It cannot see watermarks, faces, names or captions burned into the picture. Look at every file as well.

Usage: media_check.py <folder or files...> [--json]
Image sizes need Pillow; video sizes need ffprobe. Both are optional.
"""
import json
import os
import re
import subprocess
import sys

IMAGE = ('.jpg', '.jpeg', '.png', '.webp', '.avif', '.heic', '.gif')
VIDEO = ('.mp4', '.mov', '.m4v', '.webm')
MIN_W_IMAGE, MIN_W_VIDEO = 700, 720

PRINTABLE = re.compile(rb'[\x20-\x7e]{6,}')  # only text runs inside the file; random bytes in video data never count
STOCK = re.compile(rb'\b(istock|istockphoto|getty ?images|alamy|dreamstime|shutterstock|depositphotos|123rf|adobe ?stock|'
                   rb'stock\.adobe\.com|freepik|bigstock|pond5|storyblocks)\b', re.I)
WATERMARK_REMOVED = re.compile(rb'watermark ?remov', re.I)
C2PA = re.compile(rb'c2pa|trainedAlgorithmicMedia', re.I)
AI_OPENAI = re.compile(rb'\b(openai|chatgpt|gpt-image|gpt-4o|dall-?e)\b', re.I)
AI_GOOGLE = re.compile(rb'(google generative ai|google llc|synthid|\bgemini\b|\bimagen\b|\bveo\b)', re.I)
AI_OTHER = re.compile(rb'(trainedAlgorithmicMedia|midjourney|firefly|stable.?diffusion|runwayml|kling|ideogram|leonardo\.ai)', re.I)
SOCIAL = re.compile(rb'(\bFBMD|\binstagram\b|\btiktok\b|\bdouyin\b|\bbytedance\b|\bcapcut\b)', re.I)
VIA_CLAUDE = re.compile(rb'\bAnthropic\b')
SOCIAL_NAMES = re.compile(r'snapgram|ssstik|snaptik|fdownloader|savefrom|igram|_n\.(jpe?g|mp4)$|^AQ[A-Za-z0-9_-]{30,}|'
                          r'reddit|tiktok|instagram|facebook', re.I)
STOCK_NAMES = re.compile(r'istock|gettyimages|alamy|dreamstime|shutterstock|depositphotos|123rf|adobestock', re.I)
STOCK_ID_NAMES = re.compile(r'-\d{8,10}\.(jpe?g|webp|png)$|-[0-9A-Z]{7}\.jpe?g$')


def scan(path):
    with open(path, 'rb') as f:
        text = b'\n'.join(PRINTABLE.findall(f.read()))
    c2pa = bool(C2PA.search(text))
    return {'c2pa': c2pa, 'ig_encoder': b'AVC Coding' in text, 'stock': bool(STOCK.search(text)), 'wm_removed': bool(WATERMARK_REMOVED.search(text)),
            'openai': c2pa and bool(AI_OPENAI.search(text)), 'google': c2pa and bool(AI_GOOGLE.search(text)),
            'ai_other': bool(AI_OTHER.search(text)), 'social': bool(SOCIAL.search(text)),
            'via_claude': bool(VIA_CLAUDE.search(text))}


def size(path):
    ext = os.path.splitext(path)[1].lower()
    if ext in VIDEO:
        try:
            out = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
                                  'stream=width,height:format=duration', '-of', 'json', path],
                                 capture_output=True, text=True, timeout=60).stdout
            j = json.loads(out)
            s = j['streams'][0]
            return s['width'], s['height'], round(float(j['format']['duration']), 1)
        except Exception:
            return None, None, None
    try:
        from PIL import Image
        with Image.open(path) as im:
            return im.width, im.height, None
    except Exception:
        return None, None, None


def judge(path):
    name = os.path.basename(path)
    m = scan(path)
    w, h, dur = size(path)
    level, reasons = 'check', []
    if m['stock'] or STOCK_NAMES.search(name):
        level = 'block'; reasons.append('stock agency marker: needs the licence (a preview or cleaned-up copy is not licensed)')
    elif STOCK_ID_NAMES.search(name):
        reasons.append('the file name looks like a stock download (an image ID at the end): ask for the licence')
    if m['wm_removed']:
        level = 'block'; reasons.append('edited with a watermark remover: it is someone else\'s picture and needs its licence')
    if SOCIAL_NAMES.search(name) or m['social']:
        level = 'block'; reasons.append("social media marker: needs the creator's permission (and a parent's consent for children)")
    elif m['ig_encoder'] and not m['c2pa']:
        level = 'block'; reasons.append("encoded like an Instagram or Facebook download (encoder tag 'AVC Coding'): "
                                        "needs the creator's permission, unless the owner filmed it")
    if m['openai']:
        reasons.append('AI credentials (OpenAI/ChatGPT): add the platform AI label')
    elif m['google']:
        reasons.append('AI credentials (Google Gemini/Veo, SynthID): add the platform AI label')
    elif m['ai_other']:
        reasons.append('AI marker: add the platform AI label')
    if m['via_claude'] and not (m['openai'] or m['google']):
        reasons.append('passed through Claude; the original source is not recorded: ask the owner')
    min_w = MIN_W_VIDEO if name.lower().endswith(VIDEO) else MIN_W_IMAGE
    if w and w < min_w:
        reasons.append(f'only {w} px wide: too small for a 1080 x 1440 slide')
    if dur is not None and dur < 3:
        reasons.append(f'only {dur} s long: carousel videos need 3 to 60 s')
    if level != 'block' and reasons:
        level = 'warn'
    if not reasons:
        reasons.append("no source markers: can't be used until the owner says where it came from")
    return {'file': name, 'level': level, 'width': w, 'height': h, 'seconds': dur, 'reasons': reasons}


def main(argv):
    as_json = '--json' in argv
    paths = []
    for a in (x for x in argv if x != '--json'):
        if os.path.isdir(a):
            for root, _, files in os.walk(a):
                paths += [os.path.join(root, f) for f in sorted(files) if f.lower().endswith(IMAGE + VIDEO)]
        elif os.path.isfile(a):
            paths.append(a)
    if not paths:
        print(__doc__)
        return 2
    rows = [judge(p) for p in paths]
    if as_json:
        print(json.dumps(rows, indent=1))
    else:
        for r in rows:
            dims = f"{r['width']}x{r['height']}" if r['width'] else '?'
            if r['seconds'] is not None:
                dims += f", {r['seconds']} s"
            print(f"{r['level']:5}  {r['file']}  ({dims})")
            for why in r['reasons']:
                print(f'       - {why}')
        counts = {k: sum(1 for r in rows if r['level'] == k) for k in ('block', 'warn', 'check')}
        print(f"\n{len(rows)} files: {counts['block']} block, {counts['warn']} warn, {counts['check']} check. "
              'Look at every file too: watermarks, faces, names and burned-in captions are not detected.')
    return 1 if any(r['level'] == 'block' for r in rows) else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
