import fs from 'node:fs'
import fg from 'fast-glob'
import path from 'node:path'
import { createRequire } from 'node:module'
import { execa, execaSync } from 'execa'
const require = createRequire(import.meta.url)
const targetFile = ['**/package.json']
export async function findBuildTargets(root) {
  const pkgList = await fg.sync(targetFile, {
    ignore: ['src', '**/node_modules/**', 'dist'],
    cwd: root,
  })

  const targets = {}
  for (let i = 0; i < pkgList.length; i++) {
    const pkgPath = path.resolve(root, pkgList[i])
    // const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const pkgJson = require(pkgPath)
    if (pkgJson.private === false) {
      const dirPath = path.dirname(pkgPath)
      const pkgName = dirPath.split('/').slice(-1)[0]
      targets[pkgName] = dirPath
    }
  }

  return targets
}

export async function runTask(command, options) {
  return execa(command, options, { stdio: 'inherit' })
}
