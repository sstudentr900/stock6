<template>
  <div :class="props.class">
    <svg class="fill-current w-1em h-1em">
      <!-- :width="width"
      :height="height" -->
      <use :xlink:href="symbolId"/>
      <!-- :fill="color" -->
    </svg>
  </div>
</template>
<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    // color: {
    //   type: String,
    //   default: '#333'
    // },
    // width: {
    //   type: String,
    //   default: '16px'
    // },
    // height: {
    //   type: String,
    //   default: '16px'
    // }
  })

  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
