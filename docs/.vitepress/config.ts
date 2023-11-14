import { defineConfig } from 'vitepress'
import mdPlugin from './plugins/mdPlugin'

const components = [
  {
    text: 'Development',
    items: [
      { text: 'Installation', link: '/components/installation' },
      { text: 'Quick Start', link: '/components/quick-start' }
    ]
  },
  {
    text: 'Components',
    items: [
      {
        text: 'Basic',
        items: [
          {
            text: 'Button',
            link: '/components/button'
          }
        ]
      }
    ]
  }
]

const theme = [
  {
    text: 'Basic',
    link: '/theme/Basic'
  }
]
const sidebar = {
  '/components': components,
  '/theme': theme
}

const nav = [
  { text: 'Components', link: '/components/button' },
  { text: 'Theme', items: theme }
]

export default defineConfig({
  title: 'RStarUi',
  description: 'A vue3 ui lib',
  //   lang: 'en-US',
  markdown: {
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    nav,
    sidebar
  }
})
