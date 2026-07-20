# Game 21

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Rule changes

- Adoptions (new rules): 6
- Amendments: 4
- Repeals: 2

## Outcome

No terminal outcome is recorded for this game.

## Notable adopted rules

**Rule 301**
> Rule [X] (mutable): No proposal may amend or repeal Rule 202 or Rule 203 during the first three turns of play.

**Rule 304**
> Rule 202 shall be amended by replacing the phrase 'increases by ten (10) points' with 'increases by twenty (20) points', effective immediate…

**Rule 312**
> Rule 202 shall be amended to read: 'A turn consists of the player to move proposing exactly one rule change, which is debated and then voted…

**Rule 317**
> Rule 202 shall be amended to replace 'increases by twenty (20) points' with 'increases by ten (10) points'.

**Rule 318**
> Rule 209 shall be amended by replacing the phrase 'twenty-five (25)' with 'fifteen (15)', effective immediately upon adoption.

**Rule 323**
> Rule 320 (mutable): No proposal may amend or repeal Rule 209, Rule 208, or Rule 213 during the first three turns of play.

## Verify this game

Seed: `1760587342`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/021/events.json
```

Audit disclosed 12 finding(s):

- [turn=1] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=3] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=4] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=12] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=16] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=17] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=18] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=21] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=22] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=23] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=26] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=28] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
