# Game 78

_development era_

> The top rung of a quantization ladder — indistinguishable from full precision.

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
| Goedel | 105 |
| Tarski | 77 |
| Post | 15 |
| Kleene | 5 |
| Church | 1 |

## Rule changes

- Adoptions (new rules): 9
- Amendments: 37
- Repeals: 0

## Capability ceilings

7 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 5 |
| Uncited authority (cite-or-refuse) | 2 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 316**
> A player's score cannot drop below zero under any rule change; if a rule change would cause a negative score, the score is set to zero inste…

**Rule 318**
> A proposal to repeal a mutable rule must first be debated for a minimum of three minutes before voting begins.

**Rule 324**
> A player who proposes a rule change that is adopted without opposition gains 3 points. This bonus does not apply if the player voted against…

**Rule 329**
> A player may propose a rule change that allows for an additional strategic action during their turn, but only if it passes a unanimous vote…

**Rule 338**
> A player may propose a rule change that increases the target score by 10 points. If adopted unanimously, the proposer gains 5 points.

**Rule 340**
> A rule change proposal that is defeated cannot be re-proposed by the same player for the next two turns.

## Verify this game

Seed: `7982464`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/078/events.json
```

Audit disclosed 5 finding(s):

- [seq=170, turn=6] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'value': 1.0, 'abstain_blocks': False, 'label': 'unanimous consent (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.6666666666666666, 'abstain_blocks': False, 'label': 'two-thirds majority (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1550, turn=43] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6, 'abstain_blocks': False, 'label': '60% majority until five full circuits of turns (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after five full circuits of turns (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1666, turn=47] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.6, 'abstain_blocks': False, 'label': '60% majority until five full circuits of turns (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after five full circuits of turns (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1723, turn=49] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after ten full circuits of turns (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.65, 'abstain_blocks': False, 'label': '65% majority until ten full circuits of turns (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1752, turn=50] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.65, 'abstain_blocks': False, 'label': '65% majority until ten full circuits of turns (§203)', 'authority': 203} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after ten full circuits of turns (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
