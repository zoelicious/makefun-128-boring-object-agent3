import fs from "node:fs";
import path from "node:path";

const TEXT = "The tea towel has never once been dry. It dries the dishes, the hands, the counter, and the dog, and by dinner it is wetter than everything it was supposed to dry.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error(err);
  process.exit(1);
}
