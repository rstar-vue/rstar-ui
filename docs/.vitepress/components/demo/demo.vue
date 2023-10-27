<template>
  <ClientOnly>
    <div class="border border-solid mt-6 border-slate-200 rounded px-2 py-4">
      <Example :path="path" :demo="demo" />

      <div class="code-box">
        {{ code }}
      </div>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Example from './example.vue'
const demos = import.meta.glob(`/examples/**/*.vue`, { eager: true })

const props = defineProps({
  source: {
    type: String,
    default: '',
    required: true
  },
  path: {
    type: String,
    required: true
  }
})
console.log('demos', demos)

const demo = computed(
  () =>
    (demos[`/examples/${props.path}.vue`] as { default: Record<string, any> } | undefined)?.default
)
const code = computed(() => decodeURIComponent(props.source))
</script>

<style scoped></style>
