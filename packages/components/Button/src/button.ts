import type { ExtractPropTypes, PropType } from 'vue'

export type ButtonType = 'primary' | 'warn' | 'error'
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Text>
