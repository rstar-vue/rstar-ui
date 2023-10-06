
<template>
    <div>{{ message }}-button</div>
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
