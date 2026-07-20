# Game 33

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Aquinas | qwen3.5-35b-a3b |
| Hypatia | qwen3.5-35b-a3b |
| Confucius | qwen3.5-35b-a3b |
| Spinoza | qwen3.5-35b-a3b |
| Arendt | qwen3.5-35b-a3b |

## Final scores

| Seat | Score |
| --- | --- |
| Arendt | 11 |
| Hypatia | -10 |
| Spinoza | -24 |
| Aquinas | -28 |
| Confucius | -42 |

## Rule changes

- Adoptions (new rules): 2
- Amendments: 52
- Repeals: 6

## Capability ceilings

1 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 1 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 365**
> If a player's score is below zero, that player may, in addition to their normal proposal for this turn, propose exactly one rule change that…

**Rule 488**
> A player with a score below zero who adopts a Rule 365 proposal awarding them exactly one point wins the game immediately upon that adoption…

## Verify this game

Seed: `362717788`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/033/events.json
```

Audit disclosed 5 finding(s):

- [turn=73] unclaimed_win: Arendt's score reached 1 at turn 73, meeting the win threshold of 1 declared in §208, but the game ended with no confirmed win for Arendt (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [seq=1361, turn=48] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent required until one full circuit is completed (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority of those voting after one full circuit (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1389, turn=49] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority of those voting after one full circuit (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'unanimous consent required until one full circuit is completed (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=3704, turn=135] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required until a full circuit is completed (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': "Unanimous assent required to transmute a rule's mutability (§109)"} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=3785, turn=138] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': "Unanimous assent required to transmute a rule's mutability (§109)"} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required until a full circuit is completed (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
