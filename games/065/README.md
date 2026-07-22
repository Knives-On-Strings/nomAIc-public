# Game 65

_development era_

> A second baseline run, and the yardstick held steady.

## Roster

| Seat | Model |
| --- | --- |
| Hume | gemma-4-12b |
| Mill | gemma-4-12b |
| Rawls | gemma-4-12b |
| deBeauvoir | gemma-4-12b |
| IbnKhaldun | gemma-4-12b |

## Final scores

| Seat | Score |
| --- | --- |
| Rawls | 49 |
| Mill | 35 |
| Hume | 27 |
| deBeauvoir | 17 |
| IbnKhaldun | -11 |

## Rule changes

- Adoptions (new rules): 3
- Amendments: 48
- Repeals: 1

## Capability ceilings

6 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 6 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 344**
> [215] (mutable) A player may establish a 'Tax' on any successful rule change, whereby a percentage of the proposer's points are distributed…

**Rule 347**
> [216] (mutable) A player may only establish a 'Tax' under rule 215 if the proposer's score is currently at least 20 points.

**Rule 350**
> [219] (mutable) A 'Tax' or 'Grant' established under rules 215 or 218 must be declared by the proposer at the start of their turn and may on…

## Verify this game

Seed: `1468539902`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/065/events.json
```

Audit result: clean.
