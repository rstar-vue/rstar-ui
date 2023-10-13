
<template>
    <button class="--rs:color|rs-pink-0|100 r-button--color">{{ message }}-button</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {buttonProps} from './button'
defineOptions({
    name:'RSButton'
})
const props = defineProps(buttonProps)
const message = ref(props.type)
</script>
