# Game 51

_development era_

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
| Diderot | 79 |
| Voltaire | 76 |
| Sartre | 32 |
| Condorcet | 7 |
| Montaigne | -16 |

## Rule changes

- Adoptions (new rules): 5
- Amendments: 6
- Repeals: 1

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 302**
> After every 5 turns, the target score for winning the game is increased by 10, up to a maximum of 200 points.

**Rule 305**
> After every 25 turns, the target score for winning the game increases by 10 points.

**Rule 314**
> After every 20 turns, the target score for winning the game increases by 10 points.

**Rule 316**
> After every 25 turns, the target score for winning the game is increased by 12 points.

**Rule 349**
> After every 19 turns, the target score for winning the game is increased by 11 points.

## Verify this game

Seed: `748083566`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/051/events.json
```

Audit disclosed 4 finding(s):

- [seq=751, turn=25] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two full circuits of players (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent until two full circuits, then simple majority (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=781, turn=26] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent until two full circuits, then simple majority (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two full circuits, unanimous consent before (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=811, turn=27] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two full circuits, unanimous consent before (§203)', 'authority': 203} to {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent before two full circuits, simple majority after (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=931, turn=31] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent before two full circuits, simple majority after (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two full circuits', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
