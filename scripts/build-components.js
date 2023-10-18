import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig, build, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import version from '../package.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 主入口
const mainDir = path.resolve(__dirname, '../packages/rstar-ui')
// 组件入口
const componentsDir = path.resolve(__dirname, '../packages/components')
// 输出目录
const outputDir = path.resolve(mainDir, 'dist')

const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJSX()],
})
const rollupOptions = defineConfig({
  external: ['vue', 'unocss'],
  globals: {
    vue: 'Vue',
  },
})
const alias = {}
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
const buildSingle = async () => {
  await build(
    mergeConfig(mergeConfig(rollupOptions, baseConfig), {
      publicDir: false,
      resolve: {
        alias: Object.entries(alias).map(([key, url]) => ({
          find: key,
          replacement: path.resolve(__dirname, url),
        })),
      },
      plugins: [
        dts({
          tsconfigPath: path.resolve(__dirname, `../tsconfig.web.json`),
          staticImport: true,
          rollupTypes: true,
          // outputDir: [`${outputDir}/types`],
        }),
      ],

      build: {
        lib: {
          entry: `${mainDir}/src/index.ts`,
          name: 'rstar-ui',
          fileName: (format) => `index.js`,
          formats: ['es'],
        },
        outDir: outputDir,
      },
    })
  )
}

const buildLib = async () => {
  await buildSingle()

  //   按需打包
  //   fs.readdirSync(componentsDir)
  //     .filter((name) => {
  //       const componentDir = path.resolve(componentsDir, name)
  //       const isDir = fs.lstarSync(componentDir).isDirectory()
  //       return isDir && fs.readdirSync(componentDir).includes('index.ts')
  //     })
  //     .forEach(async (name) => {
  //       await buildSingle(name)
  //     })
}

buildLib()
