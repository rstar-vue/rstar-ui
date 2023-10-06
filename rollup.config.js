import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'

export default {
  input: 'packages/rstar-ui/index.ts',
  output: [
    {
      file: 'packages/rstar-ui/dist/index.mjs',
      format: 'esm',
    },
    {
      file: 'packages/rstar-ui/dist/index.cjs',
      format: 'cjs',
    },
  ],
  external: ['vue'],
  plugins: [
    typescript(),
    resolve(),
    json(),
    vue({
      css: true,
      compileTemplate: true,
    }),
  ],
}
