<style></style>
<template>
  <!-- <div class="flex items-center justify-between mb-8 max-sm:hidden">
    <div class="stockreturn text-xl text-gray-500">股息迷思計算</div>
    <ul class="flex items-center justify-center gap-3 text-sm text-gray-500">
      <li>
        <router-link to="/" class="">首頁</router-link>
      </li>
      <li>
        <SvgIcon name="arrow" class="text-base text-gray-300"/>
      </li>
      <li>
        <router-link to="/stockreturn" class="">股息迷思計算</router-link>
      </li>
    </ul>
  </div> -->
  <div class="2xl:flex 2xl:gap-6 2xl:mb-6 flex-wrap">
    <div class="2xl:max-w-[380px] w-full">
      <div class="flex flex-col gap-6 sticky top-[90px] bg-white">
        <SharedItem2 title="交易參數">
          <template v-slot:list>
            <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
              <SvgIcon name="settings" class="text-gray-500 text-lg"/>
            </div>
          </template>
          <template v-slot:content>
            <div class="flex flex-col gap-1">
              <div class="">目前股價</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.price">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">元</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">買入股數</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.number">
                  <div class="py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500">股</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <div class="">每年配息</div>
              <div class="">
                <div class="w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden">
                  <input class="py-2 px-3 w-full" type="number" v-model="state.dividend">
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
      <SharedItem title="試算除息再投入結果">
        <template v-slot:list></template>
        <template v-slot:content>
          <div class="max-xl:overflow-x-auto">
            <div class="max-xl:w-[940px]">
              <div class="flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">年份</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">隨機波動</div>
                <div class="flex-1 flex justify-center px-3 py-2">波動後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">股利</div>
                <div class="flex-1 flex justify-center px-3 py-2">除息後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">可領股息</div>
                <div class="flex-1 flex justify-center px-3 py-2">投入後股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">投入後市值</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200" v-for="(list,index) in state.lists" :key='index' :class="{'bg-blue-500/10':index==state.lists.length-1}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.year }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.price.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.number.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.fluctuation.toLocaleString()}}%</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.annualizedafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividend.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendreinvest.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.market.toLocaleString() }}</div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex items-center justify-between">
            <div class="text-xl text-gray-700 font-bold">試算不賣不除息結果</div>
            <!-- <div class="flex items-center justify-center gap-2">
              <div class="p-2 bg-gray-100 rounded-md cursor-pointer">
                <SvgIcon name="vert" class="text-gray-500 text-lg"/>
              </div>
            </div> -->
          </div>
          <div class="mt-4 max-xl:overflow-x-auto">
            <div class="max-xl:w-[800px]">
              <div class="w-full flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">年份</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">隨機波動</div>
                <div class="flex-1 flex justify-center px-3 py-2">波動後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前市值</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200" v-for="(list,index) in state.lists2" :key='index' :class="{'bg-blue-500/10':index==state.lists2.length-1}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.year }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.price.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.number.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.fluctuation.toLocaleString()}}%</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.annualizedafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.market.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem>
      <SharedItem title="試算除息不再投入結果">
        <template v-slot:list></template>
        <template v-slot:content>
          <div class="max-xl:overflow-x-auto">
            <div class="max-xl:w-[980px]">
              <div class="flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">年份</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">隨機波動</div>
                <div class="flex-1 flex justify-center px-3 py-2">波動後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">股利</div>
                <div class="flex-1 flex justify-center px-3 py-2">除息後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">可領股息</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前市值</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200" v-for="(list,index) in state.lists3" :key='index' :class="{'bg-blue-500/10':index==state.lists3.length-1}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.year }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.price.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.number.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.fluctuation.toLocaleString()}}%</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.annualizedafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividend.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.market.toLocaleString() }}</div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex items-center justify-between">
            <div class="text-xl text-gray-700 font-bold">試算自行賣股不再投入結果</div>
          </div>
          <div class="mt-4 max-xl:overflow-x-auto">
            <div class="max-xl:w-[980px]">
              <div class="flex items-center text-sm text-white bg-blue-500">
                <div class="flex-1 flex justify-center px-3 py-2">年份</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">隨機波動</div>
                <div class="flex-1 flex justify-center px-3 py-2">波動後股價</div>
                <div class="flex-1 flex justify-center px-3 py-2">自行賣股獲利</div>
                <div class="flex-1 flex justify-center px-3 py-2">需賣出股數</div>
                <div class="flex-1 flex justify-center px-3 py-2">剩餘股票</div>
                <div class="flex-1 flex justify-center px-3 py-2">目前市值</div>
              </div>
              <div class="flex items-center text-sm text-gray-500 border-t border-solid border-gray-200 " v-for="(list,index) in state.lists4" :key='index' :class="{'bg-blue-500/10':index==state.lists4.length-1}">
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.year }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.price.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.number.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.fluctuation.toLocaleString()}}%</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.annualizedafterprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.dividendprice.toLocaleString() }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.sellnumber }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.remainingnumber }}</div>
                <div class="flex-1 flex justify-center px-3 py-3">{{ list.market.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </template>
      </SharedItem>
      <SharedItem title="股息迷思">
        <template v-slot:list></template>
        <template v-slot:content>
          <!-- <div class="w-full flex items-center text-sm text-white bg-blue-500">
            <div class="flex w-40 px-6 py-2">欄位</div>
            <div class="flex flex-1 px-6 py-2">計算公式</div>
          </div> -->
          <div class="text-sm text-gray-500">
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex md:px-6 md:py-3 md:w-40 max-md:px-3 max-md:py-2 max-md:w-20">有無配息</div>
              <div class="flex flex-1 md:px-6 md:py-3 max-md:px-3 max-md:py-2">從最終市值來看，有無配息，並沒有改變最終報酬。</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex md:px-6 md:py-3 md:w-40 max-md:px-3 max-md:py-2 max-md:w-20">每年提領</div>
              <div class="flex flex-1 md:px-6 md:py-3 max-md:px-3 max-md:py-2">從每年提領生活費來看，領股息跟自己變賣股票，也沒有改變最終報酬。</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex md:px-6 md:py-3 md:w-40 max-md:px-3 max-md:py-2 max-md:w-20">股息增加</div>
              <div class="flex flex-1 md:px-6 md:py-3 max-md:px-3 max-md:py-2">即使用股息增加很多股數，也不影響最終報酬</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex md:px-6 md:py-3 md:w-40 max-md:px-3 max-md:py-2 max-md:w-20">零成本</div>
              <div class="flex flex-1 md:px-6 md:py-3 max-md:px-3 max-md:py-2">現在成本殖利率還高達幾十趴，幹麻賣？雖然很阿Ｑ，但你只看成本的精神，讓他們長期持有一檔股票數年，甚至十年以上。</div>
            </div>
            <div class="border-t border-solid border-gray-200 w-full flex items-center">
              <div class="flex md:px-6 md:py-3 md:w-40 max-md:px-3 max-md:py-2 max-md:w-20">參考連結</div>
              <div class="flex flex-1 md:px-6 md:py-3 max-md:px-3 max-md:py-2">
                <a href="https://www.letf.com.tw/%E6%8F%AD%E9%96%8B0056%E8%82%A1%E6%81%AF%E8%BF%B7%E6%80%9D%EF%BC%9A%E8%82%A1%E6%81%AF%E4%B8%8D%E6%98%AF%E6%8A%95%E8%B3%87%E7%9A%84%E5%85%A8%E9%83%A8/" class="text-blue-500 underline underline-offset-2">揭開0056股息迷思</a>
              </div>
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
    price: 100,//目前股價
    number:1000,//買入股數
    annualized:10,//年化
    dividend:5,//配息
    totleyear:10,//統計10年
    lists:[],//列表
    lists2:[],//列表
    lists3:[],//列表
    lists4:[],//列表
    fluctuation:[
      10,5,-20,15,20,5,-15,20,10,5
    ],//每年波動
    fluctuation2:[
      10,5,-20,15,20,5,-15,20,10,5
    ],//每年波動
  })
  const creatList = (i)=>{
    const obj = {}
    obj.year = i+1
    console.log('year 年',obj.year)
    obj.price = i==0?state.price:Number((state.lists[i-1]?.dividendafterprice).toFixed(2))
    console.log('price 目前股價',obj.price)
    obj.number = i==0?state.number:state.lists[i-1]?.dividendreinvest
    console.log('number 目前股數',obj.number)
    // obj.annualizedafterprice = obj.price*(1+state.annualized/100)
    // console.log('annualizedafterprice 年化後股價',obj.annualizedafterprice)
    obj.fluctuation = state.fluctuation[i]
    console.log('fluctuation 波動',obj.fluctuation)
    obj.annualizedafterprice = Number((obj.price*(1+obj.fluctuation/100)).toFixed(2))
    console.log('annualizedafterprice 波動後股價',obj.annualizedafterprice)
    obj.dividend = Number((obj.annualizedafterprice * (state.dividend/100)).toFixed(2))
    console.log('dividend 股利',obj.dividend)
    obj.dividendafterprice = Number((obj.annualizedafterprice - obj.dividend).toFixed(2))
    console.log('dividendafterprice 除息後股價',obj.dividendafterprice)
    obj.dividendprice = Math.round(obj.number * obj.dividend)
    console.log('dividendprice 可領股息',obj.dividendprice)
    obj.dividendreinvest = obj.number+Math.round(obj.dividendprice/obj.dividendafterprice)
    console.log('dividendreinvest 股息投入後股數',obj.dividendreinvest)
    obj.market = Math.round(obj.dividendreinvest*obj.dividendafterprice)
    console.log('market 股息投入後市值',obj.market)
    state.lists.push(obj)

    const obj2 = {}
    obj2.year = obj.year
    console.log('year2 年',obj2.year)
    obj2.price = i==0?state.price:Number((state.lists2[i-1]?.annualizedafterprice).toFixed(2))
    console.log('price 目前股價',obj2.price)
    obj2.number = state.number
    console.log('number2 目前股數',obj2.number)
    // obj2.annualizedafterprice = obj2.price*(1+state.annualized/100)
    // console.log('annualizedafterprice 年化後股價',obj2.annualizedafterprice)
    obj2.fluctuation = (state.fluctuation2[i]).toFixed(2)
    console.log('fluctuation2 波動',obj2.fluctuation)
    obj2.annualizedafterprice = Number((obj2.price*(1+obj2.fluctuation/100)).toFixed(2))
    console.log('annualizedafterprice2 波動後股價',obj2.annualizedafterprice)
    obj2.market = Math.round(state.number*obj2.annualizedafterprice)
    console.log('market2 目前市值',obj.market)
    state.lists2.push(obj2)

    const obj3 = {}
    obj3.year = obj.year
    console.log('year3 年',obj3.year)
    obj3.price = i==0?state.price:Number((state.lists3[i-1]?.dividendafterprice).toFixed(2))
    console.log('price3 目前股價',obj3.price)
    obj3.number = state.number
    console.log('number3 目前股數',obj3.number)
    obj3.fluctuation = state.fluctuation[i]
    console.log('fluctuation3 波動',obj3.fluctuation)
    obj3.annualizedafterprice = Number((obj3.price*(1+obj3.fluctuation/100)).toFixed(2))
    console.log('annualizedafterprice3 波動後股價',obj3.annualizedafterprice)
    obj3.dividend = Number((obj3.annualizedafterprice * (state.dividend/100)).toFixed(2))
    console.log('dividend3 股利',obj3.dividend)
    obj3.dividendafterprice = Number((obj3.annualizedafterprice - obj3.dividend).toFixed(2))
    console.log('dividendafterprice3 除息後股價',obj3.dividendafterprice)
    obj3.dividendprice = Math.round(obj3.number * obj3.dividend)
    console.log('dividendprice3 可領股息',obj3.dividendprice)
    obj3.market = Math.round(obj3.number*obj3.dividendafterprice)
    console.log('market3 目前市值',obj3.market)
    state.lists3.push(obj3)

    const obj4 = {}
    obj4.year = obj.year
    console.log('year4 年',obj4.year)
    obj4.price = i==0?state.price:Number((state.lists4[i-1]?.annualizedafterprice).toFixed(2))
    console.log('price4 目前股價',obj4.price)
    obj4.number = i==0?state.number:state.lists4[i-1]?.remainingnumber
    console.log('number4 目前股數',obj4.number)
    obj4.fluctuation = state.fluctuation[i]
    console.log('fluctuation4 波動',obj4.fluctuation)
    obj4.annualizedafterprice = Number((obj4.price*(1+obj4.fluctuation/100)).toFixed(2))
    console.log('annualizedafterprice4 波動後股價',obj4.annualizedafterprice)
    // obj4.dividendprice = Number((state.price*state.number*(state.dividend/100)).toFixed(2))
    obj4.dividendprice = obj3.dividendprice
    console.log('dividendprice4 自行賣股獲利',obj4.dividendprice)

    obj4.sellnumber = Math.round(obj4.dividendprice/obj4.annualizedafterprice)
    console.log('sellnumber4 需賣出股數',obj4.sellnumber)
    obj4.remainingnumber = obj4.number - obj4.sellnumber
    console.log('remainingnumber4 剩餘股票',obj4.remainingnumber)
    obj4.market = Math.round(obj4.remainingnumber*obj4.annualizedafterprice)
    console.log('market4 目前市值',obj4.market)
    state.lists4.push(obj4)
  }
  const send = ()=>{
    state.lists = []
    state.lists2 = []
    state.lists3 = []
    state.lists4 = []
    for (let i = 0; i < state.totleyear; i++) {creatList(i)}
  }
  onMounted(()=>{
    send()
  }) 
</script>
