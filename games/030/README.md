# Game 30

_development era_

> Two hundred turns, five rule changes, and a floor of -416.

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |
| Kant | qwen |
| Wollstonecraft | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Wollstonecraft | -30 |
| Kant | -40 |
| Hobbes | -95 |
| Locke | -314 |
| Rousseau | -416 |

## Rule changes

- Adoptions (new rules): 1
- Amendments: 4
- Repeals: 0

## Capability ceilings

17 adopted-rule consequence(s) met an engine ceiling this game — a provisional limit on what a rule may do, refused rather than silently obeyed (emergent play, not a defect).

| Ceiling | Hits |
| --- | --- |
| Mutable-rule cap (R41) | 17 |

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 319**
> Rule 209 is amended to permanently fix the minimum number of mutable rules at two.

## Verify this game

Seed: `2100571930`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/030/events.json
```

Audit disclosed 12 finding(s):

- [seq=1689, turn=61] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1716, turn=62] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=1993, turn=72] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2022, turn=74] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2106, turn=77] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2134, turn=78] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2332, turn=86] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2360, turn=87] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2728, turn=103] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2756, turn=104] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=2978, turn=113] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} to {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=3007, turn=115] procedure_consistency: the GM's voting_rule reading changed from {'type': 'unanimous', 'authority': 109, 'label': 'unanimous assent required (§109)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'simple majority after two circuits (§203)', 'authority': 203} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
