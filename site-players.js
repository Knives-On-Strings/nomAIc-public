/**
 * `/players/` sort + lineage filter (amends SPEC.md R104, §9.9.6, site-tweaks-2 task):
 * JS-injected controls — a sort `<select>` (model / alphabetical / avg score / game
 * count), an asc/desc toggle, and a model/lineage filter chip row — over the `.player-
 * row` elements `scripts/build_archive.py::build_players`/`player_card(...,
 * expanded=False)` already render, in full, server-side, grouped by model family.
 *
 * Reuses `distinctValues` from `webassets/filter-controls.js` — the SAME pure helper
 * `site-filter.js`'s own outcome/era chips use — rather than a second, copied
 * implementation (the `text-match.js` precedent this task's brief points at).
 *
 * No-JS baseline (invariant 10): every row already rendered, grouped by model family,
 * in the archive's own existing order — this script does not run at all without
 * JavaScript, so that grouped order is exactly what a no-JS reader gets, unchanged by
 * this task. `#players-filter` is an EMPTY mount point in the shipped HTML; every
 * control here is injected at runtime, so nothing is ever a dead, inert widget for a
 * no-JS reader to find.
 *
 * Flattening (a deliberate, documented trade-off): the server groups rows into one
 * `<div class="lineage-group">` per model, each with its own "MODEL / N seats" heading.
 * Once a reader can sort by name/score/game-count, those per-model sections stop making
 * sense (an alphabetical sort mixes models together) — so, once this script runs, the
 * grouped sections are hidden (`hidden = true`, never removed from the DOM) and every
 * `.player-row` is moved — not cloned — into one flat, re-orderable list. This is the
 * same "existing nodes are moved, never recreated" discipline `site-filter.js`'s own
 * `rerender()` already uses for `.game-card`.
 *
 * Result count: an aria-live `role="status"` region, "N of M players shown" — same
 * convention `site-filter.js`'s own result count established for `/games/`.
 *
 * SAFETY (invariant 9): createElement/textContent only — no innerHTML, outerHTML,
 * insertAdjacentHTML, document.write, or eval anywhere in this file.
 */
'use strict';
import { distinctValues } from './filter-controls.js';

// ── pure helpers (unit-tested in tests/test_site_players.mjs) ───────────────────────

/** One row's sortable/filterable facts, read from its `data-*` attributes. `index` is
 *  the row's position in the server-rendered order — the fallback/default sort ties on
 *  it, the same "never silently reorder past what the server decided" idiom
 *  `site-filter.js::cardRecord`/`sortComparator` already establish for `/games/`. */
export function playerRecord(el, index) {
  var ds = el.dataset || {};
  return {
    el: el,
    index: index,
    name: ds.name || '',
    model: ds.model || '',
    // `data-score` is `''` for a never-scored seat (`_finalize_career`'s honest `None`,
    // not a fabricated 0.0) — `parseFloat('') || 0` degrades that to 0 for sorting
    // purposes only, the same `parseInt(..., 10) || 0` idiom `cardRecord` uses.
    score: parseFloat(ds.score) || 0,
    games: parseInt(ds.games, 10) || 0,
  };
}

/** Does `record` pass the active lineage/model chip selection? Empty selection means
 *  "no filter" — same OR-within-the-facet convention `site-filter.js::passesFilters`
 *  uses, simplified to one facet since a seat carries exactly one model (unlike a
 *  game, which can carry several via its roster). */
export function passesFilters(record, active) {
  if (active.lineage && active.lineage.size && !active.lineage.has(record.model)) {
    return false;
  }
  return true;
}

/** The comparator for one of the four sort keys, in either direction. `dir === 'desc'`
 *  flips the PRIMARY comparison only — the tie-break (original server-rendered order)
 *  always stays ascending, so switching direction never scrambles ties into a
 *  different, non-deterministic order. `'model'` is also the fallback for an
 *  unrecognised key, so a stray/removed `<option>` value never silently reorders. */
export function sortComparator(sortKey, dir) {
  var mul = dir === 'desc' ? -1 : 1;
  var primary;
  if (sortKey === 'alphabetical') {
    primary = function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; };
  } else if (sortKey === 'score') {
    primary = function (a, b) { return a.score - b.score; };
  } else if (sortKey === 'games') {
    primary = function (a, b) { return a.games - b.games; };
  } else {
    primary = function (a, b) { return a.model < b.model ? -1 : a.model > b.model ? 1 : 0; };
  }
  return function (a, b) { return mul * primary(a, b) || (a.index - b.index); };
}

/** Records passing `active`'s filter, in `sortKey`/`dir` order — the one function the
 *  DOM layer below calls and the tests exercise directly. */
export function visibleSorted(records, active, sortKey, dir) {
  return records.filter(function (r) { return passesFilters(r, active); })
    .slice().sort(sortComparator(sortKey, dir));
}

/** The exact text of the aria-live result-count region, "N of M players shown" — same
 *  convention `site-filter.js::statusText` established for `/games/`. */
export function statusText(records, active, sortKey, dir) {
  var visible = visibleSorted(records, active, sortKey, dir).length;
  return visible + ' of ' + records.length + ' players shown';
}

// ── DOM wiring (createElement/textContent only — invariant 9) ──────────────────────

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  var mount = document.getElementById('players-filter');
  var groups = Array.prototype.slice.call(document.querySelectorAll('.lineage-group'));
  if (!mount || !groups.length) return;

  var rowEls = Array.prototype.slice.call(document.querySelectorAll('.players .player-row'));
  if (!rowEls.length) return;
  var records = rowEls.map(function (el, i) { return playerRecord(el, i); });

  // Flatten: hide the grouped-by-model sections (never remove them — this leaves the
  // no-JS markup fully intact for a reader whose script fails partway) and give the
  // rows one shared, re-orderable container.
  var flat = document.createElement('div');
  flat.className = 'players-flat';
  groups.forEach(function (g) { g.hidden = true; });
  mount.parentNode.insertBefore(flat, groups[0]);

  var active = { lineage: new Set() };
  var sortKey = 'model';
  var dir = 'asc';

  var status = document.createElement('div');
  status.id = 'players-filter-status';
  status.className = 'filter-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  function rerender() {
    records.forEach(function (r) {
      r.el.hidden = !passesFilters(r, active);
    });
    visibleSorted(records, active, sortKey, dir).forEach(function (r) {
      flat.appendChild(r.el);   // moves the existing node; nothing is recreated
    });
    status.textContent = statusText(records, active, sortKey, dir);
  }

  // ── lineage/model filter chip row (reuses the `.facet`/`.chip` pattern
  //    `site-filter.js::buildFacet` established, over the SHARED `distinctValues`) ──
  var facets = document.createElement('div');
  facets.className = 'facets';
  var lineageGrp = document.createElement('div');
  lineageGrp.className = 'facet';
  var lineageLabel = document.createElement('span');
  lineageLabel.className = 'facet-label';
  lineageLabel.textContent = 'Lineage';
  lineageGrp.appendChild(lineageLabel);
  distinctValues(records, 'model').forEach(function (model) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.textContent = model;   // a model name, shown verbatim -- an identity, not a label
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', function () {
      if (active.lineage.has(model)) {
        active.lineage.delete(model);
        btn.classList.remove('on');
        btn.setAttribute('aria-pressed', 'false');
      } else {
        active.lineage.add(model);
        btn.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
      }
      rerender();
    });
    lineageGrp.appendChild(btn);
  });
  facets.appendChild(lineageGrp);
  mount.appendChild(facets);

  // ── sort select + asc/desc toggle ──
  var sortRow = document.createElement('div');
  sortRow.className = 'facet';
  var sortLabel = document.createElement('label');
  sortLabel.className = 'facet-label';
  sortLabel.setAttribute('for', 'players-sort');
  sortLabel.textContent = 'Sort';
  var select = document.createElement('select');
  select.id = 'players-sort';
  [['model', 'Model'], ['alphabetical', 'Alphabetical'], ['score', 'Avg score'],
   ['games', 'Game count']].forEach(function (pair) {
    var opt = document.createElement('option');
    opt.value = pair[0];
    opt.textContent = pair[1];
    select.appendChild(opt);
  });
  select.addEventListener('change', function () {
    sortKey = select.value;
    rerender();
  });
  sortRow.appendChild(sortLabel);
  sortRow.appendChild(select);

  var dirBtn = document.createElement('button');
  dirBtn.type = 'button';
  dirBtn.className = 'dir-toggle';
  dirBtn.textContent = 'Asc ↑';
  dirBtn.setAttribute('aria-pressed', 'false');
  dirBtn.addEventListener('click', function () {
    dir = dir === 'asc' ? 'desc' : 'asc';
    dirBtn.textContent = dir === 'asc' ? 'Asc ↑' : 'Desc ↓';
    dirBtn.setAttribute('aria-pressed', dir === 'desc' ? 'true' : 'false');
    rerender();
  });
  sortRow.appendChild(dirBtn);
  mount.appendChild(sortRow);

  mount.appendChild(status);

  rerender();
})();
