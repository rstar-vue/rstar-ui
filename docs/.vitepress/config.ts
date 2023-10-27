import { defineConfig } from 'vitepress'
import mdPlugin from './plugins/mdPlugin'

const guides = [
  { text: 'Quick Start', link: '/guide/quick-start' },
  { text: 'Installation', link: '/guide/install' }
]

const components = [
  {
    text: 'Basic',
    collapsed: true,
    items: [
      {
        text: 'Button',
        link: '/components/button'
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
  '/guide': [
    {
      text: 'Developer Guide',
      items: guides
    }
  ],
  '/components': components,
  '/theme': theme
}

const nav = [
  { text: 'Guide', items: guides },
  { text: 'Components', items: components },
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
