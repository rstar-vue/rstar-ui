
<template>
    <button :class="cls" v-bind="$attrs">
        <slot />
    </button>
</template>
<script lang="ts" setup>
import { buttonProps } from './button'
defineOptions({ name: 'RSButton' })
const props = defineProps(buttonProps)

const prefix = 'rs-button'
const cls = [
    prefix,
    `${prefix}-${props.size}`,
    props.type && `${prefix}-${props.type}`,
    props.type && `${prefix}-${props.type}-active`,
    `${prefix}_hover`,
    props.class
].filter(Boolean)

</script>
