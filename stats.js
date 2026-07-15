/**
 * Batch 10.4 (OPEN-QUESTIONS.md Q44): the interactive layer for /stats/ — click-to-sort
 * table headers, a per-seat filter, and hover/click highlighting of a seat's row+column
 * in the vote-alignment matrix. Vanilla ES module, no framework, no bundler.
 *
 * Every control here is INJECTED — `scripts/build_archive.py` renders plain, complete
 * `<table>`s with no controls at all. A reader without JavaScript sees exactly those
 * tables and nothing else: no dead sort button, no dead filter box (SPEC §9.7.8 /
 * invariant 10, extended to the archive by §9.8.7).
 *
 * SAFETY: every value painted here comes from `build_archive.py`'s own already-escaped
 * HTML (seat names, kind labels) via `textContent`/`createElement` only — see
 * text-match.js's header for the full invariant-9 rule this file also obeys.
 */
'use strict';
import { hasMatch, paintHighlight } from './text-match.js';

// ── pure helpers (unit-tested in tests/test_stats_js.mjs) ──────────────────────────

/** The value a `<td>` sorts by: its `data-v` attribute (a plain number the server
 *  already computed) when present, else its own text, numeric if it parses as one. */
export function sortValue(cell) {
  if (!cell) return '';
  var v = typeof cell.getAttribute === 'function' ? cell.getAttribute('data-v') : null;
  if (v !== null && v !== undefined && v !== '') {
    var n = parseFloat(v);
    if (!isNaN(n)) return n;
  }
  var t = (cell.textContent || '').trim();
  var n2 = parseFloat(t);
  return (t !== '' && !isNaN(n2) && String(n2) === t) ? n2 : t.toLowerCase();
}

/** Ascending comparator over two `sortValue()` results. Numbers sort before strings
 *  (a column is either all-numeric via `data-v` or all-text; mixed input just falls
 *  back to string comparison, which is still a total order, never a crash). */
export function compareValues(a, b) {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b));
}

/** Should the cell/header carrying these `data-*` attributes highlight when `seat` is
 *  hovered/pinned? A pure predicate so the hover-highlight rule is testable without a
 *  live DOM: true if the cell IS that seat's own row header, column header, or a cell
 *  at the intersection of that seat's row or column. */
export function shouldHighlight(attrs, seat) {
  if (!seat) return false;
  return attrs.seat === seat || attrs.row === seat || attrs.col === seat;
}

function readAttrs(el) {
  return {
    seat: el.getAttribute('data-seat'),
    row: el.getAttribute('data-row'),
    col: el.getAttribute('data-col'),
  };
}

// ── DOM wiring ───────────────────────────────────────────────────────────────────

function enhanceSortableTable(table) {
  var thead = table.querySelector('thead');
  var tbody = table.querySelector('tbody');
  if (!thead || !tbody) return;
  var ths = Array.prototype.slice.call(thead.querySelectorAll('th'));
  if (ths.length < 2) return;   // a single-column table has nothing to sort

  var state = { col: -1, dir: 1 };
  ths.forEach(function (th, i) {
    th.classList.add('sortable');
    th.setAttribute('role', 'button');
    th.setAttribute('tabindex', '0');
    th.setAttribute('aria-label', th.textContent.trim() + ' — sort');

    function doSort() {
      var dir = (state.col === i) ? -state.dir : 1;
      state = { col: i, dir: dir };
      var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
      rows.sort(function (ra, rb) {
        var ca = ra.children[i], cb = rb.children[i];
        return dir * compareValues(sortValue(ca), sortValue(cb));
      });
      rows.forEach(function (r) { tbody.appendChild(r); });
      ths.forEach(function (h) { h.classList.remove('sort-asc', 'sort-desc'); });
      th.classList.add(dir > 0 ? 'sort-asc' : 'sort-desc');
    }
    th.addEventListener('click', doSort);
    th.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doSort(); }
    });
  });
}

function enhanceSeatFilter(doc, table) {
  if (table.id !== 'seat-stats-table') return;   // the only table with a "Seat" column
  var tbody = table.querySelector('tbody');
  if (!tbody) return;
  var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
  if (!rows.length) return;

  var tools = doc.createElement('div');
  tools.className = 'tools';
  var input = doc.createElement('input');
  input.type = 'search';
  input.placeholder = 'Filter by seat…';
  input.setAttribute('aria-label', 'Filter the per-seat table by seat name');
  var tally = doc.createElement('span');
  tally.className = 'tally';
  tally.setAttribute('role', 'status');
  tally.setAttribute('aria-live', 'polite');
  tools.appendChild(input);
  tools.appendChild(tally);
  table.parentNode.insertBefore(tools, table);

  input.addEventListener('input', function () {
    var q = input.value.trim();
    var shown = 0;
    rows.forEach(function (row) {
      var nameCell = row.children[0];
      var name = nameCell ? nameCell.textContent : '';
      var hit = hasMatch(name, q);
      row.hidden = !hit;
      if (hit) shown++;
      if (nameCell) paintHighlight(nameCell, doc, name, q);
    });
    tally.textContent = q ? (shown + ' matching') : '';
  });
}

function enhanceAlignmentMatrix(doc) {
  var table = doc.getElementById('alignment-table');
  if (!table) return;
  var cells = Array.prototype.slice.call(
    table.querySelectorAll('[data-seat], [data-row], [data-col]'));
  if (!cells.length) return;

  var pinned = null;
  function paint(seat) {
    cells.forEach(function (c) {
      c.classList.toggle('hl', shouldHighlight(readAttrs(c), seat));
    });
  }
  function clear() { cells.forEach(function (c) { c.classList.remove('hl'); }); }

  cells.forEach(function (c) {
    var attrs = readAttrs(c);
    var seat = attrs.seat || attrs.row;
    if (!seat) return;
    c.addEventListener('mouseenter', function () { if (!pinned) paint(seat); });
    c.addEventListener('mouseleave', function () { if (!pinned) clear(); });
    c.addEventListener('click', function () {
      pinned = (pinned === seat) ? null : seat;
      if (pinned) paint(pinned); else clear();
    });
  });
}

(function init() {
  if (typeof document === 'undefined') return;   // imported under Node for its exports
  var doc = document;
  Array.prototype.slice.call(doc.querySelectorAll('.stats-table')).forEach(function (t) {
    // The alignment matrix gets hover/click highlighting, not sorting — reordering its
    // rows would desync them from the (fixed) column headers, which name the same seats.
    if (t.id === 'alignment-table') return;
    enhanceSortableTable(t);
    enhanceSeatFilter(doc, t);
  });
  enhanceAlignmentMatrix(doc);
})();
