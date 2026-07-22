# Game 84

_development era_

> The next rung down, and the table still ran the full fifty turns clean.

## Roster

| Seat | Model |
| --- | --- |
| Ramsey | phi-4-q2 |
| Ayer | phi-4-q2 |
| Ryle | phi-4-q2 |
| Strawson | phi-4-q2 |
| Grice | phi-4-q2 |

## Final scores

| Seat | Score |
| --- | --- |
| Ryle | 16 |
| Ramsey | 11 |
| Ayer | 1 |
| Grice | 0 |
| Strawson | 0 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 41
- Repeals: 0

## Capability ceilings

1 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 1 |

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `962512397`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/084/events.json
```

Audit disclosed 1 finding(s):

- [turn=41] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
