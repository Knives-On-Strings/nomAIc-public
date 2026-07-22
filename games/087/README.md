# Game 87

_development era_

> Memory doesn't end the trap — it just changes who falls into it.

## Roster

| Seat | Model |
| --- | --- |
| Laozi | deepseek/deepseek-v3.2 |
| ZhuXi | deepseek/deepseek-v3.2 |
| WangYangming | deepseek/deepseek-v3.2 |
| DongZhongshu | deepseek/deepseek-v3.2 |
| ShaoYong | deepseek/deepseek-v3.2 |

## Final scores

| Seat | Score |
| --- | --- |
| DongZhongshu | 65 |
| Laozi | 21 |
| WangYangming | 11 |
| ShaoYong | 10 |
| ZhuXi | -46 |

## Rule changes

- Adoptions (new rules): 13
- Amendments: 1
- Repeals: 1

## Capability ceilings

7 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 6 |
| Uncited authority (cite-or-refuse) | 1 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 308**
> A player who votes aye on a proposal that is adopted gains 1 point, provided the proposal was not a transmutation and the proposer also gain…

**Rule 309**
> Before a player may propose a rule change, they must publicly declare their intended kind of change (add, amend, repeal, or transmute) and a…

**Rule 310**
> A player may spend 2 points to draw a second die after their proposal is adopted, then choose the higher of the two rolls as their point gai…

**Rule 313**
> If a proposal is adopted unanimously, every player except the proposer gains 2 points.

**Rule 314**
> A player who casts a vote that breaks a tie in favor of adoption gains 5 points, provided the vote was cast after the voting threshold has s…

**Rule 320**
> When a player votes aye on a proposal that is adopted, if that proposal was a transmutation, the player gains 3 points.

## Verify this game

Seed: `510738100`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/087/events.json
```

Audit disclosed 1 finding(s):

- [seq=220, turn=8] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent required (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority of those voting (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
