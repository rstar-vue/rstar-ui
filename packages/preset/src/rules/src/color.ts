import { Theme } from 'unocss/preset-uno'
import { Rule, RuleContext } from 'unocss'
import { parseCssColor } from '@unocss/preset-mini/utils'

function normalizeColor<T>(colors: T, color?: string, opacity?: string) {
  if (color) {
    const cssColor = parseCssColor(colors[color])
    if (cssColor)
      return `rgba(${cssColor.components.join(',')}, ${Number(opacity) / 100})`
  }
}
export default function genColorRule(): Rule<Theme>[] {
  const types = {
    bg: 'background-color',
    text: 'color',
    border: 'border-color',
  }

  return [
    [
      // --rs:text|primary|100
      /^--rs:/,
      (inputData, { theme }: RuleContext<Theme>) => {
        const { input } = inputData

        if (!input) return
        const [prefix, descriptor] = input.split(':')
        if (!descriptor) return

        let [type, variables, opacity] = descriptor.split('|')
        const color = normalizeColor<typeof theme.colors>(
          theme.colors,
          variables,
          opacity
        )
        type = types[type]
        if (!type) return
        return {
          [type]: color,
        }
      },
    ],
  ]
}
