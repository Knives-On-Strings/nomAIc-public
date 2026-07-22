# Game 56

_development era_

> Same five seats, same fifty turns, one variable changed — the presiding judge — and six times more legislation got through.

## Roster

| Seat | Model |
| --- | --- |
| Heraclitus | hermes-4-14b |
| Parmenides | hermes-4-14b |
| Democritus | hermes-4-14b |
| Protagoras | hermes-4-14b |
| Gorgias | hermes-4-14b |

## Final scores

| Seat | Score |
| --- | --- |
| Parmenides | -65 |
| Gorgias | -75 |
| Protagoras | -76 |
| Democritus | -80 |
| Heraclitus | -84 |

## Rule changes

- Adoptions (new rules): 2
- Amendments: 4
- Repeals: 0

## Capability ceilings

4 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 4 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 325**
> A player may revise a proposal's text once during debate; once debate closes, no further changes are permitted.

**Rule 350**
> A player may revise a proposal's text exactly two times during debate, after which they must declare debate closed.

## Verify this game

Seed: `589873270`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/056/events.json
```

Audit disclosed 1 finding(s):

- [seq=886, turn=34] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent to transmute (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority suffices after two full circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
