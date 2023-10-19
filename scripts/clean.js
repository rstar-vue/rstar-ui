import fse from 'fs-extra'

import { MAIN_OUTPUT_DIR, PRESET_OUTPUT_DIR } from './constant.js'
import { logger } from 'rslog'
const { remove } = fse

const PKG_OUTPUT_DIRS = [MAIN_OUTPUT_DIR, PRESET_OUTPUT_DIR]
async function clean() {
  for (const dir of PKG_OUTPUT_DIRS) {
    logger.ready('remove dist: ' + dir)
    await remove(dir)
  }

  logger.success('clean: ')
}
clean()
