import type { ExtractPropTypes, PropType } from 'vue'

export type ButtonType = 'primary' | 'warn' | 'error'
export type ButtonSize = 'large' | 'default' | 'small'
export const buttonProps = {
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default'
  },
  type: {
    type: String as PropType<ButtonType>
  },
  class: {
    type: String,
    default: ''
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Text>
