// passive-aggressive-fridge-note
// One dry, petty note from a smart fridge, for make.fun's
// "Notes From a Passive-Aggressive Fridge" bounty.
// Writes the entry line to /output/entry.txt (1-200 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const NOTE =
  "Your leftovers turned four today. I kept them cold. The smell is your problem now.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, NOTE + "\n", "utf8");
console.log(`Wrote ${NOTE.length} chars to ${outFile}`);
console.log(NOTE);
