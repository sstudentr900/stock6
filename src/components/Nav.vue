<style scoped>
  .navDiv a.active{
    @apply bg-blue-500/5;
  }
  .navDiv a.active .title,
  .navDiv a.active .icon{
    @apply text-blue-500;
  }
</style>
<template>
  <div class="flex items-center gap-2 py-4 pl-6">
    <SvgIcon name='logo' class="text-blue-500 text-5xl"/>
    <div class="text-white text-3xl font-semibold">股票計算器</div>
  </div>
  <div class="h-[calc(100vh-80px-40px)] overflow-auto overscroll-none customScroll mr-1">
    <ul class="navDiv p-4 text-base flex flex-col gap-1.5">
      <li v-for="(item,index) in navList" :key="index">
        <template v-if="!item.children">
          <router-link active-class="active" :to="item.path" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
            <div class="flex items-center gap-3">
              <SvgIcon :name='item.meta.icon' class="icon text-2xl transition duration-500 text-gray-300"/>
              <div class="title transition-colors duration-500 text-gray-300">{{item.meta.title_ch}}</div>
            </div>
          </router-link>
        </template>
        <template v-else>
          <div @click="item.meta.show=!item.meta.show" class="flex items-center justify-between py-3 px-4 rounded-lg cursor-pointer" :class="item.meta.show?'bg-blue-500/5':'hover:bg-gray-200/5'">
            <div class="flex items-center gap-3">
              <SvgIcon :name='item.meta.icon' class="text-2xl transition duration-500" :class="item.meta.show?'text-blue-500':'text-gray-300'"/>
              <div class="transition-colors duration-500" :class="item.meta.show?'text-blue-500':'text-gray-300'">{{item.meta.title_ch}}</div>
            </div>
            <SvgIcon name='arrow' class="text-xs transition duration-500" :class="item.meta.show?'rotate-90 text-blue-500':'rotate-0 text-gray-300'"/>
          </div>
          <ul class="mt-1.5 text-sm text-gray-300 flex flex-col gap-1.5 overflow-hidden ease-in duration-300" :class="item.meta.show?'max-h-[500px]':'max-h-0'">
            <li v-for="(ch,index) in item.children" :key="index">
              <router-link active-class="active" :to="ch.path" class="flex items-center gap-4 py-2 px-8 rounded-lg hover:bg-gray-200/5">
                <div class="rounded-full w-1 h-1 bg-gray-400"></div>
                <div class="">{{ch.meta.title_ch}}</div>
              </router-link>
            </li>
          </ul>
        </template>
      </li>
      <!-- <li>
        <router-link active-class="active" to="/home" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='home' class="text-2xl"/>
            <div class="">首頁</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test2" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='token' class="text-2xl"/>
            <div class="">test2</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
        <ul class="mt-1.5 text-sm text-gray-300 flex flex-col gap-1.5">
          <li>
            <router-link active-class="active" to="/test1-1" class="flex items-center gap-4 py-2 px-8 rounded-lg hover:bg-gray-200/5">
              <div class="rounded-full w-1 h-1 bg-gray-400"></div>
              <div class="">test1-1</div>
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/test1-2" class="flex items-center gap-4 py-2 px-8 rounded-lg hover:bg-gray-200/5">
              <div class="rounded-full w-1 h-1 bg-gray-400"></div>
              <div class="">test1-2</div>
            </router-link>
          </li>
          <li>
            <router-link active-class="active" to="/test1-3" class="flex items-center gap-4 py-2 px-8 rounded-lg hover:bg-gray-200/5">
              <div class="rounded-full w-1 h-1 bg-gray-400"></div>
              <div class="">test1-3</div>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link active-class="active" to="/test3" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='timeline' class="text-2xl"/>
            <div class="">test3</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test4" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='selectall' class="text-2xl"/>
            <div class="">test4</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test5" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='browse' class="text-2xl"/>
            <div class="">test5</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test7" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='comfy' class="text-2xl"/>
            <div class="">test7</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test8" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='width' class="text-2xl"/>
            <div class="">test8</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test9" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='code' class="text-2xl"/>
            <div class="">test9</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li>
      <li>
        <router-link active-class="active" to="/test10" class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-200/5">
          <div class="flex items-center gap-3">
            <SvgIcon name='clock' class="text-2xl"/>
            <div class="">test10</div>
          </div>
          <SvgIcon name='arrow' class="text-xs"/>
        </router-link>
      </li> -->
    </ul>
  </div>
</template>
<script setup>
  import SvgIcon from '@/components/SvgIcon.vue'
  import constantRouter from '@/router/routes'
  import {defineProps,ref} from 'vue'
  //選單列表
  const navList = ref(constantRouter)
</script>
