import { Theme } from 'unocss/preset-uno'
import genColorRule from './src/color'
import button from './src/button'
import text from './src/text'
export default [...genColorRule(), ...button, ...text] as Theme[]
