import{r as v,o as g,c as p,a as e,b as i,w as o,d as m,_ as u,e as n,g as x,F as _,f as w,n as j,t as a}from"./index-0gmZdObG.js";import{_ as h,a as c}from"./SharedItem2-BfmqifaO.js";const L={class:"2xl:flex 2xl:gap-6 2xl:mb-6 max-2xl:mb4 flex-wrap"},V={class:"2xl:max-w-[380px] w-full"},k={class:"flex flex-col max-xl:gap-4 xl:gap-6 sticky top-[90px] bg-white"},z={class:"p-2 bg-gray-100 rounded-md cursor-pointer"},C={class:"flex flex-col gap-1"},S={class:""},M={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden"},U={class:"flex flex-col gap-1"},B={class:""},$={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden"},D={class:"flex flex-col gap-1"},F={class:""},N={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden"},E={class:"flex flex-col gap-1"},I={class:""},T={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden"},q={class:"flex-1 flex flex-col max-xl:gap-4 xl:gap-6 max-2xl:mt-4"},A={class:"p-2 bg-gray-100 rounded-md cursor-pointer"},G={class:"max-xl:overflow-x-auto"},H={class:"max-xl:w-[940px]"},J={class:"flex-1 flex justify-center px-3 py-3"},K={class:"flex-1 flex justify-center px-3 py-3"},O={class:"flex-1 flex justify-center px-3 py-3"},P={class:"flex-1 flex justify-center px-3 py-3"},Q={class:"flex-1 flex justify-center px-3 py-3"},R={class:"flex-1 flex justify-center px-3 py-3"},Z={__name:"CompoundInterest",setup(W){const t=v({principal:0,buy:1e4,yearbuy:0,year:20,annualized:8,rate:0,lists:[]}),b=r=>{const s={};s.id=r+1,console.log("年份",r),s.yearbuy=t.yearbuy,console.log("yearbuy 每年投入金額",s.yearbuy);const l=t.principal?t.principal:t.yearbuy;s.investment=r>0?t.lists[r-1].sum+t.yearbuy:t.principal+t.yearbuy,console.log("investment 本金",s.investment),s.sum=Math.round(s.investment*(1+t.rate)),console.log("sum 總金額",s.sum),s.amount=s.sum-s.investment,console.log("amount 收益金額",s.amount);let d=t.yearbuy?t.yearbuy*s.id+t.principal:l;const f=s.sum-d;console.log("profit 收益金額",f,d),s.rateandreturn=Math.round(f/d*100),console.log("rateandreturn 報酬率",s.rateandreturn),t.lists.push(s)},y=()=>{t.lists=[],t.yearbuy=t.buy*12,t.rate=t.annualized/100;for(let r=0;r<t.year;r++)b(r)};return g(()=>{y()}),(r,s)=>(m(),p("div",L,[e("div",V,[e("div",k,[i(h,{title:"交易參數"},{list:o(()=>[e("div",z,[i(u,{name:"settings",class:"text-gray-500 text-lg"})])]),content:o(()=>[e("div",C,[s[5]||(s[5]=e("div",{class:""},"初期本金",-1)),e("div",S,[e("div",M,[n(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":s[0]||(s[0]=l=>t.principal=l)},null,512),[[x,t.principal]]),s[4]||(s[4]=e("div",{class:"py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500"},"元",-1))])])]),e("div",U,[s[7]||(s[7]=e("div",{class:""},"每月投資金額",-1)),e("div",B,[e("div",$,[n(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":s[1]||(s[1]=l=>t.buy=l)},null,512),[[x,t.buy]]),s[6]||(s[6]=e("div",{class:"py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500"},"元",-1))])])]),e("div",D,[s[9]||(s[9]=e("div",{class:""},"投資年數",-1)),e("div",F,[e("div",N,[n(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":s[2]||(s[2]=l=>t.year=l)},null,512),[[x,t.year]]),s[8]||(s[8]=e("div",{class:"py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500"},"年",-1))])])]),e("div",E,[s[11]||(s[11]=e("div",{class:""},"年化",-1)),e("div",I,[e("div",T,[n(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":s[3]||(s[3]=l=>t.annualized=l)},null,512),[[x,t.annualized]]),s[10]||(s[10]=e("div",{class:"py-2 px-4 border-l border-solid border-gray-200 bg-gray-50 font-medium text-gray-500"},"%",-1))])])]),e("div",{class:"flex flex-col gap-1 mt-1"},[e("button",{class:"p-3 bg-blue-500 text-white rounded-md",onClick:y},"送出")])]),_:1})])]),e("div",q,[i(c,{title:"試算結果"},{list:o(()=>[e("div",A,[i(u,{name:"vert",class:"text-gray-500 text-lg"})])]),content:o(()=>[e("div",G,[e("div",H,[s[12]||(s[12]=e("div",{class:"w-full flex items-center text-sm text-white bg-blue-500"},[e("div",{class:"flex-1 flex justify-center px-3 py-2"},"年份"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"每年投入金額"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"本金"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"收益金額"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"總金額 "),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"報酬率")],-1)),(m(!0),p(_,null,w(t.lists,(l,d)=>(m(),p("div",{class:j(["flex items-center text-sm text-gray-500 border-t border-solid border-gray-200",{"bg-blue-500/10":d==t.lists.length-1}]),key:d},[e("div",J,a(l.id),1),e("div",K,a(l.yearbuy.toLocaleString()),1),e("div",O,a(l.investment.toLocaleString()),1),e("div",P,a(l.amount.toLocaleString()),1),e("div",Q,a(l.sum.toLocaleString()),1),e("div",R,a(l.rateandreturn)+"%",1)],2))),128))])])]),_:1}),i(c,{title:"欄位說明"},{list:o(()=>s[13]||(s[13]=[])),content:o(()=>s[14]||(s[14]=[e("div",{class:"text-sm text-gray-500"},[e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center"},[e("div",{class:"flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32"},"每年投入金額"),e("div",{class:"flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2"},"每月投資金額 × 12")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center"},[e("div",{class:"flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32"},"本金"),e("div",{class:"flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2"},"總金額 + 每年投入金額")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center"},[e("div",{class:"flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32"},"收益金額"),e("div",{class:"flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2"},"總金額-本金")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center"},[e("div",{class:"flex px-3 py-3 md:w-48 max-md:px-3 max-md:py-2 max-md:w-32"},"總金額"),e("div",{class:"flex flex-1 px-3 py-3 max-md:px-3 max-md:py-2"},"本金*(1+年化)")])],-1)])),_:1})])]))}};export{Z as default};