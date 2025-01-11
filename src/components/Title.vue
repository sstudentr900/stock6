<template>
  <div class="flex items-center justify-between mb-8">
    <div class="stockreturn text-xl text-gray-500">{{ title }}</div>
    <ul class="flex items-center justify-center gap-3 text-sm text-gray-500">
      <li>
        <router-link to="/" class="">首頁</router-link>
      </li>
      <li>
        <SvgIcon name="arrow" class="text-base text-gray-300"/>
      </li>
      <li>
        <router-link :to="path" class="">{{ title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import SvgIcon from '@/components/SvgIcon.vue'
  import {useRouter,useRoute} from 'vue-router'
  import {defineProps} from 'vue'
  const props = defineProps(['title']);
  const route = useRoute()
  const router = useRouter()
  const matched = route.matched
  const title = matched[0].meta.title_ch
  const path = matched[0].path
  console.log('matched',route,router);
  // const json = matched.filter(item=>item.meta.title)//要有meta才跑麵包
</script>
