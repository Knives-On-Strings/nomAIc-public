/**
 * `/games/` filter row + sort (SPEC.md R102, §9.9.4): JS-injected chips (outcome, era,
 * lineage) and a sort `<select>` (newest / most adoptions / highest score) over the
 * cards `scripts/build_archive.py::build_games_index` already rendered, in full,
 * newest-first, server-side.
 *
 * R103 (§9.9.5) additionally makes THIS module the owner of `?q=` on `/games/` — not
 * `site-search.js` — because the filtering itself (hide/show over already-rendered
 * cards, by `data-*`/text content) is exactly this file's existing job; a second module
 * reaching into `.game-card` elements to hide them would risk the two fighting over the
 * same `hidden` flag. On load, a `q` query param seeds a text filter (case-/accent-
 * insensitive substring over each card's own `textContent`, the same fold
 * `webassets/text-match.js::hasMatch` already gives `search.js`'s matcher) ANDed with
 * the outcome/era/lineage chips, pre-filling an injected text input so the reader can
 * see and change it — never a second, hidden filter they can't discover.
 *
 * Lineage facet (amends R102, §9.9.4): each card's `data-lineage` is a SPACE-SEPARATED
 * list of the game's distinct seat models (`scripts/build_archive.py::_game_lineages`,
 * the same derivation the search index's own `lineages` facet already uses) — a game
 * can carry several, so this facet is OR-within-itself against the game's own set, same
 * as `webassets/search.js::passesFacets` already does for its lineage chips.
 *
 * Result count (amends R102/R109, §9.9.4/§9.9.12): a `role="status" aria-live="polite"`
 * region, injected alongside the other controls, restates "N of M games shown" after
 * every filter/sort change — a non-visual reader gets the same "how many are left"
 * signal a sighted reader gets for free by seeing the list shrink.
 *
 * No-JS baseline (invariant 10): `#games-filter` is an EMPTY mount point in the shipped
 * HTML — every chip, the text input, the sort control, and the result-count region are
 * injected here, at runtime, so a reader without JavaScript never sees a dead control,
 * and still sees every game, in the same newest-first order the server rendered (the
 * `.game-card` elements are never removed from the DOM by this script — only hidden or
 * reordered). A `?q=` in the URL with no script simply does nothing — the full list
 * renders, the same "form degrades to landing on the games page" the header search
 * form (R99) already promises.
 *
 * SAFETY (invariant 9): createElement/textContent only — no innerHTML, outerHTML,
 * insertAdjacentHTML, a raw document write call, or eval anywhere in this file.
 */
'use strict';
import { hasMatch } from './text-match.js';
// Amends R102 (site-tweaks-2 task): `distinctValues` is now the ONE shared copy
// `filter-controls.js` exports — `webassets/site-players.js` imports it too, rather
// than a second, drifting copy of the same 8-line function. Re-exported here so the
// existing `import { distinctValues } from './site-filter.js'` call site
// (`tests/test_site_filter.mjs`) keeps working unchanged.
import { distinctValues } from './filter-controls.js';
export { distinctValues };

// ── pure helpers (unit-tested in tests/test_site_filter.mjs) ────────────────────────

/** One card's filterable/sortable facts, read from its `data-*` attributes plus its own
 *  rendered text (for the `?q=` text filter, below). `index` is the card's position in
 *  the server-rendered (newest-first) DOM order — the fallback "newest" sort is just
 *  this number, so it never needs its own game-number attribute: the server already
 *  decided the newest-first order, and this script's job is to preserve or deliberately
 *  override it, not re-derive it. */
export function cardRecord(el, index) {
  var ds = el.dataset || {};
  return {
    el: el,
    index: index,
    outcome: ds.outcome || '',
    era: ds.era || '',
    turns: parseInt(ds.turns, 10) || 0,
    adoptions: parseInt(ds.adoptions, 10) || 0,
    scoreMax: parseInt(ds.scoreMax, 10) || 0,
    // `data-lineage` is space-separated (a multi-lineage game); split on any run of
    // whitespace and drop empties so an absent/empty attribute yields [], not [''].
    lineages: (ds.lineage || '').split(/\s+/).filter(function (v) { return v; }),
    text: el.textContent || '',
  };
}

/** The value of `name` from a `location.search`-shaped query string (a leading `?` is
 *  optional and stripped), URL-decoded — or `''` if absent. A small manual parser
 *  rather than `URLSearchParams` so this stays a plain pure function, trivially
 *  unit-tested without a DOM/URL global standing in for one. */
export function queryParam(search, name) {
  var qs = (search || '').replace(/^\?/, '');
  if (!qs) return '';
  var parts = qs.split('&');
  for (var i = 0; i < parts.length; i++) {
    var eq = parts[i].indexOf('=');
    var key = eq === -1 ? parts[i] : parts[i].slice(0, eq);
    if (decodeURIComponent(key.replace(/\+/g, ' ')) === name) {
      var val = eq === -1 ? '' : parts[i].slice(eq + 1);
      return decodeURIComponent(val.replace(/\+/g, ' '));
    }
  }
  return '';
}

/** Does `record`'s card contain `q` at all, case-/accent-insensitively? Empty `q` always
 *  passes (no text filter active) — mirrors `webassets/search.js`'s own matcher so a
 *  `?q=` here and a header-dropdown query agree on what counts as a match. */
export function matchesText(record, q) {
  if (!q) return true;
  return hasMatch(record.text, q);
}

/** The distinct lineage VALUES across `records` — like `distinctValues`, but for the
 *  `lineages` field, which is itself an array per record (a game can carry several
 *  seat models), so this flattens before de-duping/sorting rather than reading one
 *  scalar per record. */
export function distinctLineages(records) {
  var seen = {}, out = [];
  records.forEach(function (r) {
    (r.lineages || []).forEach(function (v) {
      if (v && !Object.prototype.hasOwnProperty.call(seen, v)) {
        seen[v] = true;
        out.push(v);
      }
    });
  });
  return out.sort();
}

/** Does `record` pass the active chip selection (plus the R103 `?q=` text filter)?
 *  Within a facet, selected values OR (an empty set for a facet means "no filter");
 *  across facets, AND — same rule `webassets/search.js::passesFacets` already uses for
 *  its own chip row. `active.text` (absent/empty means "no text filter") ANDs in the
 *  same way.
 *
 *  `active.lineage` is a facet of a DIFFERENT shape from outcome/era: a record itself
 *  carries a SET of lineages (a multi-model game), so it passes if ANY of its own
 *  lineages is among the selected ones — "OR within the record" layered under the
 *  usual "OR within the facet, AND across facets" rule, exactly the same semantics
 *  `webassets/search.js::passesFacets` already gives its lineage chips. */
export function passesFilters(record, active) {
  if (active.outcome && active.outcome.size && !active.outcome.has(record.outcome)) {
    return false;
  }
  if (active.era && active.era.size && !active.era.has(record.era)) {
    return false;
  }
  if (active.lineage && active.lineage.size) {
    var lineages = record.lineages || [];
    var hit = lineages.some(function (l) { return active.lineage.has(l); });
    if (!hit) return false;
  }
  if (active.text && !matchesText(record, active.text)) {
    return false;
  }
  return true;
}

/** A friendly chip label for a machine outcome bucket (`_outcome_bucket` in
 *  `scripts/build_archive.py`) — snake_case -> "Turn limit", etc. An era value is
 *  already a plain word and is only capitalized. */
export function bucketLabel(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ');
}

/** The comparator for one of the three sort keys. `"newest"` (and anything
 *  unrecognised, so a stray/removed option never silently reorders the list) restores
 *  the server's own newest-first DOM order via `index`; the other two sort descending
 *  by their numeric field, tie-broken by that same original order so the sort is
 *  deterministic rather than however the engine's sort happens to break ties. */
export function sortComparator(sortKey) {
  if (sortKey === 'adoptions') {
    return function (a, b) { return (b.adoptions - a.adoptions) || (a.index - b.index); };
  }
  if (sortKey === 'score') {
    return function (a, b) { return (b.scoreMax - a.scoreMax) || (a.index - b.index); };
  }
  return function (a, b) { return a.index - b.index; };
}

/** Records passing `active`'s filters, in `sortKey` order — the one function the DOM
 *  layer below calls and the tests exercise directly. */
export function visibleSorted(records, active, sortKey) {
  return records.filter(function (r) { return passesFilters(r, active); })
    .slice().sort(sortComparator(sortKey));
}

/** Amends R102/R109 (§9.9.4/§9.9.12): the exact text of the aria-live result-count
 *  region, "N of M games shown" — a pure function of the same inputs `visibleSorted`
 *  already takes, so the DOM layer below need not duplicate the filtering to know how
 *  many passed. `sortKey` doesn't change the COUNT, only the order, but is accepted
 *  here (rather than a plain `visibleCount`) so the one call site can pass exactly the
 *  same three arguments it already computes for `visibleSorted` itself.
 *
 *  `pageInfo` (amends R102, site-tweaks-2 pagination task): `{page, pages}` when
 *  `/games/` is paginated (`pages > 1`) — absent/undefined on a single-page archive,
 *  where the wording is byte-identical to before this task. When present, M is only
 *  ever THIS PAGE's own card count, never the whole archive's — pretending otherwise
 *  would mislead a reader who can't see the pagination nav (a non-visual reader
 *  relying on this aria-live region alone), so the wording says "on this page". */
export function statusText(records, active, sortKey, pageInfo) {
  var visible = visibleSorted(records, active, sortKey).length;
  var scoped = !!(pageInfo && pageInfo.pages > 1);
  return visible + ' of ' + records.length + ' games shown' + (scoped ? ' on this page' : '');
}

/** Amends R102 (§9.9.4, pagination task): is ANY chip or the text filter currently
 *  active? Shared by `pageFilterNoteText` below — kept separate from `passesFilters`,
 *  which asks whether one RECORD matches, not whether the active state as a whole
 *  represents "a filter is on". */
export function anyFilterActive(active) {
  return !!((active.outcome && active.outcome.size) ||
           (active.era && active.era.size) ||
           (active.lineage && active.lineage.size) ||
           active.text);
}

/** Amends R102 (§9.9.4, pagination task): the visible "filtering only this page" note
 *  — `''` (nothing rendered) unless the archive IS paginated (`pageInfo.pages > 1`)
 *  AND a chip/text filter is actually active. A reader who hasn't touched a control
 *  yet sees every card already on this page, which is not misleading on its own — the
 *  note exists for the moment a reader narrows the visible set and might reasonably
 *  assume that narrowed the WHOLE archive, not just these 20 (or fewer, on the last
 *  page) games. This is the "simpler, robust option" the task offered over having
 *  this script fetch sibling pages' cards over the network: no second request, no
 *  partial/merged result set, no new failure mode — just an honest sentence. */
export function pageFilterNoteText(active, pageInfo) {
  if (!pageInfo || pageInfo.pages <= 1 || !anyFilterActive(active)) return '';
  return 'Filtering this page only — use the header search to search the whole archive.';
}

// ── DOM wiring (createElement/textContent only — invariant 9) ──────────────────────

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  var mount = document.getElementById('games-filter');
  var container = document.querySelector('.game-cards');
  if (!mount || !container) return;

  var cards = Array.prototype.slice.call(container.querySelectorAll('.game-card'));
  if (!cards.length) return;
  var records = cards.map(function (el, i) { return cardRecord(el, i); });

  // R103 (§9.9.5): a `?q=` on THIS url seeds the text filter — the header search form's
  // own no-JS GET target — so a reader who submits it lands here already filtered.
  var initialQuery = queryParam(window.location.search, 'q');
  var active = { outcome: new Set(), era: new Set(), lineage: new Set(), text: initialQuery };
  var sortKey = 'newest';

  // Amends R102 (§9.9.4, pagination task): `data-page`/`data-pages`, present on the
  // mount only when `/games/` is actually paginated (`build_games_index`, absent for a
  // single-page archive) — read once, passed straight through to `statusText`/
  // `pageFilterNoteText`.
  var pageInfo;
  if (mount.dataset.page && mount.dataset.pages) {
    pageInfo = { page: parseInt(mount.dataset.page, 10) || 1,
                pages: parseInt(mount.dataset.pages, 10) || 1 };
  }

  // Amends R102/R109 (§9.9.4/§9.9.12): a visually-quiet, always-present result-count
  // region — createElement/textContent only (invariant 9) — updated by every
  // `rerender()`, mirroring the visible hide/show a sighted reader already sees.
  var status = document.createElement('div');
  status.id = 'games-filter-status';
  status.className = 'filter-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  // Amends R102 (§9.9.4, pagination task): the "filtering this page only" note — same
  // aria-live region as `status` (a screen-reader user gets both sentences in one
  // announcement), empty (and so invisible — no dead control) whenever
  // `pageFilterNoteText` says there is nothing to warn about.
  var note = document.createElement('p');
  note.id = 'games-filter-page-note';
  note.className = 'filter-page-note';
  note.setAttribute('role', 'status');
  note.setAttribute('aria-live', 'polite');

  function rerender() {
    records.forEach(function (r) {
      r.el.hidden = !passesFilters(r, active);
    });
    visibleSorted(records, active, sortKey).forEach(function (r) {
      container.appendChild(r.el);   // moves the existing node; nothing is recreated
    });
    status.textContent = statusText(records, active, sortKey, pageInfo);
    note.textContent = pageFilterNoteText(active, pageInfo);
  }

  function buildFacet(host, labelText, values, set, formatLabel) {
    if (!values.length) return;
    var format = formatLabel || bucketLabel;
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
      btn.textContent = format(v);
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
    host.appendChild(grp);
  }

  var textRow = document.createElement('div');
  textRow.className = 'facet';
  var textLabel = document.createElement('label');
  textLabel.className = 'facet-label';
  textLabel.setAttribute('for', 'games-text-filter');
  textLabel.textContent = 'Filter';
  var textInput = document.createElement('input');
  textInput.type = 'search';
  textInput.id = 'games-text-filter';
  textInput.placeholder = 'Filter these games';
  textInput.value = initialQuery;
  textInput.addEventListener('input', function () {
    active.text = textInput.value.trim();
    rerender();
  });
  textRow.appendChild(textLabel);
  textRow.appendChild(textInput);
  mount.appendChild(textRow);

  var facets = document.createElement('div');
  facets.className = 'facets';
  mount.appendChild(facets);
  buildFacet(facets, 'Outcome', distinctValues(records, 'outcome'), active.outcome);
  buildFacet(facets, 'Era', distinctValues(records, 'era'), active.era);
  // Lineage values are model names shown VERBATIM (an identity formatter, not
  // `bucketLabel`) — the same "not prettified like outcome/era" convention
  // `webassets/search.js`'s own lineage chips already use, so a reader can cross-check
  // a chip here against the same word on the players page.
  buildFacet(facets, 'Lineage', distinctLineages(records), active.lineage,
    function (v) { return v; });

  var sortRow = document.createElement('div');
  sortRow.className = 'facet';
  var sortLabel = document.createElement('label');
  sortLabel.className = 'facet-label';
  sortLabel.setAttribute('for', 'games-sort');
  sortLabel.textContent = 'Sort';
  var select = document.createElement('select');
  select.id = 'games-sort';
  [['newest', 'Newest'], ['adoptions', 'Most adoptions'], ['score', 'Highest score']]
    .forEach(function (pair) {
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
  mount.appendChild(sortRow);

  mount.appendChild(status);
  mount.appendChild(note);

  rerender();
})();
