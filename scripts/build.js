import path from "node:path"
import { fileURLToPath } from "node:url"

import { findComponentsTarget, runTask } from "./utils.js"
import { execa, execaSync } from "execa"
import { createRequire } from "node:module"
import { logger } from "rslog"

import buildLib from "./build-lib.js"
const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 主入口
const mainDir = path.resolve(__dirname, "../packages/rstar-ui")
// 组件入口
const componentsDir = path.resolve(__dirname, "../packages/components")
// 输出目录
const outputDir = path.resolve(mainDir, "dist")

async function buildMainLibrary() {
  await buildLib("rstar-ui", mainDir, outputDir)
}

async function buildComponents() {
  const targets = await findComponentsTarget(componentsDir)
  for (const [pkg, url] of Object.entries(targets)) {
    await buildLib(pkg, url, `${outputDir}/${pkg}`)
    logger.ready(`build ${pkg} success`)
  }
}

const tasks = [
  {
    text: "build main library",
    task: buildMainLibrary,
  },
  {
    text: "build components",
    task: buildComponents,
  },
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

  logger.success("build tasks success")
}

build()
async function build() {
  await runBuildTasks()
}
