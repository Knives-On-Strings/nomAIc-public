# Game 44

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
| Mencius | 150 |
| HanFeizi | 60 |
| Zhuangzi | 40 |
| Mozi | 20 |
| Xunzi | -30 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 11
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `1059939056`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/044/events.json
```

Audit disclosed 8 finding(s):

- [turn=34] unclaimed_win: Mencius's score reached 100 at turn 34, meeting the win threshold of 100 declared in §208, but the game ended with no confirmed win for Mencius (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [seq=111, turn=4] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=139, turn=5] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=281, turn=10] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=424, turn=15] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=451, turn=16] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=564, turn=20] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=592, turn=21] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
