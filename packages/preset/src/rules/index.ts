import { Theme } from 'unocss/preset-uno'
import genColorRule from './src/color'
import button from './src/button'
export default [...genColorRule(), ...button] as Theme[]
