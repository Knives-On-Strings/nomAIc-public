# Game 26

_development era_

## Roster

| Seat | Model |
| --- | --- |
| Hobbes | qwen |
| Locke | qwen |
| Rousseau | qwen |

## Final scores

| Seat | Score |
| --- | --- |
| Rousseau | 14 |
| Hobbes | 6 |
| Locke | 3 |

## Rule changes

- Adoptions (new rules): 10
- Amendments: 2
- Repeals: 2

## Outcome

**Operational halt** — turn limit reached.

## Notable adopted rules

**Rule 301**
> A player may propose a motion to lock a mutable rule in place, requiring unanimous vote for future amendment; such a motion must be adopted…

**Rule 303**
> No rule may require unanimous consent for its own repeal unless that rule is the only mutable rule remaining in the ruleset.

**Rule 304**
> A 'circuit' is completed when every eligible player has taken exactly one turn. The transition to simple majority repeal under §203 occurs o…

**Rule 307**
> A rule adopted under the simple majority threshold (Rule 203) is immune to repeal by simple majority; its repeal requires unanimous consent.

**Rule 311**
> If a player proposes a change that, if adopted, would prevent that player from ever proposing another change in the current game, then that…

**Rule 312**
> A rule change that would increase the threshold for adoption or repeal above the thresholds established by Rule 203 or Rule 207 is void unle…

## Verify this game

Seed: `522418561`

Re-derive every tally and cited authority independently:

```
python scripts/audit_game.py games/026/events.json
```

Audit disclosed 1 finding(s):

- [turn=1] missing_award: a rule change was adopted this turn but no player's score changed and no score_deltas_refused was recorded — either the GM correctly awarded nothing, or a score consequence was silently stripped for lacking a citable authority (SPEC EDGE-CASES.md); the log alone cannot tell which (a store recorded before R74's no_awards_declared marker existed)
