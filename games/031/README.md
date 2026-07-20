# Game 31

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Aquinas | qwen3.5-35b-a3b |
| Hypatia | qwen3.5-35b-a3b |
| Confucius | qwen3.5-35b-a3b |
| Spinoza | qwen3.5-35b-a3b |
| Arendt | qwen3.5-35b-a3b |

## Final scores

| Seat | Score |
| --- | --- |
| Arendt | 0 |
| Confucius | 0 |
| Hypatia | 0 |
| Spinoza | 0 |
| Aquinas | -10 |

## Rule changes

- Adoptions (new rules): 0
- Amendments: 0
- Repeals: 0

## Capability ceilings

1 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Unsatisfiable voting threshold | 1 |

This game ended because an adopted rule could no longer be enforced.

## Outcome

**Operational halt** — an adopted rule cannot be enforced.

## Verify this game

Seed: `1518807375`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/031/events.json
```

Audit disclosed 1 finding(s):

- [seq=27, turn=1] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
