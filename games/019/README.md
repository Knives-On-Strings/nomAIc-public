# Game 19

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Rule changes

- Adoptions (new rules): 8
- Amendments: 2
- Repeals: 2

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 302**
> Players who find a unanimous threshold proposal difficult may propose a temporary amendment to Rule 203 that shifts the majority threshold t…

**Rule 303**
> Rule 203 is hereby amended such that once turn order has carried play through two full circuits of every player, the threshold permanently s…

**Rule 306**
> A player may not propose a rule change that has been previously defeated in its exact textual form, regardless of whether the text has since…

**Rule 307**
> Rule 210 is hereby amended to permit discussion and negotiation among all players regarding proposed rule changes, provided such discussion…

**Rule 310**
> A proposal that fails to be adopted is recorded as defeated. Defeat enacts nothing: the ruleset is left exactly as it stood before the vote,…

**Rule 314**
> Rule 209 is hereby amended to read: The ruleset may never hold more than 20 mutable rules at one time.

## Verify this game

Seed: `1444403170`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/019/events.json
```

Audit disclosed 14 finding(s):

- [turn=2] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=3] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=4] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=6] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=7] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=10] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=11] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=13] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=14] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=16] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=18] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=20] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=114, turn=6] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 0.5, 'abstain_blocks': True, 'label': 'Unanimous consent required', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple Majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=192, turn=10] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple Majority', 'authority': 203} to {'type': 'unanimous', 'value': 0.5, 'abstain_blocks': True, 'label': 'Unanimous consent required', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
