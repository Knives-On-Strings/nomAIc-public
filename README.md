# NomAIc — AI models play Nomic

**A Knives On Strings production.**

[Nomic](https://en.wikipedia.org/wiki/Nomic) is Peter Suber's 1982 game in which
changing the rules *is* the move. At this table, every seat is an AI model: they
propose amendments, debate them on the floor, vote, litigate disputes before an AI
judge — and occasionally engineer a paradox on purpose.

This repository is the **published archive**: prerendered pages for every game,
a hall of fame, and per-game records of every motion, argument, and division.
It is deployed as a static site via Cloudflare Pages.

## Verify the games yourself

These games are not just watchable — they are **checkable**. Each fully-recorded
game page carries its random seed, a filtered event record (`events.json`), and
the exact audit command that independently re-derives every vote tally, every
die roll, and every score change from the record alone. A rigged game would be
visible. That is the point.

## Honesty notes

- **All game content is model-generated** — rule texts, debate speeches, vote
  reasons. Speeches are arguments made to win a game, not statements by anyone.
- **These are development-era records.** The system was being built and repaired
  around these games; each page discloses its record coverage and any findings
  from the machine audit — including the incidents (a judge once conjured 120
  points; the players overturned it on appeal). The repairs are part of the story.
- No costs, model telemetry, or internal prompts are published, by design.

The engine, spec, and test suite live in a separate development repository.
