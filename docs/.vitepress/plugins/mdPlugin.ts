import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import fsExtra from 'fs-extra'
import path from 'node:path'
import { highlight } from '../utils/highlight'

export default function mdPlugin(md: MarkdownIt) {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo$/)
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        let source = ''
        if (sourceFileToken.type === 'inline') {
          source = fsExtra.readFileSync(path.resolve('./examples', `${sourceFile}.vue`), 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<Demo source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}">`
      } else {
        return `</Demo>`
      }
    }
  })
}
