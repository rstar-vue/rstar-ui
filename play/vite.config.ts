import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const resolvePathForPkg = (p) =>
  path.resolve(fileURLToPath(import.meta.url), `../../packages/${p}/src/index.ts`)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@rstar-ui/preset': resolvePathForPkg('preset'),
      'rstar-ui': resolvePathForPkg('rstar-ui')
    }
  },
  plugins: [vue(), Unocss()]
})
