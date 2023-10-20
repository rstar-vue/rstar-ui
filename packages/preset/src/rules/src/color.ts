import { Theme } from 'unocss/preset-uno'
import { Rule, RuleContext } from 'unocss'
import { parseCssColor } from '@unocss/preset-mini/utils'
import { getProperty } from '@rstar-ui/utils'

function normalizeColor<T>(colors: T, color?: string, opacity?: string) {
  const matchRes = color?.match(/^--rs-(.+)$/)
  if (matchRes) {
    color = matchRes[1]
  }
  const colorStr = getProperty(colors as Record<string, string>, color, '-')
  const cssColor = parseCssColor(colorStr)
  if (cssColor) return `rgba(${cssColor.components.join(',')}, ${Number(opacity) / 100})`
  else {
    return colorStr
  }
}
export default function genColorRule(): Rule<Theme>[] {
  const types = {
    bg: 'background-color',
    text: 'color',
    border: 'border-color'
  }

  return [
    [
      // rs:text|primary|100
      /^rs:/,
      (inputData, { theme }: RuleContext<Theme>) => {
        const { input } = inputData

        if (!input) return
        const [prefix, descriptor] = input.split(':')
        if (!descriptor) return

        // eslint-disable-next-line prefer-const
        let [type, variables, opacity = '100'] = descriptor.split('|')
        const color = normalizeColor<typeof theme.colors>(theme.colors, variables, opacity)
        type = types[type]
        if (!type) return
        return {
          [type]: color
        }
      }
    ]
  ]
}
