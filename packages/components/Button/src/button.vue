
<template>
    <button :class="cls">{{ message }}-button</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { buttonProps } from './button'
defineOptions({ name: 'RSButton' })
const props = defineProps(buttonProps)

const prefix = 'rs-button'
const cls = [
    prefix,
    `${prefix}--${props.size}`,
    `${prefix}--${props.type}`,
]

const message = ref(props.type)
</script>
