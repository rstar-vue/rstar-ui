import { execa, execaSync } from 'execa'
import path from 'node:path'

const target = 'rstar-ui'
export default (async function buildComponent() {
  return execa(
    'rollup',
    [
      '-c',
      '--environment',
      [`NODE_ENV:development`, `TARGET:${target}`, `SOURCE_MAP:true`].join(','),
    ],
    {
      stdio: 'inherit',
    }
  )
})()
