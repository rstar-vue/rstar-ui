import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Demo from '../components/demo/demo.vue'
import RStarUi from 'rstar-ui'

import 'virtual:uno.css'
import '../styles/code.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(RStarUi)
    app.component('Demo', Demo)
  },
  // NotFound: ()=>'404',
  Layout() {
    return h(DefaultTheme.Layout)
  }
}
