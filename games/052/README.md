# Game 52

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Montaigne | mistral-nemo-12b |
| Voltaire | mistral-nemo-12b |
| Diderot | mistral-nemo-12b |
| Condorcet | mistral-nemo-12b |
| Sartre | mistral-nemo-12b |

## Final scores

| Seat | Score |
| --- | --- |
| Condorcet | 8 |
| Montaigne | 2 |
| Sartre | 0 |
| Diderot | -30 |
| Voltaire | -157 |

## Rule changes

- Adoptions (new rules): 3
- Amendments: 20
- Repeals: 0

## Capability ceilings

1 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Score / ledger-delta cap (MAX_SCORE_DELTA) | 1 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 338**
> A rule change may only be proposed by a player who has not proposed a rule change in the last two consecutive turns.

**Rule 340**
> A rule change may only be proposed by a player who has not proposed a rule change in the last four consecutive turns.

**Rule 344**
> A player may not propose more than one rule change in any three consecutive turns.

## Verify this game

Seed: `1599797570`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/052/events.json
```

Audit result: clean.
