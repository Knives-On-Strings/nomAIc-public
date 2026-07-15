/**
 * Pure text-matching/highlighting helpers, shared by every archive-wide interactive
 * surface this batch ships (search.js, stats.js) — Batch 10.4, OPEN-QUESTIONS.md Q44.
 *
 * This DELIBERATELY duplicates the fold-for-matching / length-preserving-fold-for-
 * highlighting discipline `site_writer.py`'s embedded `JS` string already established
 * for the single-game register search, rather than importing it: `site_writer.JS` is a
 * Python string rendered inline into a single-game page (no module system available
 * there — see that file's own comment on why), while everything in this directory ships
 * as standalone ES modules with no bundler and no build step (Q44). Two copies of a well-
 * tested ~15-line algorithm is cheaper than inventing a shared-module bridge between a
 * Python string literal and a real .js file.
 *
 * SAFETY (SPEC §9.7.7/§9.7.8, invariant 9): rule text, debate lines, vote reasons, and
 * proposal rationales are model-authored. Nothing in this module — or in anything that
 * calls it — may pass that text through `innerHTML`, `outerHTML`, `insertAdjacentHTML`,
 * `document.write`, or `eval(`. `paintHighlight` below builds DOM with `createElement`/
 * `textContent` only. `scripts/spec_audit.py::check_no_unsafe_sinks` scans this file
 * verbatim to keep it that way.
 */
'use strict';

/** Accent-insensitive fold, for *matching*: "cafe" should find "café".
 *  NFKD may change the string's length, so this is unsafe for slicing. */
export function norm(s) { return s.toLowerCase().normalize('NFKD'); }

/** Length-preserving fold, for *highlighting*: indices must map back to the source.
 *  If lowercasing ever changes the length (a few exotic code points do), we say so and
 *  the caller skips highlighting rather than marking the wrong characters. */
export function fold(s) { return s.toLowerCase(); }

/** True if `text` contains `q`, ignoring case and accents. */
export function hasMatch(text, q) { return !q || norm(text).indexOf(norm(q)) !== -1; }

/** Split `text` around every occurrence of `q`. Returns [{t, hit}] parts whose `t`
 *  values always reassemble to exactly `text`. Pure: no DOM, so it can be tested alone.
 *  Highlights only when the fold is length-preserving; otherwise returns one unhit part
 *  (the row still matches and shows, it just isn't marked). */
export function splitMatches(text, q) {
  if (!q) return [{ t: text, hit: false }];
  var hay = fold(text), needle = fold(q);
  if (!needle || hay.length !== text.length) return [{ t: text, hit: false }];
  var out = [], i = 0;
  for (;;) {
    var j = hay.indexOf(needle, i);
    if (j === -1) { if (i < text.length) out.push({ t: text.slice(i), hit: false }); break; }
    if (j > i) out.push({ t: text.slice(i, j), hit: false });
    out.push({ t: text.slice(j, j + needle.length), hit: true });
    i = j + needle.length;
  }
  return out.length ? out : [{ t: text, hit: false }];
}

/** Paint `text`, highlighted for query `q`, into `el` — replacing its children.
 *  `doc` is passed explicitly (rather than read from the global `document`) so this is
 *  callable from a test with a fake document; production callers pass the real one.
 *  Builds `<mark>` elements with `textContent` only — model-authored text never becomes
 *  markup, matching every safety comment above. */
export function paintHighlight(el, doc, text, q) {
  while (el.firstChild) el.removeChild(el.firstChild);
  splitMatches(text, q).forEach(function (part) {
    if (part.hit) {
      var m = doc.createElement('mark');
      m.textContent = part.t;
      el.appendChild(m);
    } else {
      el.appendChild(doc.createTextNode(part.t));
    }
  });
}
