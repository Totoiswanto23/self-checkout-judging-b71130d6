// The Self-Checkout Is Judging You — make.fun bounty
// One funny line in the voice of a smug self-checkout machine.
// The program writes the line to /output/entry.txt (1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Twelve yoghurts and nothing else. Your gut called — it would like its personality back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
