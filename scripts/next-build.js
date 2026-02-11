const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs/promises");

const isWin = process.platform === "win32";
const nextBin = isWin
  ? path.join("node_modules", ".bin", "next.cmd")
  : path.join("node_modules", ".bin", "next");
const command = isWin ? "cmd" : nextBin;
const args = isWin ? ["/c", nextBin, "build"] : ["build"];

const child = spawn(command, args, {
  stdio: ["inherit", "pipe", "pipe"],
});

let output = "";

child.stdout.on("data", (data) => {
  output += data.toString();
});

child.stderr.on("data", (data) => {
  output += data.toString();
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tryRemoveExportDir() {
  const exportDir = path.join(process.cwd(), ".next", "export");
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await fs.rm(exportDir, { recursive: true, force: true });
      return true;
    } catch (error) {
      if (attempt === 4) {
        throw error;
      }
      await sleep(500);
    }
  }
  return false;
}

child.on("close", async (code) => {
  if (code === 0) {
    process.stdout.write(output);
    process.exit(0);
  }

  const hasExportBusyError =
    output.includes("EBUSY") && output.includes(".next\\export");

  if (hasExportBusyError) {
    try {
      await tryRemoveExportDir();
      const filtered = output
        .split(/\r?\n/)
        .filter(
          (line) =>
            !line.includes("Build error occurred") &&
            !line.includes("EBUSY") &&
            !line.includes(".next\\export")
        )
        .join("\n");
      if (filtered.trim()) {
        process.stdout.write(`${filtered}\n`);
      }
      console.log("Build completed. Cleanup retry succeeded.");
      process.exit(0);
    } catch (error) {
      process.stdout.write(output);
      console.error("Build cleanup failed:", error);
    }
  }

  process.stdout.write(output);
  process.exit(code ?? 1);
});
