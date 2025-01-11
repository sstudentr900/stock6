<style></style>
<template>
  <!-- <div class="flex items-center justify-between mb-8">
    <div class="stockreturn text-xl text-gray-500">平均價計算</div>
    <ul class="flex items-center justify-center gap-3 text-sm text-gray-500">
      <li>
        <router-link to="/" class="">首頁</router-link>
      </li>
      <li>
        <SvgIcon name="arrow" class="text-base text-gray-300"/>
      </li>
      <li>
        <router-link to="/averageprice" class="">平均價計算</router-link>
      </li>
    </ul>
  </div> -->
  <div class="2xl:flex 2xl:gap-6 2xl:mb-6 flex-wrap">
    <div class="flex flex-col 2xl:flex-1 w-full">
      <SharedItem2 title="交易參數">
        <template v-slot:list>
          <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
            <SvgIcon name="settings" class="text-gray-500 text-lg"/>
          </div>
        </template>
        <template v-slot:content>
          <div class="max-xl:overflow-x-auto">
            <div class="max-xl:min-w-[580px] w-full">
              <div class="w-full flex items-center text-white bg-blue-500">
                <div class="md:w-24 max-md:w-20 flex justify-center md:px-6 py-2 max-md:px-3">#</div>
                <div class="flex-1 flex justify-center md:px-6 py-2 max-md:px-3">購買價格(元)</div>
                <div class="flex-1 flex justify-center md:px-6 py-2 max-md:px-3">股數(n)</div>
                <div class="flex-1 flex justify-center md:px-6 py-2 max-md:px-3">小計(元)</div>
                <div class="md:w-32 max-md:w-24 flex justify-center md:px-6 py-2 max-md:px-3">動作</div>
              </div>
              <div class="w-full flex items-center border-t border-solid border-gray-200" v-for="(list,index) in state.lists" :key='index'>
                <div class="md:w-24 max-md:w-20 flex justify-center md:px-6 py-3 max-md:px-3">{{list.id}}</div>
                <div class="flex-1 flex justify-center md:px-6 py-3 max-md:px-3">
                  <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden max-w-40">
                    <input class="py-2 px-3 w-full" type="number" v-model="list.price">
                  </div>
                </div>
                <div class="flex-1 flex justify-center md:px-6 py-3 max-md:px-3">
                  <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden max-w-40">
                    <input class="py-2 px-3 w-full" type="number" v-model="list.number">
                  </div>
                </div>
                <div class="flex-1 flex justify-center md:px-6 py-3 max-md:px-3">{{list.totle.toLocaleString()}}</div>
                <div class="md:w-32 max-md:w-24 flex justify-end md:px-6 py-3 max-md:px-3">
                  <div class="flex gap-2 text-white text-xl">
                    <button v-if="index>3" class="p-1.5 bg-blue-500 rounded-full cursor-pointer" @click="add(list)">
                      <SvgIcon name="add" class=""/>
                    </button>
                    <button v-if="index>3" class="p-1.5 bg-red-400 rounded-full cursor-pointer" @click="delect(list)">
                      <SvgIcon name="delect" class=""/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem2>
    </div>
    <div class="flex flex-col 2xl:flex-1 w-full max-xl:gap-4 xl:gap-6 max-2xl:mt-4">
      <SharedItem title="試算結果">
        <template v-slot:list>
          <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
            <SvgIcon name="vert" class="text-gray-500 text-lg"/>
          </div>
        </template>
        <template v-slot:content>
          <div class="max-xl:overflow-x-auto">
            <div class="max-xl:min-w-[480px] w-full">
              <div class="w-full flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">總購買價格</div>
                <div class="flex-1 flex justify-center px-3 py-2">總股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">平均價格</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200 w-full" v-for="(list,index) in state.result" :key="index">
                <div class="flex-1 flex justify-center px-3 py-3">{{list.totle.toLocaleString()}}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{list.number}}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{list.price}}</div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem>
      <SharedItem title="欄位說明">
        <template v-slot:list></template>
        <template v-slot:content>
          <!-- <div class="w-full flex items-center text-sm text-white bg-blue-500 gap-4">
            <div class="flex w-32 px-3 py-2">欄位</div>
            <div class="flex flex-1 px-3 py-2">計算公式</div>
          </div> -->
          <div class="text-sm text-gray-500">
            <div class="border-t border-solid border-gray-200 w-full flex items-center gap-4">
              <div class="flex px-3 py-3 md:w-32 max-md:w-24">總購買價格</div>
              <div class="flex flex-1 px-3 py-3">Σ（股價*股數)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center gap-4">
              <div class="flex px-3 py-3 md:w-32 max-md:w-24">總股數</div>
              <div class="flex flex-1 px-3 py-3">Σ（股數)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center gap-4">
              <div class="flex px-3 py-3 md:w-32 max-md:w-24">平均價格</div>
              <div class="flex flex-1 px-3 py-3">總購買價格 / 總股數</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center gap-4">
              <div class="flex px-3 py-3 md:w-32 max-md:w-24">範例解說</div>
              <div class="flex flex-1 px-3 py-3">假設您目前以 100 元持有 100 股，而您想以 200 元買入 200 股。 在這種情況下，總購買價格為 100x100 + 200x200 = 50000。 將其除以購買總數得到 50000 / 300 ≈ 167。 因此股票均價約為167元。</div>
            </div>
          </div>
        </template>
      </SharedItem>
    </div>
  </div>
</template>
<script setup>
  import SharedItem from '@/components/SharedItem.vue'
  import SharedItem2 from '@/components/SharedItem2.vue'
  import SvgIcon from '@/components/SvgIcon.vue'
  import {onMounted,computed,reactive,ref,watch,watchEffect} from 'vue'
  const state = reactive({
    result:[
      {
        price:167,
        number:300,
        totle:50000,
      }
    ],
    lists:[
      {
        id:1,
        price:100,
        number:100,
        totle:10000,
      },
      {
        id:2,
        price:200,
        number:200,
        totle:40000,
      },
      {
        id:3,
        price:100,
        number:100,
        totle:10000,
      },
      {
        id:4,
        price:0,
        number:0,
        totle:0,
      },
      {
        id:5,
        price:0,
        number:0,
        totle:0,
      },
      // {
      //   id:6,
      //   price:0,
      //   number:0,
      //   totle:0,
      // }
    ],//列表
  })
  //監聽
  watch(
    () => state.lists,
    () => {
      console.log('watch')
      result()
    },
    { deep: true } // 深度監聽
  );
  //結果
  const result = ()=>{
    let price = 0
    let number = 0
    let totle = 0
    const obj = {}
    for (const item of state.lists) {
      item.totle = item.price * item.number;
      totle += item.totle 
      number += item.number 
    }
    console.log('lists', state.lists)
    obj.price = (totle / number)?(totle / number).toFixed(2):0; //平均價格
    console.log('平均價格',obj.price)
    obj.number = number; //總量數量
    console.log('總量數量',number)
    obj.totle = totle; //總金額
    console.log('總金額',totle)
    state.result = []
    state.result.push(obj)
  }
  const add = (li)=>{
    console.log('add',li)
    state.lists.push(li)
    state.lists = state.lists.map((item,index)=>{
      delete item.id 
      return {
        id: index + 1, // 將 id 修改為 1 和 2
        ...item
      }
    })
    result()
  }
  const delect = (li)=>{
    if(state.lists.length>5){
      state.lists = state.lists.filter(item=>item.id!=li.id) 
      console.log('delect',li,state.lists)
      result()
    }
  }
  onMounted(()=>{
    // send()
  })
</script>
