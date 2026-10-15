#!/usr/bin/env python3
"""Reading grade for BONDED post copy (Flesch-Kincaid grade, simple syllable counter).

The owner's rule (D-2026-10-15-5): write so an 8-year-old can understand it. Gates:
  slides   grade 4 or lower (headline and sub scored together)
  captions grade 5 or lower (Instagram without the hashtags; Facebook in full; TikTok hook only)
  no word over 3 syllables, except names and the everyday words in EVERYDAY below

Usage:
  reading_grade.py --slide "It gets tiring." "Not because the jobs are hard. Because nobody else is keeping track."
  reading_grade.py --caption caption.txt          (a file, or the caption text itself)
  reading_grade.py --file post.json               {"slides": {"1": "...", ...}, "captions": {"instagram": "...", ...}}
Exit code 1 when anything is over its gate. Standard library only.
"""
import argparse
import json
import os
import re
import sys

SLIDE_MAX, CAPTION_MAX = 4.0, 5.0
EVERYDAY = {'bonded', 'android', 'iphone', 'waitlist', 'saturday', 'sunday', 'homework', 'everything', 'everyone',
            'everybody', 'everyday', 'family', 'families', 'recycling', 'dishwasher', 'allowance', 'vegetables',
            'kindergarten', 'television', 'watermelon', 'macaroni'}  # add a word here only if a child would know it


def syllables(word):
    w = word.lower().strip("'")
    if not w:
        return 0
    w = re.sub(r"'s$|'t$|'re$|'ll$|'ve$|'d$|'m$", '', w)
    if len(w) <= 3:
        return 1
    w = re.sub(r'(?:[^laeiouy]es|ed|[^laeiouy]e)$', '', w)
    w = re.sub(r'^y', '', w)
    return max(1, len(re.findall(r'[aeiouy]{1,2}', w)))


def grade(text):
    """Returns (grade, words per sentence, long words)."""
    text = text.replace('’', "'").replace('‘', "'")
    sents = [s for s in re.split(r'[.!?:]+(?:\s|$)', text) if re.search(r'[A-Za-z]', s)]
    words = re.findall(r"[A-Za-z][A-Za-z']*", text)
    syl = sum(syllables(w) for w in words)
    g = 0.39 * len(words) / max(1, len(sents)) + 11.8 * syl / max(1, len(words)) - 15.59
    long = sorted({w for w in words if syllables(w) > 3 and w.lower() not in EVERYDAY})
    return round(g, 1), round(len(words) / max(1, len(sents)), 1), long


def check(label, text, limit):
    g, wps, long = grade(text)
    ok = g <= limit and not long
    print(f"{'ok  ' if ok else 'OVER'} {label}: grade {g} (max {limit}), {wps} words per sentence"
          + (f", long words: {', '.join(long)}" if long else ''))
    return ok


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--slide', nargs='+', help='the words on one slide (headline, sub)')
    ap.add_argument('--caption', help='a caption, or a file holding one')
    ap.add_argument('--file', help='JSON with "slides" and/or "captions" objects of label: text')
    a = ap.parse_args()
    results = []
    if a.slide:
        results.append(check('slide', ' '.join(a.slide), SLIDE_MAX))
    if a.caption:
        text = open(a.caption, encoding='utf-8').read() if os.path.isfile(a.caption) else a.caption
        results.append(check('caption', ' '.join(text.split()), CAPTION_MAX))
    if a.file:
        data = json.load(open(a.file, encoding='utf-8'))
        for k, v in (data.get('slides') or {}).items():
            results.append(check(f'slide {k}', ' '.join(v) if isinstance(v, list) else v, SLIDE_MAX))
        for k, v in (data.get('captions') or {}).items():
            results.append(check(f'caption {k}', ' '.join((' '.join(v) if isinstance(v, list) else v).split()), CAPTION_MAX))
    if not results:
        ap.print_help()
        return 2
    return 0 if all(results) else 1


if __name__ == '__main__':
    sys.exit(main())
