<template>
  <ClientOnly>
    <div class="border border-solid mt-6 border-slate-200 rounded">
      <div class="px-4 py-4">
        <Example :path="path" :demo="demo" />
      </div>
      <div class="rs:bg|--rs-gray-1" v-show="sourceVisible">
        <SourceCode :source="source" />
      </div>
      <div class="text-center cursor-pointer py-2 hover:rs:bg|--rs-gray-1 transition-150">
        <div @click="toggleSourceVisible(!sourceVisible)">
          {{ sourceVisible ? '隐藏' : '显示' }}
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useToggle } from '@vueuse/core'

import Example from './example.vue'
import SourceCode from './source-code.vue'
const demos = import.meta.glob(`/examples/**/*.vue`, { eager: true })

const props = defineProps({
  source: {
    type: String,
    default: '',
    required: true
  },
  rawSource: {
    type: String,
    default: '',
    required: true
  },
  path: {
    type: String,
    required: true
  }
})
const demo = computed(
  () =>
    (demos[`/examples/${props.path}.vue`] as { default: Record<string, any> } | undefined)?.default
)
const code = computed(() => decodeURIComponent(props.source))

const [sourceVisible, toggleSourceVisible] = useToggle()
</script>

<style scoped></style>
