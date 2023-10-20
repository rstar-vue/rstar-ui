import { defineConfig } from 'vitepress'

const guides = [
  { text: 'Quick Start', link: '/guide/quick-start' },
  { text: 'Installation', link: '/guide/install' }
]

const components = [
  {
    text: 'Basic',
    collapsed: false,
    items: [
      {
        text: 'Button',
        link: '/components/RSButton'
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
  { text: 'Home', link: '/' },
  { text: 'Guide', items: guides },
  { text: 'Components', items: components },
  { text: 'Theme', items: theme }
]

export default defineConfig({
  title: 'RStarUi',
  description: 'A vue3 ui lib',
  //   lang: 'en-US',
  themeConfig: {
    nav,
    sidebar
  }
})
