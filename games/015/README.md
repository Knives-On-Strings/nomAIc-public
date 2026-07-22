# Game 15

_development era_

> Five turns and a leap — Hobbes cleared a freshly-raised bar in a single stroke.

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Hobbes | 120 |
| Locke | 0 |
| Rousseau | 0 |

## Rule changes

- Adoptions (new rules): 1
- Amendments: 1
- Repeals: 1

## Outcome

**Win** — champion **Hobbes** with 120 points. Confirmed by a second, independent pass.

## Notable adopted rules

**Rule 214**
> Rule 305 (mutable): No proposal may repeal, amend, or transmute any rule numbered in the 100s (immutable) unless that specific proposal secu…

## Verify this game

Seed: `1108177129`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/015/events.json
```

Audit disclosed 10 finding(s):

- [turn=2] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [turn=4] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
- [seq=3, turn=1] proposal_numbering: expected proposal_num 301, got None (Rule 108)
- [seq=19, turn=1] voting_rule_vocabulary: fraction value 1.0 is not strictly between 0 and 1 — a value of exactly 1.0 is unsatisfiable by any division (3-0 is not &gt; 1.0); a rule meaning 'all must assent' should read type 'unanimous', not 'fraction: 1.0' (the ghost game sixteen recorded)
- [seq=22, turn=2] proposal_numbering: expected proposal_num 302, got None (Rule 108)
- [seq=38, turn=2] procedure_consistency: the GM's voting_rule reading changed from {'type': 'fraction', 'value': 1.0, 'abstain_blocks': False, 'label': 'Unanimous (100% of votes must be Aye)'} to {'type': 'fraction', 'value': 0.5, 'abstain_blocks': False, 'label': 'Simple majority after 2 circuits'} with no rule_changed event in between — legitimate only if a rule conditions procedure on the turn number; verify the cited rule
- [seq=42, turn=3] proposal_numbering: expected proposal_num 303, got None (Rule 108)
- [seq=61, turn=4] proposal_numbering: expected proposal_num 304, got None (Rule 108)
- [seq=81, turn=5] proposal_numbering: expected proposal_num 305, got None (Rule 108)
- [seq=99, turn=5] score_delta_bound: Hobbes's score moved by +120 in one update; the engine bounds a single verdict to ±25
