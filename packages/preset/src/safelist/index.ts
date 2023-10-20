function formatRules(rules) {
  const res: any[] = []

  for (const rule of rules) {
    if (Array.isArray(rule) && rule.length && typeof rule[0] === 'string') {
      res.push(rule[0])
    }
  }
  return res
}

function formatShortcuts(shortcuts) {
  const res: any[] = []

  for (const s of shortcuts) {
    Object.keys(s).forEach((key) => {
      res.push(key)
    })
  }
  return res
}

export default function getSafelist({ rules = [], shortcuts = [] }) {
  return [...formatRules(rules), ...formatShortcuts(shortcuts)]
}
