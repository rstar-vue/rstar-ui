import { defineConfig, presetIcons, presetAttributify, presetUno } from 'unocss'
import presetRStar from '@rstar-ui/preset/src/index'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetRStar()]
})
