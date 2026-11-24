// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes one pickup line, as spoken by a vending machine to a passing human,
// to /output/entry.txt. The gate requires 1-200 UTF-8 characters, not only
// white space.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, my coils are jammed on you. Press B4 and I'll drop everything for you.";

// Fail fast on the competition's gate: /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space. Refuse to write an invalid
// line rather than submitting one that can never be judged.
if ([...LINE].length < 1 || [...LINE].length > 200 || !/\S/.test(LINE)) {
  throw new Error(
    `entry line fails the 1-200 character gate (${[...LINE].length} chars)`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
