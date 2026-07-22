# Game 62

_development era_

> Fifty turns, thirty-three rule changes — and two of the five seated players never got a turn.

## Roster

| Seat | Model |
| --- | --- |
| Turing | granite-4.0-h-tiny |
| Shannon | granite-4.0-h-tiny |
| vonNeumann | granite-4.0-h-tiny |
| Babbage | granite-4.0-h-tiny |
| Lovelace | granite-4.0-h-tiny |

## Rule changes

- Adoptions (new rules): 18
- Amendments: 2
- Repeals: 0

## Capability ceilings

16 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 16 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 301**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

**Rule 303**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

**Rule 304**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

**Rule 305**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

**Rule 306**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

**Rule 308**
> A player who voluntarily forfeits the game may immediately cast one vote on any pending proposal, without waiting for their turn. This vote…

## Verify this game

Seed: `88595167`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/062/events.json
```

Audit disclosed 7 finding(s):

- [seq=264, turn=23] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': "unanimous consent to transmute (Suber's Rule 109)"} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=324, turn=28] voting_rule_authority: voting rule of type 'unanimous' cites no authority; only 'unregulated' may cite none
- [seq=324, turn=28] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} to {'type': 'unanimous', 'authority': None, 'label': "unanimous consent to transmute (Suber's Rule 109)"} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=372, turn=32] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': "unanimous consent to transmute (Suber's Rule 109)"} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=504, turn=43] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': "unanimous consent to transmute (Suber's Rule 109)"} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=516, turn=44] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': "unanimous consent to transmute (Suber's Rule 109)"} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=552, turn=47] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': "unanimous consent to transmute (Suber's Rule 109)"} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority (Rule 203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
