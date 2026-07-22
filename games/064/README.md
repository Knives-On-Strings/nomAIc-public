# Game 64

_development era_

> The compression study's baseline: a healthy, ordinary table, set as the yardstick everything else on the comparison gets measured against.

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
| Hume | 35 |
| deBeauvoir | 7 |
| IbnKhaldun | 1 |
| Rawls | 1 |
| Mill | -2 |

## Rule changes

- Adoptions (new rules): 8
- Amendments: 30
- Repeals: 1

## Capability ceilings

7 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 7 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 305**
> 301. Players may establish a shared pool of points, called a 'Common Wealth,' into which a portion of the points gained from an adopted rule…

**Rule 311**
> 306. The number of points gained for an adopted rule change is equal to the value of the die roll, unless the roll is 1, in which case the p…

**Rule 328**
> 325. If a player's personal score falls below zero, they may choose to receive a one-time gift of 5 points from the shared pool, provided th…

**Rule 331**
> 331. A player may spend 15 points from their personal score to automatically succeed on any die roll for an adopted rule change, provided th…

**Rule 338**
> 334. A player may contribute any number of points from their personal score to the shared pool described in rule 305, provided the contribut…

**Rule 346**
> 346. If a player contributes points to the shared pool as a gift to the common good under rule 338, they may, at any point during their turn…

## Verify this game

Seed: `1017415081`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/064/events.json
```

Audit result: clean.
