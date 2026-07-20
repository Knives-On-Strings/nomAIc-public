# Game 17

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Locke | 31 |
| Hobbes | 1 |
| Rousseau | 0 |

## Rule changes

- Adoptions (new rules): 2
- Amendments: 7
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 302**
> A rule change proposing to amend or repeal Rule 208 must carry the unanimous assent of all eligible voters, regardless of the current voting…

**Rule 316**
> A player who proposes a rule change that has been defeated in the immediately preceding turn by a vote of 1-2 shall not be eligible to propo…

## Verify this game

Seed: `1107044818`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/017/events.json
```

Audit disclosed 4 finding(s):

- [turn=11] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=16] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=208, turn=10] score_delta_bound: Rousseau's score moved by +120 in one update; the engine bounds a single verdict to ±25
- [seq=217, turn=10] score_delta_bound: Rousseau's score moved by -120 in one update; the engine bounds a single verdict to ±25
