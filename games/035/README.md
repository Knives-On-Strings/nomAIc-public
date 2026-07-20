# Game 35

_development era_

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
| Mill | 17 |
| Hume | 15 |
| Rawls | -3 |
| deBeauvoir | -32 |
| IbnKhaldun | -35 |

## Rule changes

- Adoptions (new rules): 13
- Amendments: 6
- Repeals: 1

## Capability ceilings

12 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 6 |
| Uncited authority (cite-or-refuse) | 6 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 301**
> [214] A player who gains points from an adopted rule change may choose to either add those points to their score or instead choose to award…

**Rule 306**
> [218] A player who awards points to another player via rule [214] must award them to a player whose score is currently lower than their own.

**Rule 308**
> [220] A player who awards points to another player via rule [214] may choose to award the points as a fraction of the die roll, provided the…

**Rule 314**
> [226] A player may choose to award points to another player via rule [214] only if that player is currently in the bottom two positions of t…

**Rule 317**
> [228] A player who awards points to another player via rule [214] may choose to award the points as a fraction of the die roll, provided the…

**Rule 318**
> [229] If multiple players occupy the same bottom position as defined in rule [314], the award is distributed equally among them, rounded dow…

## Verify this game

Seed: `436837160`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/035/events.json
```

Audit disclosed 1 finding(s):

- [seq=111, turn=4] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent required', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
