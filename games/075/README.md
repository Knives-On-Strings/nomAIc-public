# Game 75

_development era_

> The fifth roster's debut — one patron bankrolled the whole table's laws.

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
| DongZhongshu | 88 |
| ZhuXi | 28 |
| WangYangming | 2 |
| ShaoYong | -28 |
| Laozi | -46 |

## Rule changes

- Adoptions (new rules): 13
- Amendments: 7
- Repeals: 1

## Capability ceilings

12 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 11 |
| Uncited authority (cite-or-refuse) | 1 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 302**
> During a player's turn, before the player proposes their rule change, they may name one other player as a potential co‑sponsor. If that co‑s…

**Rule 304**
> Whenever a rule change is proposed that would amend, repeal, or transmute a mutable rule, the proposer must also state which immutable rule…

**Rule 308**
> A player who, after a proposal is adopted, publicly identifies a previously unnoticed contradiction between the newly adopted rule and any e…

**Rule 310**
> When a player votes nay on a proposal that is adopted, that player may, before the next proposal is voted on, publicly nominate another play…

**Rule 313**
> When a player's turn begins, they may, before proposing their rule change, publicly state that they intend to propose a rule change that rep…

**Rule 314**
> A player who, during debate on a proposal, suggests a wording change that the proposer incorporates into the final version of the proposal,…

## Verify this game

Seed: `494506440`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/075/events.json
```

Audit disclosed 1 finding(s):

- [seq=229, turn=8] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority of those voting (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
