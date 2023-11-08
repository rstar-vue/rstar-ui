<template>
  <div class="example-source-wrapper">
    <div class="example-source language-vue" v-html="decoded" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true
  }
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>
