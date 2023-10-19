import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const ROOT = path.resolve(__dirname, '..')
export const MAIN_DIR = path.join(ROOT, 'packages/rstar-ui')
export const MAIN_OUTPUT_DIR = path.join(MAIN_DIR, 'dist')

export const LIB_DIR = path.join(ROOT, 'packages/components')

export const PRESET_DIR = path.join(ROOT, 'packages/preset')
export const PRESET_OUTPUT_DIR = path.join(PRESET_DIR, 'dist')

export const PLAY_DIR = path.join(ROOT, 'play')
export const DOCS_DIR = path.join(ROOT, 'docs')
