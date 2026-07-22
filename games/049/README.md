# Game 49

_development era_

> The same table, a much quieter turn — still healthy, just smaller.

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
| Mencius | 40 |
| HanFeizi | 30 |
| Mozi | 10 |
| Xunzi | 0 |
| Zhuangzi | -10 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 3
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `1413046363`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/049/events.json
```

Audit disclosed 11 finding(s):

- [seq=83, turn=3] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=196, turn=7] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=572, turn=20] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 19)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=600, turn=21] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 21)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=656, turn=23] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 22)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1077, turn=38] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 37)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1105, turn=39] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 39)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1133, turn=40] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 39)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1161, turn=41] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 41)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1189, turn=42] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 41)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1273, turn=45] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203, evaluated at turn 45)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
