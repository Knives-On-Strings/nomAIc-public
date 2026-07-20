# Game 28

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |
| Kant | qwen |
| Wollstonecraft | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Kant | -70 |
| Wollstonecraft | -70 |
| Hobbes | -123 |
| Rousseau | -147 |
| Locke | -190 |

## Rule changes

- Adoptions (new rules): 5
- Amendments: 0
- Repeals: 1

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 301**
> Rule 209 is repealed and replaced with: "The ruleset may never hold more than 20 mutable rules at one time."

**Rule 307**
> A player who casts a vote nay on a proposal that passes by simple majority pursuant to §203 shall gain zero points.

**Rule 311**
> Rule 203 is amended to read: 'A rule change is adopted only when every eligible voter votes aye — unanimous consent — except that once turn…

**Rule 317**
> Rule 209 is repealed and replaced with: 'The ruleset may never hold more than 25 mutable rules at one time.'

**Rule 324**
> Rule 209 is repealed and replaced with: 'The ruleset may never hold more than 25 mutable rules at one time.'

## Verify this game

Seed: `73218229`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/028/events.json
```

Audit disclosed 3 finding(s):

- [turn=17] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=24] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=86] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
