import fse from "fs-extra"
import path from "node:path"
import { createRequire } from "node:module"
import { execa, execaSync } from "execa"
const { remove, copy, readdir, existsSync, lstatSync } = fse

export function isDir(dir) {
  return lstatSync(dir).isDirectory()
}

export async function findComponentsTarget(componentDir) {
  const files = await readdir(componentDir)

  const targets = {}
  for (let filename of files) {
    const filePath = path.join(componentDir, filename)
    if (isDir(filePath)) {
      targets[filename] = filePath
    }
  }

  return targets
}

export async function runTask(command, options) {
  return execa(command, options, { stdio: "inherit" })
}
