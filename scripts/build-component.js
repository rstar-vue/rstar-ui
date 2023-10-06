import { execa, execaSync } from 'execa'
import path from 'node:path'

const targetPath = path.resolve('./packages/rstar-ui')
export default (async function buildComponent() {
  return execa(
    'rollup',
    [
      '-c',
      '--environment',
      [`NODE_ENV:development`, `TARGET:${targetPath}`].join(','),
    ],
    {
      stdio: 'inherit',
    }
  )
})()
