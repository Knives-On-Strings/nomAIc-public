# Game 38

_development era_

> One adoption in fifty turns — the weakest showing at any size in this run.

## Roster

| Seat | Model |
| --- | --- |
| Heraclitus | hermes-4-14b |
| Parmenides | hermes-4-14b |
| Democritus | hermes-4-14b |
| Protagoras | hermes-4-14b |
| Gorgias | hermes-4-14b |

## Final scores

| Seat | Score |
| --- | --- |
| Protagoras | 0 |
| Gorgias | -10 |
| Heraclitus | -140 |
| Democritus | -170 |
| Parmenides | -180 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 0
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `83622847`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/038/events.json
```

Audit disclosed 24 finding(s):

- [seq=168, turn=6] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=196, turn=7] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=392, turn=14] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=420, turn=15] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=448, turn=16] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=504, turn=18] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=532, turn=19] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=616, turn=22] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=644, turn=23] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=672, turn=24] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=700, turn=25] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=756, turn=27] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=868, turn=31] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=924, turn=33] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=952, turn=34] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=980, turn=35] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1008, turn=36] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1092, turn=39] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1120, turn=40] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1176, turn=42] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1204, turn=43] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1232, turn=44] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1288, turn=46] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1400, turn=50] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous consent to transmute (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
