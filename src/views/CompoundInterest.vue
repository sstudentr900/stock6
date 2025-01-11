<style></style>
<template>
  <!-- <div class="flex items-center justify-between mb-8">
    <div class="stockreturn text-xl text-gray-500">定期定額計算</div>
    <ul class="flex items-center justify-center gap-3 text-sm text-gray-500">
      <li>
        <router-link to="/" class="">首頁</router-link>
      </li>
      <li>
        <SvgIcon name="arrow" class="text-base text-gray-300"/>
      </li>
      <li>
        <router-link to="/compoundinterest" class="">定期定額計算</router-link>
      </li>
    </ul>
  </div> -->
  <div class="2xl:flex 2xl:gap-6 2xl:mb-6 max-2xl:mb4 flex-wrap">
    <div class="2xl:max-w-[380px] w-full">
      <div class="flex flex-col max-xl:gap-4 xl:gap-6  sticky top-[90px] bg-white">
        <SharedItem2 title="交易參數">
          <template v-slot:list>
            <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
              <SvgIcon name="settings" class="text-gray-500 text-lg"/>
            </div>
          </template>
          <template v-slot:content>
              <!-- <div class="flex flex-col gap-1">
              <div class="">交易類別</div>
              <div class="">
                <select name="" id="" class="w-full border border-solid border-gray-200 rounded-md py-2 px-3" v-model="state.category">
                  <option v-for="items in state.categorys" :key="items.id" :value="items.id">{{ items.name }}</option>
                </select>
              </div>
            </div> -->
            <div class="flex flex-col gap-1">
              <div class="">初期本金</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.principal">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">每月投資金額</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.buy">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">投資年數</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.year">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">年</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">年化</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.annualized">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">%</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1 mt-1">
              <button class="p-3 bg-blue-500 text-white rounded-md" @click="send">送出</button>
            </div>
          </template>
        </SharedItem2>
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
            <div class="max-xl:w-[940px]">
              <div class="w-full flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">年份</div>
                <!-- <div class="flex-1 flex justify-center px-3 py-2">月份</div> -->
                <div class="flex-1 flex justify-center px-3 py-2">每年投入金額</div>
                <div class="flex-1 flex justify-center px-3 py-2">本金</div>
                <div class="flex-1 flex justify-center px-3 py-2">收益金額</div>
                <div class="flex-1 flex justify-center px-3 py-2">總金額 </div>
                <div class="flex-1 flex justify-center px-3 py-2">報酬率</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200" v-for="(list,index) in state.lists" :key='index' :class="{'bg-blue-500/10':index==state.lists.length-1}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.id }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.yearbuy.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.investment.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.amount.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.sum.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.rateandreturn }}%</div>
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
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32">每年投入金額</div>
              <div class="flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2">每月投資金額 × 12</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32">本金</div>
              <div class="flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2">總金額 + 每年投入金額</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32">收益金額</div>
              <div class="flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2">總金額-本金</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32">總金額</div>
              <div class="flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2">本金*(1+年化)</div>
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
    principal:0,//初期本金
    buy:10000,//每月投資金額
    yearbuy:0,//每年投入金額
    year:20,//投資期數
    annualized:8,//年化
    rate:0,//年化
    lists:[],//列表
  })
  const creatList = (i)=>{
    const obj = {}

    obj.id = i+1
    console.log('年份',i)
    
    obj.yearbuy = state.yearbuy;//每年投入金額
    console.log('yearbuy 每年投入金額',obj.yearbuy)


    const principal = (state.principal)?state.principal:state.yearbuy
    obj.investment = (i>0)?state.lists[i-1].sum+state.yearbuy:state.principal+state.yearbuy; //本金
    console.log('investment 本金',obj.investment)


    //複利公式 A=P(1+r) 
    //A 是未來的金額
    //P 是本金（3000000）
    //r 是年利率（10% = 0.10）
    //n 是年數（5年） 0,1,2...20
    obj.sum = Math.round(obj.investment * (1 + state.rate));//總金額
    console.log('sum 總金額',obj.sum)

    //obj.amount = obj.sum-principal;//收益金額
    obj.amount = obj.sum-obj.investment;//收益金額
    console.log('amount 收益金額',obj.amount)


    let totalContributions = state.yearbuy?(state.yearbuy * obj.id)+state.principal:principal;
    const profit = obj.sum -totalContributions;
    console.log('profit 收益金額',profit,totalContributions)


    // let sum = (i>0)?state.lists[0].sum:obj.sum 
    // obj.profitandloss = obj.sum - sum
    // obj.rateandreturn = (obj.sum)?Number(((obj.profitandloss/obj.sum)*100).toFixed(2)):0;//報酬率
    // obj.rateandreturn = Math.round((obj.amount / principal) * 100);
    obj.rateandreturn = Math.round((profit / totalContributions) * 100);
    console.log('rateandreturn 報酬率',obj.rateandreturn)
  
    state.lists.push(obj)
  }
  const send = ()=>{
    state.lists = []
    state.yearbuy = state.buy*12
    state.rate = state.annualized/100;
    for (let i = 0; i < state.year; i++) {creatList(i)}
  }
  onMounted(()=>{
    send()
  }) 
</script>
