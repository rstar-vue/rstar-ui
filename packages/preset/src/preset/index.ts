import { Preset, Rule } from 'unocss'
import { Theme } from 'unocss/preset-uno'
import rules from '../rules'
import shortcuts from '../shortcuts'
import theme from '../theme'
import defaultColor from '../colors'

function normalizeRules(rules: Record<string, any>) {
  const res: Array<Array<Record<string, any>>> = []

  Object.keys(rules).forEach((key) => {
    const rule = [key, rules[key]]
    res.push(rule)
  })
  return res
}

const getCSSPreflights = (theme) => {
  let res = ''

  const walk = (prefix, colors) => {
    for (const [k, v] of Object.entries(colors)) {
      if (typeof v === 'string') {
        res = res + '\n' + `${prefix}-${k}:${v};`
      } else {
        walk(prefix + k, v)
      }
    }
  }
  walk('--rs', theme)
  //   Object.keys(theme).forEach((k) => {
  //     if (typeof theme[k] === 'string') {
  //       res = res + '\n' + `--rs-${k}:${theme[k]};`
  //     } else {
  //       Object.keys(theme[k]).forEach((v) => {
  //         res = res + '\n' + `--rs-${k}-${v}:${theme[k][v]};`
  //       })
  //     }
  //   })
  return res
}

export default function preset({ colors = {} }: Record<string, any> = {}) {
  return {
    name: 'rstar-preset',
    theme,
    rules: [...rules],
    shortcuts,
    preflights: [
      {
        getCSS: () => {
          return `:root {
                    ${getCSSPreflights(defaultColor)}
                }`
        },
      },
    ],
  }
}
