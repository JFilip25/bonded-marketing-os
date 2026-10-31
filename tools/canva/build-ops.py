"""Turn design/production/canva/spec.json into Canva edit-design operations.

The Canva MCP has no font, letter-spacing or shadow parameters, so text arrives in Canva's default
font with the right words, box, size, colour, alignment, line height and normal/bold weight. The
owner then sets Plus Jakarta Sans (see design/production/canva/README.md).

  build-ops.py designs                          list the designs and their pages
  build-ops.py elements <key> '<page ids JSON>'  operations that add shapes, pictures and text boxes
  build-ops.py format <key> <design_content.json> format_text operations, matched by text, per page
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SPEC = json.loads((ROOT / 'design/production/canva/spec.json').read_text())
MEDIA = json.loads((ROOT / 'design/production/canva/media.json').read_text())
BY_NAME = {p['name']: p for p in SPEC}
ALT = {'day02_trainers_paper.png': "kids' sneakers", 'day02_bin_paper.png': 'kitchen trash can',
       'day03_wall_calendar_paper.png': 'wall calendar with sticky notes', 'day05_fork_napkin_paper.png': 'fork and napkin',
       'day07_mug_notepad_paper.png': 'mug and notepad', 'day08_trash_bags_paper.png': 'roll of trash bags',
       'day10_coins_stacked_paper.png': 'stacked coins', 'day10_plate_towel_paper.png': 'plate and dish towel',
       'day10_calendar_circled_paper.png': 'calendar with a circled date', 'day10_notebook_pencil_paper.png': 'notebook and pencil'}
VIDEO_GROUND = '#5F676C'  # editor-only ground for the transparent video pages; removed by a transparent export

DESIGNS = {
    'd00': ('BONDED · Day 0 · What Bonded is, and why we’re building it', [f'day00/day00_carousel_s0{i}' for i in range(1, 7)]),
    'd02': ('BONDED · Day 2 · Maybe the problem isn’t the chores', [f'day02/day02_carousel_s0{i}' for i in range(1, 8)]),
    'd03': ('BONDED · Day 3 · Apparently, I’m the family calendar', ['day03/day03_single']),
    'd05': ('BONDED · Day 5 · What kids can actually handle, age by age', [f'day05/day05_carousel_s0{i}' for i in range(1, 9)]),
    'd07': ('BONDED · Day 7 · Does everyone know what’s happening this week?', ['day07/day07_single']),
    'd08': ('BONDED · Day 8 · How to split jobs between siblings', [f'day08/day08_carousel_s0{i}' for i in range(1, 8)]),
    'd10': ('BONDED · Day 10 · Should allowance be linked to chores?', [f'day10/day10_carousel_s0{i}' for i in range(1, 8)]),
    'd12': ('BONDED · Day 12 · One week with a shared family plan', [f'day12/day12_carousel_s0{i}' for i in range(1, 9)]),
    'd14': ('BONDED · Day 14 · What has your family been meaning to do for ages?', ['day14/day14_single']),
    'stories': ('BONDED · Stories · Weeks 1–2', [p['name'] for p in SPEC if p['h'] == 1920 and p['bg']]),
    'video': ('BONDED · Video text and end card · Weeks 1–2', [p['name'] for p in SPEC if p['h'] == 1920 and not p['bg']]),
}


def media_for(e):
    if e['role'] == 'phone':
        return MEDIA[e['png']]
    if e['role'] == 'lockup':
        return MEDIA['bonded-lockup-horizontal-reversed.svg']
    return MEDIA[e['file']]


def alt_text(e):
    if e['role'] == 'phone':
        return 'Demo family app screen'
    if e['role'] == 'lockup':
        return 'Bonded logo'
    return ALT.get(e['file'], e['file'].replace('_paper.png', '').split('_', 1)[1].replace('_', ' '))


def pill(e, page):
    """The small shape (a pill or label box) a one-line label sits in, if any."""
    if not (e['kind'] == 'text' and e['hug'] and e['lines'] == 1 and e['align'] == 'start'):
        return None
    boxes = [x for x in page['elements'] if x['kind'] == 'shape' and x['w'] < 400
             and x['x'] <= e['x'] and e['x'] + e['w'] <= x['x'] + x['w'] + 1 and x['y'] <= e['cy'] <= x['y'] + x['h']]
    return min(boxes, key=lambda x: x['w'], default=None)


def text_box(e, page):
    """Canva text box: top from the text's vertical centre, width widened where the text hugs its box
    (Canva's default font is wider than Jakarta, so a hugging box would wrap)."""
    lh = e['fontSize'] * e['lineHeight']
    top = e['cy'] - e['lines'] * lh / 2
    if e.get('qa') == 'handle':  # centred on the page in the proofs
        return round(top, 1), page['w'] / 2 - 130, 260
    box = pill(e, page)
    if box:  # centred across its pill, so a wider default font stays inside it
        return round(top, 1), box['x'], box['w']
    x, w = e['x'], e['w']
    lo, hi = (150, page['w'] - 150) if not page['bg'] else (50, page['w'] - 50)
    if e['hug'] and e['lines'] == 1:
        if e['align'] == 'start':
            w = min(hi - x, max(w * 1.4, w + 80))
        elif e['align'] == 'center':
            cx = x + w / 2
            half = min(cx - lo, hi - cx, max(w * 0.7, w / 2 + 40))
            x, w = cx - half, 2 * half
    return round(top, 1), round(x, 1), round(w, 1)


def elements(key, page_ids):
    title, names = DESIGNS[key]
    ops = []
    for name, pid in zip(names, page_ids):
        page = BY_NAME[name]
        for e in page['elements']:
            if e['kind'] == 'shape':
                line = re.fullmatch(r'M([\d.-]+) ([\d.-]+) L([\d.-]+) ([\d.-]+)', ' '.join(e['path'].split()))
                if line and e.get('stroke'):
                    # Canva doesn't draw a straight stroked path, so a straight stroke becomes a thin filled bar.
                    x1, y1, x2, y2 = map(float, line.groups()); sw = e['strokeW']
                    if abs(x1 - x2) < 0.01:
                        left, top, w, h = e['x'] + x1 - sw / 2, e['y'] + min(y1, y2), sw, abs(y2 - y1)
                    else:
                        left, top, w, h = e['x'] + min(x1, x2), e['y'] + y1 - sw / 2, abs(x2 - x1), sw
                    ops.append({'type': 'insert_shape', 'page_id': pid, 'top': round(top, 1), 'left': round(left, 1), 'width': round(w, 1), 'height': round(h, 1),
                                'path': f'M0 0 H{w:g} V{h:g} H0 Z', 'view_box_width': round(w, 1), 'view_box_height': round(h, 1), 'color': e['stroke'].upper()})
                    continue
                op = {'type': 'insert_shape', 'page_id': pid, 'top': e['y'], 'left': e['x'], 'width': e['w'], 'height': e['h'],
                      'path': ' '.join(e['path'].split()), 'view_box_width': e['vbw'], 'view_box_height': e['vbh']}
                if e.get('fill'): op['color'] = e['fill']
                if e.get('opacity', 1) < 1: op['opacity'] = round(e['opacity'], 2)
                if e.get('stroke'): op['stroke_color'] = e['stroke'].upper(); op['stroke_weight'] = e['strokeW']
                ops.append(op)
            elif e['kind'] == 'image':
                ops.append({'type': 'insert_fill', 'page_id': pid, 'asset_type': 'image', 'asset_id': media_for(e),
                            'alt_text': alt_text(e),
                            'top': e['y'], 'left': e['x'], 'width': e['w'], 'height': e['h']})
            else:
                top, left, width = text_box(e, page)
                ops.append({'type': 'add_text', 'page_id': pid, 'text': e['text'], 'top': top, 'left': left, 'width': width})
    return ops


def formats(key, content):
    """Match Canva text elements to spec text by page and words, in order."""
    title, names = DESIGNS[key]
    if isinstance(content, list):  # compact form: per page, a list of [locator_id, words]
        pages = [{'elements': [{'type': 'text', 'locator_id': lid, 'textRegions': [{'characters': t}]} for lid, t in pg]} for pg in content]
    else:
        pages = content['design_content']['pages'] if 'design_content' in content else content['pages']
    out = []
    for name, cpage in zip(names, pages):
        want = [e for e in BY_NAME[name]['elements'] if e['kind'] == 'text']
        have = [el for el in cpage['elements'] if el.get('type') == 'text']
        used = set()
        for e in want:
            norm = ' '.join(e['text'].split())
            match = next((el for el in have if el['locator_id'] not in used and ' '.join(''.join(r['characters'] for r in el['textRegions']).split()) == norm), None)
            if not match:
                raise SystemExit(f'{name}: no Canva text element for {norm!r}')
            used.add(match['locator_id'])
            out.append({'type': 'format_text', 'locator_id': match['locator_id'], 'formatting': {
                'font_size': round(e['fontSize']), 'color': e['color'], 'font_weight': 'bold' if e['weight'] >= 600 else 'normal',
                'text_align': 'center' if e.get('qa') == 'handle' or pill(e, BY_NAME[name]) else e['align'], 'line_height': max(0.5, min(2.5, round(e['lineHeight'], 2)))}})
    return out


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'designs':
        for k, (t, names) in DESIGNS.items():
            print(k, len(names), t)
            for n in names:
                p = BY_NAME[n]; print('   ', n, p['w'], p['h'], p['bg'] or VIDEO_GROUND, len(p['elements']))
    elif cmd == 'elements':
        print(json.dumps(elements(sys.argv[2], json.loads(sys.argv[3])), ensure_ascii=False))
    elif cmd == 'format':
        print(json.dumps(formats(sys.argv[2], json.loads(Path(sys.argv[3]).read_text())), ensure_ascii=False))
