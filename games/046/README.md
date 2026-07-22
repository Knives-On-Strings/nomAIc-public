# Game 46

_development era_

> The most prolific legislature on record produced the single largest fortune and two wins nobody claimed.

## Roster

| Seat | Model |
| --- | --- |
| Montaigne | mistral-nemo-12b |
| Voltaire | mistral-nemo-12b |
| Diderot | mistral-nemo-12b |
| Condorcet | mistral-nemo-12b |
| Sartre | mistral-nemo-12b |

## Final scores

| Seat | Score |
| --- | --- |
| Voltaire | 881 |
| Diderot | 105 |
| Montaigne | 10 |
| Condorcet | 0 |
| Sartre | 0 |

## Rule changes

- Adoptions (new rules): 4
- Amendments: 144
- Repeals: 0

## Capability ceilings

3 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Score / ledger-delta cap (MAX_SCORE_DELTA) | 3 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 304**
> New Rule 301: Players may discuss the game and negotiate about it with one another outside the normal course of play, provided that any agre…

**Rule 307**
> New Rule 401: Players may form alliances, with a maximum of two players per alliance. Alliances may propose rule changes together, with thei…

**Rule 416**
> New Rule 402: Players may discuss and negotiate about the game outside the normal course of play, provided that any agreements reached are s…

**Rule 444**
> New Rule 403: In the event of a tied vote, the proposal fails and no points are gained or lost by the proposer.

## Verify this game

Seed: `777920582`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/046/events.json
```

Audit disclosed 13 finding(s):

- [turn=99] unclaimed_win: Diderot's score reached 102 at turn 99, meeting the win threshold of 100 declared in §208, but the game ended with no confirmed win for Diderot (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [turn=73] unclaimed_win: Voltaire's score reached 102 at turn 73, meeting the win threshold of 100 declared in §208, but the game ended with no confirmed win for Voltaire (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [seq=2524, turn=87] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': "at least two-thirds of eligible voters must vote 'aye' for the first three turns, and later at least half (§203)", 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': "at least half of eligible voters must vote 'aye'", 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2610, turn=90] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': "at least half of eligible voters must vote 'aye'", 'authority': 203} to {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': "at least two-thirds of eligible voters must vote 'aye' for the first three turns, and later at least half", 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=3417, turn=118] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': "two-thirds of eligible voters must vote 'aye' for the first 60 turns, then three-quarters thereafter", 'authority': 203} to {'type': 'fraction', 'value': 0.75, 'abstain_blocks': False, 'label': "three-quarters of eligible voters must vote 'aye'", 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=4777, turn=165] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.75, 'abstain_blocks': False, 'label': 'three-quarters majority for first 110 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=4893, turn=169] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 165 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5131, turn=177] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 170 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5277, turn=182] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 170 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5334, turn=184] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 170 turns, then simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5361, turn=185] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 170 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5408, turn=187] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6667, 'abstain_blocks': False, 'label': 'two-thirds majority for first 170 turns, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=5617, turn=194] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.75, 'abstain_blocks': False, 'label': 'three-quarters majority for first 192 turns, then simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
