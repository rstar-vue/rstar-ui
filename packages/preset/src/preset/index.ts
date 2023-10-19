import { Preset, Rule } from "unocss"
import { Theme } from "unocss/preset-uno"
import rules from "../rules"
import shortcuts from "../shortcuts"
import theme from "../theme"
import defaultColor from "../colors"
import getSafelist from "../safelist"

function normalizeRules(rules: Record<string, any>) {
  const res: Array<Array<Record<string, any>>> = []

  Object.keys(rules).forEach(key => {
    const rule = [key, rules[key]]
    res.push(rule)
  })
  return res
}

const getPreflights = colors => {
  let res = ""
  const walk = (prefix, colors) => {
    for (const [k, v] of Object.entries(colors)) {
      const name = `${prefix}-${k}`
      if (typeof v === "string") {
        res = res + "\n" + `${name}:${v};`
      } else {
        walk(name, v)
      }
    }
  }
  walk("--rs", colors)
  return res
}

export default function preset({ colors = {} }: Record<string, any> = {}) {
  return {
    name: "rstar-preset",
    theme,
    rules: [...rules],
    shortcuts,
    safelist: getSafelist({ rules, shortcuts }),
    preflights: [
      {
        getCSS: () => {
          return `:root {
                    ${getPreflights(defaultColor)}
                }`
        }
      }
    ]
  }
}
