/**
 * Batch 10.4 (OPEN-QUESTIONS.md Q44): archive-wide client-side search. Loads the
 * build-time index (`scripts/build_archive.py::build_search_index` -> `search-index.json`,
 * public fields only — games, rules, proposals, champions) LAZILY, on first interaction
 * with the search box, and matches entirely client-side.
 *
 * No-JS baseline (invariant 10, SPEC §9.7.8/§9.8.7): `search/index.html` renders only a
 * `<noscript>` explanation and an empty mount point without this script. Every control —
 * the input, the results list — is injected here, never rendered dead in the HTML.
 *
 * SAFETY (invariant 9): every field in the index is public and already escaped where it
 * mattered at rendering time in the single-game site; this script still never trusts that
 * and paints all of it through `paintHighlight` (createElement/textContent only — see
 * text-match.js). No innerHTML, no template strings turned into markup.
 */
'use strict';
import { hasMatch, paintHighlight } from './text-match.js';

// ── pure matching (unit-tested in tests/test_search_js.mjs) ────────────────────────

/** The searchable text fields of one index entry, in the order they should be tried for
 *  a highlight (the first field that actually matches `q` is what gets shown, painted). */
export function fieldsOf(entry) {
  switch (entry.kind) {
    case 'game':
      return [entry.game_label || '', entry.winner || ''].concat(entry.players || []);
    case 'rule':
      return ['§' + entry.num, entry.text || ''];
    case 'proposal':
      return [entry.kind_label || '', entry.text || '', entry.rationale || '',
              entry.proposer || ''];
    case 'champion':
      return [entry.winner || ''];
    default:
      return [];
  }
}

/** True if any searchable field of `entry` contains `q` (accent-/case-insensitive). */
export function matchEntry(entry, q) {
  if (!q) return false;
  return fieldsOf(entry).some(function (f) { return hasMatch(f, q); });
}

/** Every entry in `index` that matches `q`, in the index's own order (games, rules,
 *  proposals, champions are already grouped by `build_search_index`'s own emission
 *  order — see that function's docstring). */
export function searchIndex(index, q) {
  if (!q) return [];
  return index.filter(function (e) { return matchEntry(e, q); });
}

/** The field to actually highlight for a matched entry: the first field that matches,
 *  falling back to the first field at all so an entry never renders with nothing shown. */
export function bestField(entry, q) {
  var fields = fieldsOf(entry);
  var hit = fields.find(function (f) { return hasMatch(f, q); });
  return hit !== undefined ? hit : (fields[0] || '');
}

var KIND_LABEL = { game: 'Game', rule: 'Rule', proposal: 'Proposal', champion: 'Champion' };

// ── DOM wiring ───────────────────────────────────────────────────────────────────

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  var mount = document.getElementById('archive-search');
  if (!mount) return;

  var tools = document.createElement('div');
  tools.className = 'tools';
  var input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Search games, rules, proposals, champions…  (press /)';
  input.setAttribute('aria-label', 'Search the archive');
  var tally = document.createElement('span');
  tally.className = 'tally';
  tally.setAttribute('role', 'status');
  tally.setAttribute('aria-live', 'polite');
  tools.appendChild(input);
  tools.appendChild(tally);
  mount.appendChild(tools);

  var results = document.createElement('ul');
  results.className = 'search-results';
  mount.appendChild(results);

  var MAX_RESULTS = 50;
  var indexPromise = null;
  function loadIndex() {
    if (!indexPromise) {
      tally.textContent = 'Loading…';
      // The index lives at the archive root; this page is one level down
      // (`search/index.html`), the same `../` depth convention every other archive
      // page already uses (scripts/build_archive.py::_shell).
      indexPromise = fetch('../search-index.json')
        .then(function (r) { return r.json(); })
        .catch(function () { return []; });
    }
    return indexPromise;
  }

  function render(entries, q) {
    while (results.firstChild) results.removeChild(results.firstChild);
    entries.slice(0, MAX_RESULTS).forEach(function (entry) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = entry.url;
      var kindTag = document.createElement('span');
      kindTag.className = 'tag';
      kindTag.textContent = KIND_LABEL[entry.kind] || entry.kind;
      var label = document.createElement('span');
      paintHighlight(label, document, bestField(entry, q), q);
      a.appendChild(kindTag);
      a.appendChild(label);
      li.appendChild(a);
      results.appendChild(li);
    });
    if (!q) tally.textContent = '';
    else tally.textContent = entries.length
      ? (entries.length + (entries.length > MAX_RESULTS ? '+' : '') + ' matching')
      : 'No matches.';
  }

  input.addEventListener('input', function () {
    var q = input.value.trim();
    if (!q) { render([], ''); return; }
    loadIndex().then(function (idx) { render(searchIndex(idx, q), q); });
  });
  input.addEventListener('focus', function () { loadIndex(); }, { once: true });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; render([], ''); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) { e.preventDefault(); input.focus(); }
  });
})();
