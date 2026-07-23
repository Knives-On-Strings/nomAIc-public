/**
 * Pure helpers shared between the archive's chip-filter surfaces — `/games/`'s
 * outcome/era/lineage chips (`site-filter.js`, SPEC.md R102/§9.9.4) and `/players/`'s
 * sort/lineage-filter controls (`site-players.js`, amends R104/§9.9.6). Same "small,
 * dependency-free shared module, no bundler" precedent `text-match.js` already set for
 * `search.js`/`stats.js` — factored out here rather than copied a second time, per the
 * site-tweaks-2 task's own instruction to import shared pure functions rather than
 * duplicate them.
 *
 * SAFETY (invariant 9): every function here is pure — no DOM, no `document` — so it
 * carries no innerHTML/outerHTML/eval risk of its own; the callers that build real DOM
 * from these values (`site-filter.js`, `site-players.js`) are the ones
 * `scripts/spec_audit.py::check_no_unsafe_sinks` scans for that.
 */
'use strict';

/** The distinct values of `field` across `records`, sorted — the fixed chip set to
 *  offer for that facet (stable regardless of which chips are currently active). Used
 *  as-is for a single-valued field (`site-players.js`'s `model` facet); a caller with a
 *  multi-valued field per record (`site-filter.js`'s `lineages` array) flattens first —
 *  see that module's own `distinctLineages`. */
export function distinctValues(records, field) {
  var seen = {}, out = [];
  records.forEach(function (r) {
    var v = r[field];
    if (v && !Object.prototype.hasOwnProperty.call(seen, v)) {
      seen[v] = true;
      out.push(v);
    }
  });
  return out.sort();
}
