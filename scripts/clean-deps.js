import fse from 'fs-extra'

import { ROOT, PRESET_DIR, MAIN_DIR, DOCS_DIR, PLAY_DIR } from './constant.js'
import { logger } from 'rslog'
import path from 'path'
const { remove } = fse

const PKG_NODE_MODULES = [
  path.join(ROOT, 'node_modules'),
  path.join(PRESET_DIR, 'node_modules'),
  path.join(MAIN_DIR, 'node_modules'),
  path.join(PLAY_DIR, 'node_modules'),
  path.join(DOCS_DIR, 'node_modules')
]
async function clean() {
  for (const dir of PKG_NODE_MODULES) {
    logger.ready('remove deps: ' + dir)
    await remove(dir)
  }

  logger.success('clean success')
}
clean()
