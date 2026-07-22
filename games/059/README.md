# Game 59

_development era_

> Legislative volume came back; the economy stayed in the red regardless.

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
| AlGhazali | 0 |
| Maimonides | -23 |
| Averroes | -30 |
| Avicenna | -74 |
| AlFarabi | -136 |

## Rule changes

- Adoptions (new rules): 1
- Amendments: 25
- Repeals: 0

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 337**
> If a player's proposed change is identical to a proposal defeated in the last three turns, that proposal is automatically defeated, and the…

## Verify this game

Seed: `1991866696`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/059/events.json
```

Audit disclosed 2 finding(s):

- [seq=41, turn=2] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority required for adoption after two full circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=176, turn=8] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent required for adoption unless player count &lt; 3, then simple majority (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'unanimous consent required unless player count &lt; 3, then simple majority (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
