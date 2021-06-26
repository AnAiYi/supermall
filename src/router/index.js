import Vue from 'vue'
import VueRouter from 'vue-router'

// 对文件组件进行懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
// 安装插件
Vue.use(VueRouter)
// 创建router
const routes = [
  //配置映射关系
  {
    path:'',
    redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/cart',
      component: Cart
    }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

// 导出（去main.js进行挂载）
export default router