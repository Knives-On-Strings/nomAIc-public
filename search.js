/**
 * Batch 10.4 (OPEN-QUESTIONS.md Q44); upgraded per §9.8.7: archive-wide client-side
 * search, now GAME-AWARE. It loads the build-time index
 * (`scripts/build_archive.py::build_search_index` -> `search-index.json`, public fields
 * only — games, rules, proposals, champions, plus per-game facets) LAZILY, on first
 * interaction, and matches entirely client-side.
 *
 * Two enhancements over the flat-list original, both pure/testable (tests/test_search_js.mjs):
 *   1. Results are GROUPED BY GAME — one block per matching game ("Game 37 — 4 matches"),
 *      its matching rules/proposals/champions listed beneath, each still linking to its
 *      own page. A game matches if any of its entries match the query.
 *   2. FILTER CHIPS (outcome / era / lineage) AND with the text query, narrowing the
 *      grouped game list. The lineage facet is the game's distinct seat models, taken
 *      verbatim from the editorial roster the index already carries (the one public place
 *      a model name lives — see build_search_index / players.html).
 *
 * No-JS baseline (invariant 10, SPEC §9.7.8/§9.8.7): `search/index.html` renders only a
 * `<noscript>` explanation and an empty mount point without this script. Every control —
 * the input, the chips, the results — is injected here, never rendered dead in the HTML.
 *
 * SAFETY (invariant 9): every field in the index is public and already escaped where it
 * mattered in the single-game site; this script still never trusts that and paints all
 * model-authored text through `paintHighlight` (createElement/textContent only — see
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

/** A short, mono identifier for a matched sub-item, shown before its highlighted snippet
 *  (the snippet itself may be the rule text or a proposal rationale, so the id tells the
 *  reader *what* they're looking at). Never interprets text — pure string assembly. */
export function itemIdent(entry) {
  switch (entry.kind) {
    case 'rule': return '§' + entry.num;
    case 'proposal':
      return 'Turn ' + entry.turn + (entry.kind_label ? ' · ' + entry.kind_label : '');
    case 'champion': return 'Winner';
    default: return '';
  }
}

// ── grouping by game ───────────────────────────────────────────────────────────────

/** game number -> its `kind:"game"` index entry (labels, url, and the search facets).
 *  A game that matched only through, say, a rule still needs its header + facets, so we
 *  index every game entry up front rather than relying on it being in the matched set. */
export function gameMetaIndex(index) {
  var meta = {};
  index.forEach(function (e) { if (e.kind === 'game') meta[e.game] = e; });
  return meta;
}

/** Collapse the matches for `q` under their game: an ordered array of
 *  `{ game, meta, items }`, where `meta` is the game's index entry (or null if the index
 *  somehow lacks one) and `items` are the matching NON-game entries (rules, proposals,
 *  champions) beneath it. The game header itself stands in for a `kind:"game"` match, so
 *  a game whose only match is on its own label/winner/players yields an empty `items`.
 *  Games keep the index's first-appearance order (ascending game number). */
export function groupMatches(index, q) {
  var meta = gameMetaIndex(index);
  var order = [], groups = {};
  searchIndex(index, q).forEach(function (e) {
    var g = e.game;
    if (!Object.prototype.hasOwnProperty.call(groups, g)) { groups[g] = []; order.push(g); }
    if (e.kind !== 'game') groups[g].push(e);
  });
  return order.map(function (g) {
    return { game: g, meta: meta[g] || null, items: groups[g] };
  });
}

// ── facets ───────────────────────────────────────────────────────────────────────

/** The facet values of a game's meta entry, defaulted so a facet is never `undefined`. */
export function gameFacets(meta) {
  if (!meta) return { outcome: '', era: '', lineages: [] };
  return { outcome: meta.outcome_type || '', era: meta.era || '',
           lineages: meta.lineages || [] };
}

/** The distinct facet values present across every game in `index`, each sorted — this is
 *  the fixed set of chips to offer, stable regardless of the current query. */
export function facetOptions(index) {
  var outcome = {}, era = {}, lineage = {};
  index.forEach(function (e) {
    if (e.kind !== 'game') return;
    if (e.outcome_type) outcome[e.outcome_type] = true;
    if (e.era) era[e.era] = true;
    (e.lineages || []).forEach(function (l) { lineage[l] = true; });
  });
  return { outcome: Object.keys(outcome).sort(),
           era: Object.keys(era).sort(),
           lineage: Object.keys(lineage).sort() };
}

/** Does a game pass the active facet selection? Within a facet, selected values OR (a set
 *  membership test); across facets, AND. An empty set for a facet means "no filter". For
 *  lineage (a game has several) the game passes if ANY of its lineages is selected. */
export function passesFacets(meta, active) {
  var f = gameFacets(meta);
  if (active.outcome && active.outcome.size && !active.outcome.has(f.outcome)) return false;
  if (active.era && active.era.size && !active.era.has(f.era)) return false;
  if (active.lineage && active.lineage.size) {
    var hit = f.lineages.some(function (l) { return active.lineage.has(l); });
    if (!hit) return false;
  }
  return true;
}

/** The grouped, facet-filtered result for `q` — the single function the DOM layer renders
 *  and the tests exercise. `active` is `{outcome, era, lineage}` of Sets. */
export function filteredGroups(index, q, active) {
  return groupMatches(index, q).filter(function (g) {
    return passesFacets(g.meta, active);
  });
}

// ── rendering (createElement/textContent only — invariant 9) ───────────────────────

/** Render `groups` into `container`, replacing its children. `doc` is passed explicitly
 *  so a test can hand in a fake document (see tests/test_search_js.mjs); production passes
 *  the real one. Model-authored text (rule/proposal snippets, the game label) is only ever
 *  set via `textContent`/`paintHighlight`, so a payload can never become markup. */
export function renderGroups(container, doc, groups, q) {
  while (container.firstChild) container.removeChild(container.firstChild);
  groups.forEach(function (group) {
    var li = doc.createElement('li');
    li.className = 'game-group';

    var head = doc.createElement('a');
    head.className = 'game-head';
    if (group.meta && group.meta.url) head.href = group.meta.url;
    var label = doc.createElement('span');
    label.className = 'game-label';
    var labelText = (group.meta && group.meta.game_label) || ('Game ' + group.game);
    paintHighlight(label, doc, labelText, q);
    var tally = doc.createElement('span');
    tally.className = 'tally';
    var n = group.items.length;
    tally.textContent = n ? ('— ' + n + ' match' + (n === 1 ? '' : 'es'))
                          : '— matched on game details';
    head.appendChild(label);
    head.appendChild(tally);
    li.appendChild(head);

    if (group.items.length) {
      var hits = doc.createElement('ul');
      hits.className = 'game-hits';
      group.items.forEach(function (entry) {
        var hli = doc.createElement('li');
        var a = doc.createElement('a');
        if (entry.url) a.href = entry.url;
        var tag = doc.createElement('span');
        tag.className = 'tag';
        tag.textContent = KIND_LABEL[entry.kind] || entry.kind;
        a.appendChild(tag);
        var ident = itemIdent(entry);
        if (ident) {
          var id = doc.createElement('span');
          id.className = 'hit-id';
          id.textContent = ident;
          a.appendChild(id);
        }
        var snippet = doc.createElement('span');
        snippet.className = 'hit-text';
        paintHighlight(snippet, doc, bestField(entry, q), q);
        a.appendChild(snippet);
        hli.appendChild(a);
        hits.appendChild(hli);
      });
      li.appendChild(hits);
    }
    container.appendChild(li);
  });
}

/** A friendly chip label for a facet value: outcome/era values are snake_case machine
 *  strings, prettified for display; a lineage value is a model name shown verbatim (it is
 *  the same word players.html prints, and cross-checking depends on it staying literal). */
export function chipLabel(facet, value) {
  if (facet === 'lineage') return value;
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ');
}

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

  var facets = document.createElement('div');
  facets.className = 'facets';
  mount.appendChild(facets);

  var results = document.createElement('ul');
  results.className = 'search-results';
  mount.appendChild(results);

  var MAX_GAMES = 60;
  var active = { outcome: new Set(), era: new Set(), lineage: new Set() };
  var chipsBuilt = false;

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

  function buildChips(idx) {
    if (chipsBuilt) return;
    chipsBuilt = true;
    var opts = facetOptions(idx);
    [['outcome', 'Outcome', opts.outcome, active.outcome],
     ['era', 'Era', opts.era, active.era],
     ['lineage', 'Lineage', opts.lineage, active.lineage]].forEach(function (spec) {
      var facet = spec[0], labelText = spec[1], values = spec[2], set = spec[3];
      if (!values.length) return;
      var grp = document.createElement('div');
      grp.className = 'facet';
      var lab = document.createElement('span');
      lab.className = 'facet-label';
      lab.textContent = labelText;
      grp.appendChild(lab);
      values.forEach(function (v) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chip';
        btn.textContent = chipLabel(facet, v);
        btn.setAttribute('aria-pressed', 'false');
        btn.addEventListener('click', function () {
          if (set.has(v)) {
            set.delete(v);
            btn.classList.remove('on');
            btn.setAttribute('aria-pressed', 'false');
          } else {
            set.add(v);
            btn.classList.add('on');
            btn.setAttribute('aria-pressed', 'true');
          }
          rerender();
        });
        grp.appendChild(btn);
      });
      facets.appendChild(grp);
    });
  }

  function rerender() {
    var q = input.value.trim();
    if (!q) { renderGroups(results, document, [], ''); tally.textContent = ''; return; }
    loadIndex().then(function (idx) {
      buildChips(idx);
      var groups = filteredGroups(idx, q, active);
      renderGroups(results, document, groups.slice(0, MAX_GAMES), q);
      var g = groups.length;
      tally.textContent = g
        ? (g + (g > MAX_GAMES ? '+' : '') + (g === 1 ? ' game' : ' games'))
        : 'No matches.';
    });
  }

  input.addEventListener('input', rerender);
  input.addEventListener('focus', function () {
    loadIndex().then(buildChips);
  }, { once: true });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { input.value = ''; rerender(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input) { e.preventDefault(); input.focus(); }
  });
})();
