/**
 * Theme toggle (SPEC.md R99, §9.9.1): wires the header's `#theme-toggle` button to flip
 * between light and dark, persisting the choice in `localStorage['theme']`.
 *
 * The FIRST-PAINT theme decision is made by a tiny inline `<script>` `page_shell` emits
 * in `<head>` — it reads `localStorage`, falls back to `prefers-color-scheme`, and sets
 * `data-theme` on `<html>` before the page paints, so there is never a flash of the
 * wrong theme. This file only handles the *toggle* on top of that: a reader with
 * JavaScript disabled still gets a correctly-themed page from the inline script (and
 * the stylesheet's own `prefers-color-scheme` fallback) — they just have no button to
 * switch it manually (invariant 10: JS is progressive enhancement, never load-bearing).
 *
 * SAFETY (invariant 9): textContent/attribute APIs only — no innerHTML, outerHTML,
 * insertAdjacentHTML, document.write, or eval anywhere in this file.
 */
'use strict';

/** The theme `#theme-toggle` should switch TO, given the current one. Unrecognised or
 *  missing input defaults to treating the page as "light" (so a first click reliably
 *  goes dark, rather than silently doing nothing). */
export function otherTheme(current) {
  return current === 'dark' ? 'light' : 'dark';
}

/** Applies `theme` to the document and persists it. `localStorage` can throw (private
 *  browsing, storage disabled, quota) — the theme still applies to this page view, it
 *  just will not be remembered for the next one. */
export function applyTheme(doc, win, theme) {
  doc.documentElement.setAttribute('data-theme', theme);
  try {
    win.localStorage.setItem('theme', theme);
  } catch (e) {
    // Persistence failed; the in-page theme change above already succeeded.
  }
}

/** Whether the nav menu should start collapsed for this viewport (R99, §9.9.1).
 *  The markup ships `<details class="nav-menu" open>` so the nav is visible with no
 *  JavaScript at any width (CSS cannot reliably force a closed details open — current
 *  Chromium hides closed content via `::details-content` `content-visibility`, which
 *  child display values cannot pierce). Collapsing on narrow viewports is therefore a
 *  JS progressive enhancement, not the baseline. Exported for the Node test. */
export function shouldCollapseNav(matches) {
  return matches === true;
}

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  var doc = document;
  var btn = doc.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var current = doc.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(doc, window, otherTheme(current));
    });
  }
  var menu = doc.querySelector('details.nav-menu');
  if (menu && typeof window.matchMedia === 'function' &&
      shouldCollapseNav(window.matchMedia('(max-width: 39.99rem)').matches)) {
    menu.removeAttribute('open');
  }
})();
