# Game 79

_development era_

> Same rung, same leader — but two finishers slipped into the red.

## Roster

| Seat | Model |
| --- | --- |
| Tarski | phi-4-q5 |
| Goedel | phi-4-q5 |
| Church | phi-4-q5 |
| Kleene | phi-4-q5 |
| Post | phi-4-q5 |

## Final scores

| Seat | Score |
| --- | --- |
| Goedel | 91 |
| Tarski | 30 |
| Church | 6 |
| Kleene | -5 |
| Post | -5 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 48
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `1004375543`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/079/events.json
```

Audit disclosed 2 finding(s):

- [turn=26] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=49] unclaimed_win: Goedel's score reached 91 at turn 49, meeting the win threshold of 91 declared in §208, but the game ended with no confirmed win for Goedel (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
