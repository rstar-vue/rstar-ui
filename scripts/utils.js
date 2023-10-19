import fse from 'fs-extra'
import path from 'node:path'
import { execa } from 'execa'
const { copy, readdir, lstatSync, writeJSONSync, readJSONSync } = fse

export function isDir(dir) {
  return lstatSync(dir).isDirectory()
}

export async function findLibTarget(componentDir) {
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
  return execa(command, options, { stdio: 'inherit' })
}

export async function setPkgVersion(pkgJson, pkgPath, version) {
  pkgJson.version = version
  writeJSONSync(pkgPath, pkgJson, { spaces: 2 })
}
export async function setPkgVersionToPath(toPkg, version) {
  const pkgPath = path.join(toPkg, 'package.json')
  const pkgJson = readJSONSync(pkgPath)
  setPkgVersion(pkgJson, pkgPath, version)
}
