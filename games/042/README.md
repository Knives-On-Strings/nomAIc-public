# Game 42

_development era_

> Prolific lawmaking, punishing economy — the small end of a size comparison that does not reward volume.

## Roster

| Seat | Model |
| --- | --- |
| Averroes | gemma-4-e4b |
| Maimonides | gemma-4-e4b |
| Avicenna | gemma-4-e4b |
| AlFarabi | gemma-4-e4b |
| AlGhazali | gemma-4-e4b |

## Final scores

| Seat | Score |
| --- | --- |
| AlGhazali | 5 |
| Averroes | -20 |
| Maimonides | -26 |
| Avicenna | -30 |
| AlFarabi | -100 |

## Rule changes

- Adoptions (new rules): 4
- Amendments: 21
- Repeals: 0

## Capability ceilings

5 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Uncited authority (cite-or-refuse) | 5 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 303**
> If a rule change is proposed and fails to pass the vote, the proposer loses 5 points instead of 10 points.

**Rule 309**
> If a player's proposed rule change is adopted, and that change results in a net loss of points for the proposer across the entire table, the…

**Rule 314**
> If a rule change is adopted, the proposer gains points equal to the die roll result unless another rule specifies otherwise, and if a rule c…

**Rule 349**
> If a player's proposed rule change is adopted, the proposer gains points equal to the die roll result, unless an adopted rule change explici…

## Verify this game

Seed: `234581403`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/042/events.json
```

Audit disclosed 1 finding(s):

- [seq=41, turn=2] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required unless two full circuits have passed, then simple majority', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Unanimous consent required unless two full circuits have passed, then simple majority', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
