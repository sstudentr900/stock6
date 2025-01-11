const customRoutes= [
  // {
  //   path: '/',
  //   name: 'homepage',
  //   component: () => import('../views/HomePage.vue'),
  //   meta:{
  //     title_ch: '首頁',
  //     icon: 'home',
  //   },
  // },
  {
    // path: '/stockreturn',
    // name: 'stockreturn',
    path: '/',
    name: 'homepage',
    component: () => import('../views/StockReturn.vue'),
    meta:{
      title_ch: '股票報酬計算',
      icon: 'timeline',
    },
  },
  {
    path: '/averageprice',
    name: 'averageprice',
    component: () => import('../views/AveragePrice.vue'),
    meta:{
      title_ch: '平均價計算',
      icon: 'selectall',
    },
  },
  {
    path: '/compoundinterest',
    name: 'compoundinterest',
    component: () => import('../views/CompoundInterest.vue'),
    meta:{
      title_ch: '定期定額計算',
      icon: 'comfy',
    },
  },
  {
    path: '/supplementary',
    name: 'supplementary',
    component: () => import('../views/Supplementary.vue'),
    meta:{
      title_ch: '補充保費計算',
      icon: 'code',
    },
  },
  {
    path: '/highdividendsell',
    name: 'highdividendsell',
    component: () => import('../views/HighDividendSell.vue'),
    meta:{
      title_ch: '股息迷思',
      icon: 'browse',
    },
  },
  {
    path: '/svgall',
    name: 'svgall',
    component: () => import('../views/SvgAll.vue'),
    meta:{
      title_ch: '圖示',
      icon: 'browse',
    },
  },
  // {
  //   path: '/quota',
  //   name: 'quota',
  //   component: () => import('../views/Quota.vue'),
  //   meta:{
  //     title_ch: '單筆和定額',
  //     icon: 'clock',
  //   },
  // },
  // {
  //   path: '/rebalance',
  //   name: 'rebalance',
  //   component: () => import('../views/Rebalance.vue'),
  //   meta:{
  //     title_ch: '單筆和再平衡',
  //     icon: 'token',
  //   },
  // },
  // {
  //   path: '/signallight',
  //   name: 'signallight',
  //   component: () => import('../views/SignaLlight.vue'),
  //   meta:{
  //     title_ch: '單筆和景氣信號燈',
  //     icon: 'start',
  //   },
  // },
  // {
  //   path: '/pension',
  //   name: 'pension',
  //   component: () => import('../views/Pension.vue'),
  //   meta:{
  //     question:'每年開銷/4%=每年開銷*25',
  //     title_ch: '退休金計算',
  //     icon: 'start',
  //   },
  // },
  // {
  //   path: '/comparison',
  //   name: 'comparison',
  //   component: () => import('../views/comparison.vue'),
  //   meta:{
  //     question:'https://www.youtube.com/watch?v=wN5IJdvsHhA',
  //     question2:'https://www.moneycome.in/tool/compound_interest_comparison?stkCodes=0050,00713',
  //     title_ch: '存股比較',
  //     icon: 'start',
  //   },
  // },
  // {
  //   path: '/test1',
  //   name: 'test1',
  //   meta:{
  //     title_ch: 'test1',
  //     icon: 'start',
  //     show:false,//children show
  //   },
  //   children:[ 
  //     {
  //       path: '/test1-1',
  //       name: 'test1-1',
  //       component: '',
  //       meta:{
  //         title_ch: 'test1-1',
  //       }
  //     },
  //     {
  //       path: '/test1-2',
  //       name: 'test1-2',
  //       component: '',
  //       meta:{
  //         title_ch: 'test1-2',
  //       }
  //     },
  //     {
  //       path: '/test1-3',
  //       name: 'test1-3',
  //       component: '',
  //       meta:{
  //         title_ch: 'test1-3',
  //       }
  //     }
  //   ] 
  // },
  // {
  //   path: '/test2',
  //   name: 'test2',
  //   meta:{
  //     title_ch: 'test2',
  //     icon: 'token',
  //     show:false,//children show
  //   },
  //   children:[ 
  //     {
  //       path: '/test2-1',
  //       name: 'test2-1',
  //       component: '',
  //       meta:{
  //         title_ch: 'test2-1',
  //       }
  //     },
  //     {
  //       path: '/test2-2',
  //       name: 'test2-2',
  //       component: '',
  //       meta:{
  //         title_ch: 'test2-2',
  //       }
  //     },
  //     {
  //       path: '/test2-3',
  //       name: 'test2-3',
  //       component: '',
  //       meta:{
  //         title_ch: 'test2-3',
  //       }
  //     }
  //   ] 
  // },
  // {
  //   path: '/test8',
  //   name: 'test8',
  //   meta:{
  //     title_ch: 'test8',
  //     icon: 'width',
  //     show:false,//children show
  //   },
  //   children:[ 
  //     {
  //       path: '/test8-1',
  //       name: 'test8-1',
  //       component: '',
  //       meta:{
  //         title_ch: 'test8-1',
  //       }
  //     },
  //     {
  //       path: '/test8-2',
  //       name: 'test8-2',
  //       component: '',
  //       meta:{
  //         title_ch: 'test8-2',
  //       }
  //     },
  //     {
  //       path: '/test8-3',
  //       name: 'test8-3',
  //       component: '',
  //       meta:{
  //         title_ch: 'test8-3',
  //       }
  //     }
  //   ] 
  // },
]
export default customRoutes
