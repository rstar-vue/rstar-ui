import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Demo from '../components/demo/demo.vue'

import 'virtual:uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
  },
  // NotFound: ()=>'404',
  Layout() {
    return h(DefaultTheme.Layout)
  }
}
