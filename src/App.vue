
<template>
  <div class="min-h-full">
    <div class="fixed top-0 w-[280px] h-full py-4 transition-all duration-300 z-[70] bg-gray-900" :class="isNavShow?'left-0':'-left-[280px]'">
      <Nav></Nav>
    </div>
    <div>
      <SvgIcon v-if="!isNavShow" name='hamburger' class="max-md:block hidden cursor-pointer text-3xl fixed top-[30px] right-[36px] z-[80] text-gray-500" @click="isNavShow=!isNavShow"/>
      <SvgIcon v-else name='add' class="max-md:block hidden cursor-pointer text-3xl fixed top-[30px] right-[36px] z-[80] text-white rotate-45" @click="isNavShow=!isNavShow"/>
      <div class="fixed top-0 left-0 w-full h-full bg-gray-900/60 z-[60] hidden" :class="isNavShow?'max-md:block':null"></div>
    </div>
    <div class="m-4 mt-0 transition-all duration-300" :class="isNavShow?'md:ml-[280px]':'md:ml-4'">
      <div class="sticky top-0 pt-4 bg-gray-900 z-50">
        <div class="flex items-center justify-between py-4 px-6 border-b border-solid	border-gray-200 text-gray-500 bg-white rounded-t-xl">
          <SvgIcon name='hamburger' class="max-md:hidden cursor-pointer text-3xl" @click="isNavShow=!isNavShow"/>
          <div class="max-md:block hidden text-xl text-gray-700 font-bold">{{routeTitle}}</div> 
          <div class="flex items-center justify-center gap-4">
            <SvgIcon name='zoom' class="max-md:hidden cursor-pointer text-2xl"/>
            <SvgIcon name='eart' class="max-md:hidden cursor-pointer text-2xl"/>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-b-xl">
        <div class="p-8 max-md:p-4">
          <router-view/>
        </div>
        <div class="flex items-center justify-end  border-t border-solid	border-gray-200 text-gray-500 text-sm md:py-4 md:px-6 max-md:py-2 max-md:px-4">
          <div>2024 ©</div>
          <!-- <div>Design & Develop by</div> -->
        </div>
      </div>
    </div>
  </div>
  <Svgs/>
  <!-- <svg class="text-blue-500 text-5xl">
    <use xlink:href="#icon-heart"></use>
  </svg> -->
</template>
<script setup>
  import Nav from '@/components/Nav.vue'
  import Svgs from '@/components/Svgs.vue'
  import SvgIcon from '@/components/SvgIcon.vue'
  import { useRoute } from 'vue-router';
  import {computed,reactive,ref,watch,watchEffect,onMounted,onUnmounted} from 'vue'
  // 使用 useRoute 钩子获取当前路由对象
  const route = useRoute();
  // 使用 computed 来计算当前路由的 name
  const routeTitle = computed(() => route.meta.title_ch);
  //選單顯示
  const isNavShow = ref(false)
  // 判断屏幕宽度是否大于或等于
  const isInnerWidth = () => {
    return window.innerWidth >= 768;
  };
  const checkSmBreakpoint = () => {
    isNavShow.value = isInnerWidth()
  };
  // 监听路由对象的变化
  watch(
    () => route.path,  // 监听路由路径
    (newPath, oldPath) => {
      //console.log('Route changed from', oldPath, 'to', newPath);
      //console.log('isInnerWidth',isInnerWidth())
      if(!isInnerWidth()){
        isNavShow.value = false
      }
    }
  );
  onMounted(() => {
    checkSmBreakpoint();  // 初始检查
    window.addEventListener('resize', checkSmBreakpoint);  // 监听窗口大小变化
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkSmBreakpoint);  // 清理事件监听器
  });
</script>
