import esbuild from 'esbuild'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
esbuild
  .context({
    entryPoints: [resolve(__dirname, '../packages/b/index.ts')],
    outfile: resolve(__dirname, '../packages/b/dist/index.js'),
    bundle: true,
    sourcemap: true,
    format: 'esm',
    plugins: [
      {
        name: 'log-rebuild',
        setup(build) {
          build.onEnd(() => {
            console.log(`built:`)
          })
        },
      },
    ],
  })
  .then((ctx) => ctx.watch())
