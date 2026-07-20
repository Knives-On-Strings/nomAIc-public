# Game 37

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
| Hume | 47 |
| deBeauvoir | 24 |
| Rawls | 18 |
| Mill | -8 |
| IbnKhaldun | -52 |

## Rule changes

- Adoptions (new rules): 22
- Amendments: 49
- Repeals: 0

## Capability ceilings

137 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 103 |
| Uncited authority (cite-or-refuse) | 34 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 337**
> [335] (mutable) A player who awards a 'Community Contribution' of one point to the player currently in last place may choose to also award o…

**Rule 356**
> 350: A player may establish a 'Bureau' by proposing a rule that creates a permanent office with a specific set of duties and an elected offi…

**Rule 360**
> 357: A player may establish a 'Treasury' by proposing a rule that creates a permanent office with a specific set of duties and an elected of…

**Rule 361**
> 361: A player may establish a 'Council' by proposing a rule that creates a permanent office with a specific set of duties and an elected off…

**Rule 364**
> 362: A player may establish a 'Registry' by proposing a rule that creates a permanent office with a specific set of duties and an elected of…

**Rule 365**
> 365: A player may establish a 'Ministry of Equilibrium' by proposing a rule that creates a permanent office with a specific set of duties an…

## Verify this game

Seed: `1378190175`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/037/events.json
```

Audit disclosed 2 finding(s):

- [seq=109, turn=4] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=3100, turn=120] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
