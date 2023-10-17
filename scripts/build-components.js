import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
// import version from '../package.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJSX()],
})
const rollupOptions = defineConfig({
  external: ['vue'],
  globals: {
    vue: 'Vue',
  },
})

// 主入口
const mainDir = path.resolve(__dirname, '../packages/rstar-ui')
// 组件入口
const componentsDir = path.resolve(__dirname, '../packages/components')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

// 生成 package.json
const createPackageJson = (name) => {
  const fileStr = `{
      "name": "${name ? name : 'rstar-ui'}",
    //   "version": "${version}",
      "description": "Vue3组件库",
      "main": "${name ? 'index.umd.js' : 'rstar-ui.umd.js'}",
      "module":"${name ? 'index.mjs' : 'rstar-ui.mjs'}",
      "keywords": ["vue3", "组件库", "UI"],
      "author": "jacma9604",
      "license": "MIT" `

  const filePath = path.resolve(
    outputDir,
    name ? `${name}/package.json` : 'package.json'
  )
}
/** 单组件按需构建 */

const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd'],
        },
        rollupOptions,
        outDir: path.resolve(outputDir, name),
      },
    })
  )
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: `${mainDir}/src/index.ts`,
          name: 'rstar-ui',
          fileName: 'rstar-ui',
          formats: ['es', 'umd'],
        },
        rollupOptions,
        outDir: outputDir,
      },
    })
  )

//   createPackageJson()
}

const buildLib = async () => {
  await buildAll()

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
