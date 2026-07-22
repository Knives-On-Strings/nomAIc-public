# Game 16

_development era_

> The rule that existed twice — 209's text got amended into a brand-new number before anyone touched 209 itself.

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Hobbes | 75 |
| Locke | 20 |
| Rousseau | 0 |

## Rule changes

- Adoptions (new rules): 1
- Amendments: 3
- Repeals: 0

## Outcome

**Win** — champion **Hobbes** with 75 points. Confirmed by a second, independent pass.

## Notable adopted rules

**Rule 302**
> Rule 209 is hereby amended to read: The ruleset may never hold more than 20 mutable rules at one time, except that any player who has scored…

## Verify this game

Seed: `1772335109`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/016/events.json
```

Audit disclosed 4 finding(s):

- [turn=4] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=19, turn=1] voting_rule_vocabulary: fraction value 1.0 is not strictly between 0 and 1 — a value of exactly 1.0 is unsatisfiable by any division (3-0 is not &gt; 1.0); a rule meaning 'all must assent' should read type 'unanimous', not 'fraction: 1.0' (the ghost game sixteen recorded)
- [seq=38, turn=2] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 1.0, 'abstain_blocks': False, 'label': 'Unanimous (100% of votes must be Aye)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after 2 circuits'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=104, turn=6] score_delta_bound: Hobbes's score moved by +75 in one update; the engine bounds a single verdict to ±25
