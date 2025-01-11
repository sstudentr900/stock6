<style></style>
<template>
  <!-- <div class="flex items-center justify-between mb-8">
    <div class="stockreturn text-xl text-gray-500">補充保費計算</div>
    <ul class="flex items-center justify-center gap-3 text-sm text-gray-500">
      <li>
        <router-link to="/" class="">首頁</router-link>
      </li>
      <li>
        <SvgIcon name="arrow" class="text-base text-gray-300"/>
      </li>
      <li>
        <router-link to="/supplementary" class="">補充保費計算</router-link>
      </li>
    </ul>
  </div> -->
  <div class="2xl:flex 2xl:gap-6 2xl:mb-6 flex-wrap">
    <div class="2xl:max-w-[380px] w-full">
      <div class="flex flex-col max-xl:gap-4 xl:gap-6 sticky top-[90px] bg-white z-10">
        <SharedItem2 title="交易參數">
          <template v-slot:list>
            <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
              <SvgIcon name="settings" class="text-gray-500 text-lg"/>
            </div>
          </template>
          <template v-slot:content>
            <div class="flex flex-col gap-1">
              <div class="">交易類別</div>
              <div class="">
                <select name="" id="" class="w-full border border-solid border-gray-200 rounded-md py-2 px-3" v-model="state.category">
                  <option v-for="items in state.categorys" :key="items.id" :value="items.id">{{ items.name }}</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">本次股利</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.dividend">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div v-if="state.category==2" class="flex flex-col gap-1">
              <div class="">股利所得占比(%)</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.income">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">%</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">目前股數 (1張1000股)</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.number">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">股</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1 mt-1">
              <button class="p-3 bg-blue-500 text-white rounded-md" @click="send">送出</button>
            </div>
          </template>
        </SharedItem2>
        <SharedItem title="稅率說明">
          <template v-slot:list></template>
          <template v-slot:content>
            <!-- <div class="w-full flex items-center text-sm text-sm text-white bg-blue-500">
              <div class="flex w-56 px-6 py-2">欄位</div>
              <div class="flex flex-1 px-6 py-2">說明</div>
            </div> -->
            <div class="text-sm text-gray-500">
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex md:w-56 px-3 py-3 max-md:py-2 max-md:w-30">二代健保費率</div>
                <div class="flex flex-1 px-3 py-3 justify-end">2.11%</div>
              </div>
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex md:w-56 px-3 py-3 max-md:py-2 max-md:w-30">單筆股利上限</div>
                <div class="flex flex-1 px-3 py-3 justify-end">2萬元</div>
              </div>
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex md:w-56 px-3 py-3 max-md:py-2 max-md:w-30">股利所得占比</div>
                <div class="flex flex-1 px-3 py-3 justify-end">
                  <a href="https://www.twse.com.tw/zh/ETFortune/announcementList?type=distribution" class="text-blue-500 underline underline-offset-2">查看連結</a>
                </div>
              </div>
            </div>
          </template>
        </SharedItem>
      </div>
    </div>
    <div class="flex-1 flex flex-col max-xl:gap-4 xl:gap-6 max-2xl:mt-4">
      <SharedItem title="試算結果">
        <template v-slot:list>
          <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
            <SvgIcon name="vert" class="text-gray-500 text-lg"/>
          </div>
        </template>
        <template v-slot:content>
          <div class="max-xl:overflow-x-auto">
            <div class="max-xl:w-[780px]">
              <div class="w-full flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">目前股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">股利總額</div>
                <div class="flex-1 flex justify-center px-3 py-2">補充保費 </div>
                <div class="flex-1 flex justify-center px-3 py-2">實際領到的股利</div>
                <div class="flex-1 flex justify-center px-3 py-2">超過幾股扣二代健保</div>
              </div>
              <div class="text-sm text-gray-500 border-t border-solid border-gray-200 w-full flex items-center" v-for="(list,index) in state.lists" :key='index' :class="{'bg-blue-500/10':list.number==state.number}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.number.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.totledividend.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.second.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividend.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.leaf.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem>
      <SharedItem title="欄位說明">
        <template v-slot:list></template>
        <template v-slot:content>
          <!-- <div class="w-full flex items-center text-sm text-white bg-blue-500">
            <div class="flex w-48 px-6 py-2">欄位</div>
            <div class="flex flex-1 px-6 py-2">計算公式</div>
          </div> -->
          <div class="text-sm text-gray-500">
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">股利總額</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0">本次股利 * 目前股數(超過2萬須繳二代健保補充保費)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">補充保費</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0">
                股票 : 股利總額(超過2萬) * 二代健保費率<br>
                ETF : (本次股利 * 股利所得占比) * 股利總額 * 二代健保費率
              </div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">實際領到的股利</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0">股利總額 - 補充保費</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">超過幾股扣二代健保</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0">
                股票 : 單筆股利上限 / 實際領到的股利<br>
                ETF : 單筆股利上限 / (本次股利 * 股利所得占比)
              </div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">股票範例解說</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0">以2330為例，本次配息2.75元，持有股數1000股，2.75×1,000=2750，沒有超過2萬，不會被課二代健保</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center max-sm:flex-col max-sm:items-start">
              <div class="flex md:w-48 px-6 py-3 max-md:px-3 max-md:py-2 max-md:w-40 max-md:shrink-0 max-sm:pb-0">ETF範例解說</div>
              <div class="flex flex-1 px-6 py-3 max-md:px-3 max-md:py-2 max-sm:pt-0"> 以00919為例，本次配息0.66元，股利所得占比為19.7%，20000/(0.66*0.197)=154000，154000股以上需要扣二代健保</div>
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
    second: 0.0211,//二代健保費率
    upperlimit: 20000,//單筆股利上限
    dividend: 0.66,//本次股利
    income: 19,//股利所得占比
    category: 2,//交易類別
    categorys:[
      {id:1,name:'股票'},
      {id:2,name:'ETF'},
    ],
    number: 1000,//目前股數
    lists:[],//列表
    listlength:9,
    listhalf: 0,//length 一半
    liststep: 0,//每次递减或递增的值
  })
  const creatList = (i)=>{
    const obj = {}

    obj.id = i+1
    console.log('id',i)

    obj.number = state.number + (state.liststep * (state.listhalf - i))
    console.log('number 目前股數',obj.number)

    obj.totledividend = state.dividend * obj.number
    console.log('totledividend 股利總額',obj.totledividend)

    if(state.category==1){
      obj.second = obj.totledividend>state.upperlimit?Math.round(obj.totledividend*state.second):0
      console.log('second 補充保費',obj.second)

      obj.dividend = obj.totledividend>state.upperlimit?obj.totledividend - obj.second:obj.totledividend
      console.log('dividend 實際領到的股利',obj.dividend)
      
      obj.leaf = Math.round(state.upperlimit/state.dividend)
      console.log('leaf 超過幾股扣二代健保',obj.leaf)
    }else if(state.category==2){
      const income = state.income/100
      obj.leaf = Math.round(state.upperlimit/(state.dividend*income))
      console.log('leaf 超過幾股扣二代健保',obj.leaf)

      obj.second = obj.number>obj.leaf?Math.round((state.dividend*income)*obj.number*state.second):0
      console.log('second 補充保費',obj.second)

      obj.dividend = obj.number>obj.leaf?obj.totledividend - obj.second:obj.totledividend
      console.log('dividend 實際領到的股利',obj.dividend)
    }
    
  
    state.lists.push(obj)
  }
  const send = ()=>{
    state.lists = []
    state.listhalf = (state.listlength-1)/2
    state.liststep = Math.round(state.number/6)
    for (let i = 0; i < state.listlength; i++) {creatList(i)}
  }
  onMounted(()=>{
    send()
  }) 
</script>
