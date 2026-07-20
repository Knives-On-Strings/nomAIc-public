# Game 50

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Xunzi | glm-4-9b |
| Mozi | glm-4-9b |
| Zhuangzi | glm-4-9b |
| Mencius | glm-4-9b |
| HanFeizi | glm-4-9b |

## Final scores

| Seat | Score |
| --- | --- |
| HanFeizi | 30 |
| Mozi | 20 |
| Xunzi | 20 |
| Mencius | 0 |
| Zhuangzi | -20 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 9
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `1996929536`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/050/events.json
```

Audit disclosed 2 finding(s):

- [seq=588, turn=21] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=616, turn=22] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
