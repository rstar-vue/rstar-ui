import path from 'node:path'
import fse from 'fs-extra'
import { logger } from 'rslog'

import { findLibTarget, setPkgVersionToPath } from './utils.js'
import buildLib from './build-lib.js'
import {
  MAIN_DIR,
  MAIN_OUTPUT_DIR,
  LIB_DIR,
  PRESET_DIR,
  PRESET_OUTPUT_DIR,
  ROOT
} from './constant.js'
const { readJSONSync } = fse

const version = readJSONSync(path.join(ROOT, 'package.json')).version

async function buildMainLibrary() {
  setPkgVersionToPath(MAIN_DIR, version)
  await buildLib('rstar-ui', MAIN_DIR, MAIN_OUTPUT_DIR)
}

async function buildComponents() {
  const targets = await findLibTarget(LIB_DIR)
  for (const [pkg, url] of Object.entries(targets)) {
    logger.ready(`build ${pkg}`)
    await buildLib(pkg, url, `${MAIN_OUTPUT_DIR}/${pkg}`)
  }
}

async function buildPreset() {
  setPkgVersionToPath(PRESET_DIR, version)
  await buildLib('preset', `${PRESET_DIR}/src`, PRESET_OUTPUT_DIR)
}

const tasks = [
  {
    text: 'build main library',
    task: buildMainLibrary
  },
  {
    text: 'build components',
    task: buildComponents
  },
  {
    text: 'build preset',
    task: buildPreset
  }
]

async function runBuildTasks() {
  for (const { text, task } of tasks) {
    try {
      await task()
      logger.ready(text)
    } catch (err) {
      logger.error(err)
      throw err
    }
  }

  logger.success('build tasks success')
}

build()
async function build() {
  await runBuildTasks()
}
