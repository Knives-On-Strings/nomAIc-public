# Game 20

_development era_

> Hobbes crosses the line at turn 36 — the table's first confirmed champion.

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Hobbes | 75 |
| Locke | 20 |
| Rousseau | 0 |

## Rule changes

- Adoptions (new rules): 1
- Amendments: 13
- Repeals: 0

## Outcome

**Win** — champion **Hobbes** with 75 points. Confirmed by a second, independent pass.

## Notable adopted rules

**Rule 331**
> If a player proposes a repeal of rule 203, the repeal is adopted only if the proposal explicitly includes a replacement threshold of no lowe…

## Verify this game

Seed: `336103144`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/020/events.json
```

Audit disclosed 8 finding(s):

- [turn=4] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=16] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=36] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=57, turn=3] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 0.5, 'abstain_blocks': True, 'label': 'Unanimous consent required', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple Majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=181, turn=9] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
- [seq=200, turn=10] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
- [seq=219, turn=11] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
- [seq=238, turn=12] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
