import minimist from 'minimist'
import { findBuildTargets, runTask } from './utils.js'
import { execa, execaSync } from 'execa'
// const args = minimist(process.argv.slice(2))
import { createRequire } from 'node:module'
import buildComponent from './build-component.js'

import path from 'node:path'
const require = createRequire(import.meta.url)

async function buildAll() {
  const targets = await findBuildTargets('./')
  console.log('targets', targets)

  for (const [pkgName, pkgPath] of Object.entries(targets)) {
    const pkg = require(path.resolve(pkgPath, 'package.json'))
    if (!pkg.scripts.build) continue
    console.log('execa: ', pkgName)
    await runTask('pnpm', ['run', 'build', '-C', [pkgPath]])
  }

  const res = await buildComponent
  console.log(res)
}

buildAll()
