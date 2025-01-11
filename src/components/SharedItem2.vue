<template>
  <div class="border border-solid border-gray-200 rounded-lg">
    <div class="py-4 px-8 flex items-center justify-between border-b border-solid border-gray-200 max-md:py-2 max-md:px-4">
      <div class="text-xl text-gray-700 font-bold">{{ props.title }}</div>
      <div class="flex items-center justify-center gap-2">
        <slot name="list"></slot>
      </div>
    </div>
    <div class="p-8 flex flex-col gap-4 text-sm text-gray-500 max-md:p-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
  import {defineProps} from 'vue'
  const props = defineProps(['title']);
</script>
