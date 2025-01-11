import{r as h,h as j,o as k,c as r,a as e,b as i,w as a,d as x,_ as m,F as f,f as u,t as n,e as y,g as _,i as v}from"./index-CP0HhtO9.js";import{_ as V,a as b}from"./SharedItem2-BMjocvJM.js";const C={class:"2xl:flex 2xl:gap-6 2xl:mb-6 flex-wrap"},$={class:"flex flex-col 2xl:flex-1 w-full"},U={class:"p-2 bg-gray-100 rounded-md cursor-pointer"},B={class:"max-xl:overflow-x-auto"},F={class:"max-xl:min-w-[580px] w-full"},L={class:"md:w-24 max-md:w-20 flex justify-center md:px-6 py-3 max-md:px-3"},N={class:"flex-1 flex justify-center md:px-6 py-3 max-md:px-3"},S={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden max-w-40"},D=["onUpdate:modelValue"],M={class:"flex-1 flex justify-center md:px-6 py-3 max-md:px-3"},A={class:"w-full flex items-center justify-center border border-solid border-gray-200 rounded-md overflow-hidden max-w-40"},E=["onUpdate:modelValue"],P={class:"flex-1 flex justify-center md:px-6 py-3 max-md:px-3"},T={class:"md:w-32 max-md:w-24 flex justify-end md:px-6 py-3 max-md:px-3"},q={class:"flex gap-2 text-white text-xl"},z=["onClick"],G=["onClick"],H={class:"flex flex-col 2xl:flex-1 w-full max-xl:gap-4 xl:gap-6 max-2xl:mt-4"},I={class:"p-2 bg-gray-100 rounded-md cursor-pointer"},J={class:"max-xl:overflow-x-auto"},K={class:"max-xl:min-w-[480px] w-full"},O={class:"flex-1 flex justify-center px-3 py-3"},Q={class:"flex-1 flex justify-center px-3 py-3"},R={class:"flex-1 flex justify-center px-3 py-3"},Z={__name:"AveragePrice",setup(W){const l=h({result:[{price:167,number:300,totle:5e4}],lists:[{id:1,price:100,number:100,totle:1e4},{id:2,price:200,number:200,totle:4e4},{id:3,price:100,number:100,totle:1e4},{id:4,price:0,number:0,totle:0},{id:5,price:0,number:0,totle:0}]});j(()=>l.lists,()=>{console.log("watch"),p()},{deep:!0});const p=()=>{let d=0,t=0;const s={};for(const o of l.lists)o.totle=o.price*o.number,t+=o.totle,d+=o.number;console.log("lists",l.lists),s.price=t/d?(t/d).toFixed(2):0,console.log("平均價格",s.price),s.number=d,console.log("總量數量",d),s.totle=t,console.log("總金額",t),l.result=[],l.result.push(s)},w=d=>{console.log("add",d),l.lists.push(d),l.lists=l.lists.map((t,s)=>(delete t.id,{id:s+1,...t})),p()},g=d=>{l.lists.length>5&&(l.lists=l.lists.filter(t=>t.id!=d.id),console.log("delect",d,l.lists),p())};return k(()=>{}),(d,t)=>(x(),r("div",C,[e("div",$,[i(V,{title:"交易參數"},{list:a(()=>[e("div",U,[i(m,{name:"settings",class:"text-gray-500 text-lg"})])]),content:a(()=>[e("div",B,[e("div",F,[t[0]||(t[0]=e("div",{class:"w-full flex items-center text-white bg-blue-500"},[e("div",{class:"md:w-24 max-md:w-20 flex justify-center md:px-6 py-2 max-md:px-3"},"#"),e("div",{class:"flex-1 flex justify-center md:px-6 py-2 max-md:px-3"},"購買價格(元)"),e("div",{class:"flex-1 flex justify-center md:px-6 py-2 max-md:px-3"},"股數(n)"),e("div",{class:"flex-1 flex justify-center md:px-6 py-2 max-md:px-3"},"小計(元)"),e("div",{class:"md:w-32 max-md:w-24 flex justify-center md:px-6 py-2 max-md:px-3"},"動作")],-1)),(x(!0),r(f,null,u(l.lists,(s,o)=>(x(),r("div",{class:"w-full flex items-center border-t border-solid border-gray-200",key:o},[e("div",L,n(s.id),1),e("div",N,[e("div",S,[y(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":c=>s.price=c},null,8,D),[[_,s.price]])])]),e("div",M,[e("div",A,[y(e("input",{class:"py-2 px-3 w-full",type:"number","onUpdate:modelValue":c=>s.number=c},null,8,E),[[_,s.number]])])]),e("div",P,n(s.totle.toLocaleString()),1),e("div",T,[e("div",q,[o>3?(x(),r("button",{key:0,class:"p-1.5 bg-blue-500 rounded-full cursor-pointer",onClick:c=>w(s)},[i(m,{name:"add",class:""})],8,z)):v("",!0),o>3?(x(),r("button",{key:1,class:"p-1.5 bg-red-400 rounded-full cursor-pointer",onClick:c=>g(s)},[i(m,{name:"delect",class:""})],8,G)):v("",!0)])])]))),128))])])]),_:1})]),e("div",H,[i(b,{title:"試算結果"},{list:a(()=>[e("div",I,[i(m,{name:"vert",class:"text-gray-500 text-lg"})])]),content:a(()=>[e("div",J,[e("div",K,[t[1]||(t[1]=e("div",{class:"w-full flex items-center text-sm text-white bg-blue-500"},[e("div",{class:"flex-1 flex justify-center px-3 py-2"},"總購買價格"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"總股數"),e("div",{class:"flex-1 flex justify-center px-3 py-2"},"平均價格")],-1)),(x(!0),r(f,null,u(l.result,(s,o)=>(x(),r("div",{class:"flex items-center text-sm text-gray-500 border-t border-solid border-gray-200 w-full",key:o},[e("div",O,n(s.totle.toLocaleString()),1),e("div",Q,n(s.number),1),e("div",R,n(s.price),1)]))),128))])])]),_:1}),i(b,{title:"欄位說明"},{list:a(()=>t[2]||(t[2]=[])),content:a(()=>t[3]||(t[3]=[e("div",{class:"text-sm text-gray-500"},[e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center gap-4"},[e("div",{class:"flex px-3 py-3 md:w-32 max-md:w-24"},"總購買價格"),e("div",{class:"flex flex-1 px-3 py-3"},"Σ（股價*股數)")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center gap-4"},[e("div",{class:"flex px-3 py-3 md:w-32 max-md:w-24"},"總股數"),e("div",{class:"flex flex-1 px-3 py-3"},"Σ（股數)")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center gap-4"},[e("div",{class:"flex px-3 py-3 md:w-32 max-md:w-24"},"平均價格"),e("div",{class:"flex flex-1 px-3 py-3"},"總購買價格 / 總股數")]),e("div",{class:"border-t border-solid border-gray-200 w-full flex items-center gap-4"},[e("div",{class:"flex px-3 py-3 md:w-32 max-md:w-24"},"範例解說"),e("div",{class:"flex flex-1 px-3 py-3"},"假設您目前以 100 元持有 100 股，而您想以 200 元買入 200 股。 在這種情況下，總購買價格為 100x100 + 200x200 = 50000。 將其除以購買總數得到 50000 / 300 ≈ 167。 因此股票均價約為167元。")])],-1)])),_:1})])]))}};export{Z as default};
