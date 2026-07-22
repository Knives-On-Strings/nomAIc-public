/**
 * Header typeahead (SPEC.md R103, §9.9.5): the interactive half of `/search/`'s
 * absorption into the header. `scripts/build_archive.py::page_shell` and
 * `::inject_site_chrome` now load this on EVERY page (it enhances the header, which is
 * present everywhere) — see the module-level docstring on `_search_form_html` for why
 * the search FORM itself already works with zero script (a plain GET against
 * `/games/`); this file only adds a live dropdown on top of that always-real baseline.
 *
 * REUSE, not reinvention: `webassets/search.js` (the retired `/search/` page's own
 * script) already exports the pure grouping/matching logic — `groupMatches` (games
 * first, their matching rules/proposals/champions gathered beneath) and `renderGroups`
 * (the createElement/textContent renderer, already proven safe against a raw-markup
 * payload in tests/test_search_js.mjs). Both are imported directly rather than
 * forked — the header dropdown and `/search/`'s old results list render IDENTICAL
 * markup (`.search-results`/`.game-group`/`.game-head`/`.tally`/`.game-hits`/`.hit-id`/
 * `.hit-text`), this file just wraps it in a positioned `<ul role="listbox">` and
 * layers ARIA + keyboard navigation on top of the anchors `renderGroups` already built.
 * `search.js`'s own `init()` (its DOM wiring for the now-gone `#archive-search` mount)
 * still runs when this module pulls it in, finds no such element anywhere in the built
 * tree, and no-ops by its own pre-existing guard — importing it costs nothing extra.
 *
 * No-JS baseline (invariant 10): the `<form>` `page_shell`/`inject_site_chrome` render
 * is a complete, always-submittable control on its own — this script only adds an
 * overlay; without it, a reader gets exactly the plain GET-to-`/games/` behavior R99
 * always promised, never a dead/broken control.
 *
 * SAFETY (invariant 9): every field in the index is public (see
 * `scripts/build_archive.py::build_search_index`); `renderGroups` already paints it
 * through `createElement`/`textContent` only. This file adds no new sink — it only
 * sets `id`/`class`/`role`/`aria-*` attributes on the elements `renderGroups` built.
 */
'use strict';
import { groupMatches, renderGroups } from './search.js';

const MIN_QUERY_LEN = 2;
const MAX_GROUPS = 8;

// ── pure helpers (unit-tested in tests/test_site_search.mjs) ────────────────────────

/** The next active option index for an Arrow key press: `delta` is +1 (Down) or -1
 *  (Up), `count` is the number of navigable options. Wraps around in both directions,
 *  and a press from "nothing selected" (`current < 0`) lands on the first option for
 *  Down or the last for Up, rather than skipping straight to the second/second-to-last.
 *  An empty list (`count === 0`) always yields -1 (nothing to select). Pure — no DOM. */
export function moveActive(current, delta, count) {
  if (!count) return -1;
  if (current < 0) return delta > 0 ? 0 : count - 1;
  return (current + delta + count) % count;
}

/** Whether the dropdown should be shown at all for the current (trimmed) query, and
 *  whether it should show a "no matches" row instead of `renderGroups`'s own grouped
 *  markup. `q.length < MIN_QUERY_LEN` (the brief's "on input >= 2 chars" rule) means no
 *  fetch has even happened yet for a 0/1-character query, so `show` is false and there
 *  is nothing to call "empty" either. Pure — no DOM, no fetch. */
export function dropdownState(q, groupCount) {
  if (q.length < MIN_QUERY_LEN) return { show: false, empty: false };
  return { show: true, empty: groupCount === 0 };
}

// ── DOM wiring (createElement/textContent only — invariant 9) ──────────────────────

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  const form = document.querySelector('form.site-search');
  const input = document.getElementById('site-search-q');
  if (!form || !input) return;
  const wrap = form.parentNode;
  if (!wrap) return;

  // The archive-root prefix, derived from the form's OWN action attribute (already
  // resolved per-depth by page_shell/inject_site_chrome) rather than recomputed here —
  // one source for "how many `../` back to the root", never two that could drift.
  const up = (form.getAttribute('action') || '').replace(/games\/?$/, '');

  const listbox = document.createElement('ul');
  listbox.className = 'site-search-results';
  listbox.setAttribute('role', 'listbox');
  listbox.setAttribute('aria-label', 'Search results');
  listbox.hidden = true;
  wrap.appendChild(listbox);

  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', 'site-search-listbox');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('autocomplete', 'off');
  listbox.id = 'site-search-listbox';

  let indexPromise = null;
  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(up + 'search-index.json')
        .then(function (r) { return r.json(); })
        .catch(function () { return []; });
    }
    return indexPromise;
  }

  let options = [];
  let active = -1;

  function updateActiveDescendant() {
    Array.prototype.forEach.call(options, function (el, i) {
      const on = i === active;
      el.classList.toggle('active', on);
      el.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    if (active >= 0 && options[active]) {
      input.setAttribute('aria-activedescendant', options[active].id);
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }

  function close() {
    while (listbox.firstChild) listbox.removeChild(listbox.firstChild);
    listbox.hidden = true;
    options = [];
    active = -1;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
  }

  // R109 (a11y pass, deferred finding from an earlier review): `renderGroups` nests
  // each group's real options inside plain `<li class="game-group">`/
  // `<ul class="game-hits">`/`<li>` wrappers that carry no ARIA role at all —
  // interposed between `listbox` (`role="listbox"`) and its `role="option"` children,
  // an unmarked wrapper breaks the accessible parent/child relationship a listbox
  // requires (a screen reader may never expose the nested options as this listbox's
  // own). `role="presentation"` on each wrapper makes it "disappear" from the
  // accessibility tree, so the option keeps a direct accessible line back to the
  // listbox despite the DOM nesting `renderGroups` uses for layout.
  //
  // The group-head anchor (`.game-head`, "Game 42 — 3 matches") is deliberately NEVER
  // an option: it is a group LABEL, not a navigable result, and it is not always even a
  // real link -- `renderGroups` only sets its `href` when `group.meta.url` exists (a
  // group that matched only on game metadata, with zero item hits, may have no `.url`
  // at all). Tagging an href-less anchor `role="option"` used to leave a keyboard user
  // able to arrow onto it and have Enter silently no-op. Now: a head WITH a real href
  // keeps its native link semantics (still `role="presentation"` per spec is ignored by
  // a focusable element, so it is still announced as a plain link -- just never part of
  // this listbox's own option set); a head with NO href is `aria-hidden` outright, since
  // it is inert for every input method but the mouse hovering over static text.
  function restructureAria() {
    Array.prototype.forEach.call(listbox.querySelectorAll('li.game-group'), function (li) {
      li.setAttribute('role', 'presentation');
    });
    Array.prototype.forEach.call(listbox.querySelectorAll('ul.game-hits'), function (ul) {
      ul.setAttribute('role', 'presentation');
    });
    Array.prototype.forEach.call(listbox.querySelectorAll('ul.game-hits > li'), function (li) {
      li.setAttribute('role', 'presentation');
    });
    Array.prototype.forEach.call(listbox.querySelectorAll('a.game-head'), function (a) {
      if (a.hasAttribute('href')) {
        a.setAttribute('role', 'presentation');
      } else {
        a.setAttribute('aria-hidden', 'true');
      }
    });
    // Only a hit anchor that actually carries an href becomes a listbox option -- a
    // reachable listbox descendant with a real destination, never a dead roving stop.
    return Array.prototype.slice.call(listbox.querySelectorAll('ul.game-hits a[href]'));
  }

  function open(q, idx) {
    const groups = groupMatches(idx, q).slice(0, MAX_GROUPS);
    const state = dropdownState(q, groups.length);
    while (listbox.firstChild) listbox.removeChild(listbox.firstChild);
    if (state.empty) {
      const none = document.createElement('li');
      none.className = 'ss-none';
      none.textContent = 'No matches.';
      listbox.appendChild(none);
      options = [];
    } else {
      renderGroups(listbox, document, groups, q);
      options = restructureAria();
      options.forEach(function (a, i) {
        a.id = 'ss-opt-' + i;
        a.setAttribute('role', 'option');
      });
    }
    active = -1;
    listbox.hidden = !state.show;
    input.setAttribute('aria-expanded', state.show ? 'true' : 'false');
    updateActiveDescendant();
  }

  function onInput() {
    const q = input.value.trim();
    if (q.length < MIN_QUERY_LEN) { close(); return; }
    loadIndex().then(function (idx) { open(q, idx); });
  }

  input.addEventListener('input', onInput);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); return; }
    if (!options.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = moveActive(active, 1, options.length);
      updateActiveDescendant();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = moveActive(active, -1, options.length);
      updateActiveDescendant();
    } else if (e.key === 'Enter') {
      const chosen = options[active];
      if (chosen && chosen.hasAttribute('href')) {
        e.preventDefault();
        window.location.href = chosen.getAttribute('href');
      }
    }
  });
  input.addEventListener('blur', function () {
    // A pending click on an option fires before this runs it out from under the click.
    setTimeout(close, 150);
  });
  document.addEventListener('click', function (e) {
    if (e.target !== input && !listbox.contains(e.target)) close();
  });
})();
