import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig, build, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import version from '../package.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const alias = {}
const baseConfig = defineConfig({
  publicDir: false,
  resolve: {
    alias: Object.entries(alias).map(([key, url]) => ({
      find: key,
      replacement: path.resolve(__dirname, url)
    }))
  },
  plugins: [
    vue(),
    vueJSX(),
    dts({
      tsconfigPath: path.resolve(__dirname, `../tsconfig.web.json`),
      staticImport: true,
      rollupTypes: true
    })
  ]
})
const rollupOptions = defineConfig({
  build: {
    rollupOptions: {
      external: ['vue', 'unocss'],
      globals: {
        vue: 'Vue'
      }
    }
  }
})
// 生成 package.json
// const createPackageJson = (name) => {
//   const fileStr = `{
//       "name": "${name ? name : 'rstar-ui'}",
//     //   "version": "${version}",
//       "description": "Vue3组件库",
//       "main": "${name ? 'index.umd.js' : 'rstar-ui.umd.js'}",
//       "module":"${name ? 'index.mjs' : 'rstar-ui.mjs'}",
//       "keywords": ["vue3", "组件库", "UI"],
//       "author": "jacma9604",
//       "license": "MIT" `

//   const filePath = path.resolve(
//     outputDir,
//     name ? `${name}/package.json` : 'package.json'
//   )
// }
/** 单组件按需构建 */
async function buildSingle(name, pack, outDir) {
  await build(
    mergeConfig(mergeConfig(rollupOptions, baseConfig), {
      build: {
        lib: {
          entry: name === 'rstar-ui' ? `${pack}/src/index.ts` : `${pack}/index.ts`,
          name: name,
          fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'js'}`,
          formats: ['es', 'cjs']
        },
        outDir
      }
    })
  )
}

export default async function buildLib(name, pack, outDir) {
  await buildSingle(name, pack, outDir)
}
