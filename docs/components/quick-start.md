# Quick start

In vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()]
})
```

In unocss.config.js

```js
import { defineConfig, presetIcons, presetAttributify, presetUno } from 'unocss'
import presetRStar from '@rstar-ui/preset'

export default defineConfig({
  presets: [
    presetUno(), 
    presetAttributify(), 
    presetIcons(), 
    presetRStar()
  ]
})
```
