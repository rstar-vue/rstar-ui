import theme from 'vitepress/theme'
import 'virtual:uno.css'
import { h } from 'vue'

export default {
  ...theme,
  enhanceApp({ app }) {},
  Layout() {
    return h(theme.Layout)
  }
}
