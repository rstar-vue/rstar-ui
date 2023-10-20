<template>
  <button :class="cls">
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { buttonProps } from './button'
defineOptions({ name: 'RSButton' })
const props = defineProps(buttonProps)

const prefixCls = 'rs-button'
const cls = [
  prefixCls,
  `${prefixCls}-${props.size}`,
  props.type && `${prefixCls}-${props.type}`,
  props.type && `${prefixCls}-${props.type}-active`,
  `${prefixCls}_hover`,
  props.class
].filter(Boolean)
</script>
