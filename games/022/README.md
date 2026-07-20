# Game 22

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Montesquieu | gemini-2.5-flash |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Hobbes | 5 |
| Montesquieu | 0 |
| Rousseau | 0 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 5
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `1569719944`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/022/events.json
```

Audit disclosed 3 finding(s):

- [turn=13] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=16] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=59, turn=4] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 0.5, 'abstain_blocks': True, 'label': 'Unanimous consent required', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple Majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
