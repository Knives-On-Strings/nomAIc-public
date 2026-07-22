# Game 82

_development era_

> Forty-two rule changes, and the highest fifty-turn score this whole archive has recorded.

## Roster

| Seat | Model |
| --- | --- |
| Boole | phi-4-q3 |
| DeMorgan | phi-4-q3 |
| Venn | phi-4-q3 |
| Jevons | phi-4-q3 |
| Peano | phi-4-q3 |

## Final scores

| Seat | Score |
| --- | --- |
| DeMorgan | 179 |
| Boole | 140 |
| Venn | 18 |
| Peano | 4 |
| Jevons | 0 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 42
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Verify this game

Seed: `2053479910`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/082/events.json
```

Audit disclosed 2 finding(s):

- [turn=39] unclaimed_win: Boole's score reached 71 at turn 39, meeting the win threshold of 60 declared in §208, but the game ended with no confirmed win for Boole (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [turn=26] unclaimed_win: DeMorgan's score reached 75 at turn 26, meeting the win threshold of 70 declared in §208, but the game ended with no confirmed win for DeMorgan (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
