<template>
  <div class="example">
    <ClientOnly>
      <component v-if="demo" :is="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  path: {
    type: String
  },
  demo: {
    type: Object
  }
})
</script>
