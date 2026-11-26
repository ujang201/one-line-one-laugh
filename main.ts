// One Line, One Laugh — entry program.
// Writes a single funny line (1–140 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The joke is built in two beats: a relatable setup, then a twist that
// turns the setup back on the speaker — the tool meant to remember for
// us ends up doubting us instead.
const SETUP =
  "My password manager just asked me to reset the password to my password manager,";
const TWIST = "so now neither of us trusts me.";

function buildLine(): string {
  const line = `${SETUP} ${TWIST}`;
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return line;
}

function main(): void {
  const entry = buildLine();
  const outPath = resolve("/output/entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, entry, "utf8");
  console.log(entry);
}

main();
