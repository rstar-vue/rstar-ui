import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import { dts } from "rollup-plugin-dts";

export default {
  input: 'temp/packages/rstar-ui/index.d.ts',
  output: [
    {
      file: 'temp/packages/rstar-ui/dist/index.d.ts',
      format: 'es',
    }
  ],
  external: ['vue'],
  plugins: [
    dts()
  ],
}
