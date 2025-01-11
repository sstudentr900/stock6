<style></style>
<template>
  <!-- <Title></Title> -->
  <div class="2xl:flex 2xl:gap-6 2xl:mb-6 flex-wrap">
    <div class="2xl:max-w-[380px] w-full">
      <div class="flex flex-col max-xl:gap-4 xl:gap-6 sticky top-[90px] bg-white">
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
                  <!-- <option disabled value="">请选择一个水果</option> -->
                  <option v-for="items in state.categorys" :key="items.id" :value="items.id">{{ items.name }}</option>
                  <!-- <option value="">股票</option>
                  <option value="">股票當沖</option>
                  <option value="">指數股票型基金（ETF）</option> -->
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">買入價格</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.buy">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">賣出價格</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.sell">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">交易股數</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.stocknumber">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">股</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1 mt-1">
              <button class="p-3 bg-blue-500 text-white rounded-md" @click="send">送出</button>
            </div>
          </template>
        </SharedItem2>
        <SharedItem title="證券交易稅">
          <template v-slot:list></template>
          <template v-slot:content>
            <!-- <div class="w-full flex items-center text-sm text-white bg-blue-500">
              <div class="flex w-60 px-6 py-2">交易類別</div>
              <div class="flex flex-1 px-6 py-2">稅率</div>
            </div> -->
            <div class="text-sm text-gray-500">
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex w-60 px-3 py-3">股票</div>
                <div class="flex flex-1 px-3 py-3 justify-end">0.3%</div>
              </div>
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex w-60 px-3 py-3">股票當沖</div>
                <div class="flex flex-1 px-3 py-3 justify-end">0.15%</div>
              </div>
              <div class="border-t border-solid border-gray-200 w-full flex items-center">
                <div class="flex w-60 px-3 py-3">指數股票型基金（ETF）</div>
                <div class="flex flex-1 px-3 py-3 justify-end">0.1%</div>
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
            <div class="max-xl:w-[940px]">
              <div class="w-full flex items-center text-sm text-white bg-blue-500">
                <!-- <div class="flex-1 flex justify-center px-3 py-2">買入價格</div> -->
                <div class="flex-1 flex justify-center px-3 py-2">賣出價格</div>
                <div class="flex-1 flex justify-center px-3 py-2">股票成本</div>
                <div class="flex-1 flex justify-center px-3 py-2">股票市值</div>
                <div class="flex-1 flex justify-center px-3 py-2">買入手續費</div>
                <div class="flex-1 flex justify-center px-3 py-2">賣出手續費</div>
                <div class="flex-1 flex justify-center px-3 py-2">證券交易稅</div>
                <div class="flex-1 flex justify-center px-3 py-2">投資成本</div>
                <div class="flex-1 flex justify-center px-3 py-2">損益金額</div>
                <div class="flex-1 flex justify-center px-3 py-2">報酬率</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200 w-full " v-for="(list,index) in state.lists" :key='index' :class="{'bg-blue-500/10':list.sell==state.sell}">
                <!-- <div class="flex-1 flex justify-center px-3 py-3">{{ list.buy.toLocaleString() }}</div> -->
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.sellString }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.stockcost.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.market.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.transactionfeebuy.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.transactionfeesell.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.transactiontax.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.cost.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.profitandloss.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.rateandreturn }}</div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem>
      <SharedItem title="欄位說明">
        <template v-slot:list></template>
        <template v-slot:content>
          <!-- <div class="w-full flex items-center text-sm text-white bg-blue-500">
            <div class="flex w-40 px-6 py-2">欄位</div>
            <div class="flex flex-1 px-6 py-2">計算公式</div>
          </div> -->
          <div class="text-sm text-gray-500">
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">股票成本</div>
              <div class="flex flex-1 px-3 py-3">買入價格 × 交易股數</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">股票市值</div>
              <div class="flex flex-1 px-3 py-3">賣出價格 × 交易股數</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">買入手續費</div>
              <div class="flex flex-1 px-3 py-3">max(股票成本 × 公定手續費費率 (1.425‰) × 手續費折扣, 最低手續費)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">賣出手續費</div>
              <div class="flex flex-1 px-3 py-3">max(股票市值 × 公定手續費費率 (1.425‰) × 手續費折扣, 最低手續費)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">證券交易稅</div>
              <div class="flex flex-1 px-3 py-3">股票市值 × 證券交易稅稅率 (股票賣出費用)</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">投資成本</div>
              <div class="flex flex-1 px-3 py-3">股票成本 + 買入手續費 + 賣出手續費 + 證券交易稅</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">損益金額</div>
              <div class="flex flex-1 px-3 py-3">股票市值 - 投資成本</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex px-3 py-3 md:w-40 max-md:w-24">報酬率</div>
              <div class="flex flex-1 px-3 py-3">損益金額 ÷ 投資成本</div>
            </div>
          </div>
        </template>
      </SharedItem>
    </div>
  </div>
</template>
<script setup>
  import Title from '@/components/Title.vue'
  import SharedItem from '@/components/SharedItem.vue'
  import SharedItem2 from '@/components/SharedItem2.vue'
  import SvgIcon from '@/components/SvgIcon.vue'
  import {onMounted,computed,reactive,ref,watch,watchEffect} from 'vue'
  const state = reactive({
    buy:100,//買入價格
    sell:200,//賣出價格
    category:1,//交易類別
    categorys:[
      {id:1,name:'股票',number:0.3},
      {id:2,name:'股票當沖',number:0.15},
      {id:3,name:'指數股票型基金（ETF）',number:0.1}
    ],
    stocknumber:1000,//交易股數
    discount:10,//手續費折扣 1折是10
    transactionfeemin:20,//最低手續費
    lists:[],//列表
    sellLength:9,//賣出數量
    sellStep: 0.50,//每次递减或递增的值
  })
  const creatList = (i)=>{
    const half = (state.sellLength-1)/2
    console.log('state.sell',state.sell,state.sellStep,(state.sell + (state.sellStep * (half - i))))
    const sellString = (state.sell + (state.sellStep * (half - i))).toFixed(2); // 计算值并保留两位小数
    console.log('sellString',sellString)
    const sell = parseFloat(sellString)
    console.log('sell',sell)
    const obj = {}
    obj.buy = state.buy
    obj.sell = sell
    obj.sellString = sellString
    obj.stockcost = state.buy*state.stocknumber
    console.log('stockcost 股票成本',obj.stockcost)
    obj.market = sell*state.stocknumber
    console.log('market 股票市值',obj.market)
    const fee = (1.425/100)*(state.discount / 100)
    obj.transactionfeebuy = Number(Math.ceil(Math.max(obj.stockcost*fee,state.transactionfeemin)).toFixed(2));
    console.log('transactionfeebuy 買入手續費',obj.transactionfeebuy)
    obj.transactionfeesell = Number(Math.ceil(Math.max(obj.market*fee,state.transactionfeemin)).toFixed(2));
    console.log('transactionfeesell 賣出手續費',obj.transactionfeesell)
    const tax = state.categorys.find(item=>item.id===state.category).number
    console.log('tax',tax)
    obj.transactiontax = Number(Math.ceil((tax/100)*obj.market));
    console.log('transactiontax 證券交易稅',obj.transactiontax)
    obj.cost = obj.stockcost+obj.transactionfeebuy+obj.transactionfeesell+obj.transactiontax
    console.log('cost 投資成本',obj.cost)
    obj.profitandloss = obj.market-obj.cost
    console.log('profitandloss 損益金額',obj.profitandloss)
    obj.rateandreturn = ((obj.profitandloss/obj.cost)*100).toFixed(2)+'%';
    console.log('rateandreturn 報酬率',obj.rateandreturn)
    state.lists.push(obj)
  }
  const send = ()=>{
    state.lists = []
    for (let i = 0; i < state.sellLength; i++) {creatList(i)}
  }
  onMounted(()=>{
    send()
  }) 
</script>
