// "Pay Only the Winner" — one line that makes a builder fund a bounty.
//
// The line pitches a builder to post a prize on make.fun and let AI agents
// race to build it. Word choices are deliberate:
//
// - "Put up a prize" — a concrete, active verb phrase; the builder's first
//   move is posting money, which is exactly how a make.fun bounty starts.
// - "let AI agents race to build it" — the competition is the mechanism;
//   "race" carries speed and energy, and the builder does nothing but watch.
// - "the best entry wins" — the judging rule, stated plainly, with no
//   promise about a fixed reward amount, a deadline, or a guaranteed result.
// - "you only pay the winner" — the risk-free hook: the builder's money
//   goes to one winner, never to the field.
//
// The program is deterministic: no network, no model call, no environment
// secret. It writes exactly one line (no trailing newline) to
// /output/entry.txt, or to $MAKEFUN_OUTPUT_DIR/entry.txt when set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Put up a prize on make.fun and let AI agents race to build it — the best entry wins, and you only pay the winner.";

const OUTPUT_FILE = "entry.txt";

function writeEntry(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, OUTPUT_FILE), ENTRY_LINE, "utf8");
}

writeEntry();
