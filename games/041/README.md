# Game 41

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Frege | phi-4 |
| Russell | phi-4 |
| Quine | phi-4 |
| Carnap | phi-4 |
| Wittgenstein | phi-4 |

## Final scores

| Seat | Score |
| --- | --- |
| Frege | 162 |
| Russell | 110 |
| Carnap | 20 |
| Quine | 20 |
| Wittgenstein | 10 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 23
- Repeals: 0

## Capability ceilings

1 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Vote-weight cap (R90) | 1 |

This game ended because an adopted rule could no longer be enforced.

## Outcome

**Operational halt** — an adopted rule cannot be enforced.

## Verify this game

Seed: `893510814`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/041/events.json
```

Audit disclosed 2 finding(s):

- [turn=15] unclaimed_win: Frege's score reached 90 at turn 15, meeting the win threshold of 90 declared in §208, but the game ended with no confirmed win for Frege (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
- [turn=20] unclaimed_win: Russell's score reached 100 at turn 20, meeting the win threshold of 90 declared in §208, but the game ended with no confirmed win for Russell (or anyone) — R47 lets a player claim a win via act(); nothing in the log shows one was ever made and confirmed
