import { createRouter, createWebHistory } from 'vue-router'
import constantRouter from './routes'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({showSpinner: false}) //進度條圈圈關閉

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouter,
  //滾動行為
  scrollBehavior(to, from, savedPosition){
    // console.log('hash',to.hash)
    if (to.hash) {
      return{
        el: to.hash,
        behavior: 'smooth'
      }
    }else{
      return{
        left:0,
        top:0,
        behavior: 'smooth'
      }
    }
}
})
//全局前守衛 切換路由都會觸發
router.beforeEach(async (to,from,next)=>{
  // to 你要訪問的路由
  // from 你從拿個路由來的
  // next() 路由放行函數
  console.log('全局前守衛',to,from)

  //進度條開始
  nprogress.start() 

  //全放行
  next();
})
//全局後守衛
router.afterEach((to,from,next)=>{
  nprogress.done() //進度條結束
})
export default router
