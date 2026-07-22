# Game 36

_development era_

> The same table, remembering itself — and legislating twice as fast.

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
| Rawls | 28 |
| IbnKhaldun | 22 |
| Hume | 20 |
| deBeauvoir | 15 |
| Mill | -30 |

## Rule changes

- Adoptions (new rules): 10
- Amendments: 27
- Repeals: 1

## Capability ceilings

25 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 25 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 313**
> [214] If a rule provides for a player to award points to another player, the number of points awarded must be a value between 1 and 10, incl…

**Rule 315**
> [314] (mutable) If a player is awarded points by another player, the awarding player receives 1 point regardless of the amount awarded.

**Rule 318**
> [216] A player may only award points to another player if the proposed rule change is an amendment to a rule that already provides for a poi…

**Rule 321**
> [221] A player may only award points to another player if the proposal is an amendment to a rule that provides for a point gain or is a new…

**Rule 332**
> [337] A player who awards points to another player via a new rule that provides for a point gain may also choose to award a point bonus to a…

**Rule 334**
> [246] If a player awards points to another player via rule [214], they must provide a public benefit statement describing how the award supp…

## Verify this game

Seed: `81743748`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/036/events.json
```

Audit result: clean.
