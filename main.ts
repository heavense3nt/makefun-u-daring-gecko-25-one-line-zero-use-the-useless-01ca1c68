import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, Zero Use: a single original line naming a hilariously useless
// superpower, written to /output/entry.txt (1-200 chars, UTF-8).
// The line is 85 characters: well inside the 1-200 gate, and it is written
// with no trailing newline so the file holds exactly the line itself.
const line =
  "I can hear a mosquito from across the house, but only after it has already bitten me.";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);
mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), line, "utf8");
