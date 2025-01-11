<template>
  <div class="border border-solid border-gray-200 rounded-lg p-8 max-md:p-4">
    <div class="flex items-center justify-between">
      <div class="text-xl text-gray-700 font-bold">{{ props.title }}</div>
      <div class="flex items-center justify-center gap-2">
        <slot name="list"></slot>
      </div>
    </div>
    <div class="mt-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
  import {defineProps} from 'vue'
  const props = defineProps(['title']);
</script>
