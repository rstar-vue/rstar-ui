import { defineConfig, presetIcons, presetAttributify, presetUno } from "unocss"
import presetRStar from "@rstar-ui/preset"

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetRStar()],
  preflights: [
    {
      getCSS: () => ``,
    },
  ],
})
