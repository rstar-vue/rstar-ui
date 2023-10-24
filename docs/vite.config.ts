import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import VueMacros from 'unplugin-vue-macros/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

const resolvePathForPkg = (p) =>
  // path.resolve(fileURLToPath(import.meta.url), `../packages/${p}/src/index.ts`)
  path.resolve(fileURLToPath(import.meta.url), `../packages/${p}`)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@rstar-ui/preset': resolvePathForPkg('preset'),
      'rstar-ui': resolvePathForPkg('rstar-ui')
    }
  },
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vueJsx: vueJsx()
      }
    }),
    Unocss()
  ]
})
