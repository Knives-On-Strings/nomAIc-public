# Game 27

_development era_

> A rule barred negative scorers from voting — and nobody enforced it for roughly eighty-five turns.

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Rousseau | -90 |
| Locke | -314 |
| Hobbes | -397 |

## Rule changes

- Adoptions (new rules): 6
- Amendments: 1
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 303**
> Rule 203 is amended to require that the threshold for adopting a rule change remains unanimous consent until a player reaches a score of 50…

**Rule 305**
> Rule 303 is amended to require that the threshold for adopting a rule change remains unanimous consent until a player reaches a score of 60…

**Rule 310**
> A player whose score is negative points shall not be eligible to propose a rule change or vote on any proposal until their score reaches zer…

**Rule 323**
> Rule 203 is amended to require that the threshold for adopting a rule change remains unanimous consent until every player's score is non-neg…

**Rule 326**
> Rule 203 is further amended to require that the threshold for adopting a rule change remains unanimous consent until every eligible voter ha…

**Rule 352**
> Rule 310 is repealed. Rule 303 is repealed. Rule 305 is repealed. Rule 203 is amended to require that the threshold for adopting a rule chan…

## Verify this game

Seed: `1447622168`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/027/events.json
```

Audit disclosed 37 finding(s):

- [turn=3] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=10] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=27] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=53] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=54] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=176, turn=9] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after two circuits (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after turn 18 (§203, §305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=196, turn=10] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after turn 18 (§203, §305)', 'authority': 305} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=499, turn=26] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by Rule 305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=619, turn=32] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=639, turn=33] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305, §326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=659, turn=34] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=698, turn=36] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=718, turn=37] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=758, turn=39] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=778, turn=40] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=798, turn=41] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=818, turn=42] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=838, turn=43] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §326)', 'authority': 326} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=858, turn=44] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=878, turn=45] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305, §326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=898, turn=46] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305, §326)', 'authority': 326} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=940, turn=49] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1000, turn=52] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §305)', 'authority': 305} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority of those voting (Rule 203, as amended by 326)', 'authority': 326} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1219, turn=63] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
- [seq=1219, turn=63] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'authority': None, 'label': 'unanimous consent'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1239, turn=64] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'authority': None, 'label': 'unanimous consent'} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, as amended by §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1461, turn=76] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1483, turn=78] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1642, turn=86] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1662, turn=87] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1682, turn=88] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1702, turn=89] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1762, turn=92] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1802, turn=94] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1861, turn=97] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1880, turn=98] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1902, turn=100] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203, §303, §305, §323, §352)', 'authority': 352} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': True, 'label': 'Unanimous consent required (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
