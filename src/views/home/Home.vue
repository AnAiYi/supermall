<template>
  <div id="home">
   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <home-swiper :banners="banners"></home-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
   <feature-view></feature-view>
   <tab-control :titles="['流行', '新款', '精选']"></tab-control>
   <ul>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
     <li>列表</li>
   </ul>
  </div>
</template>

<script>

// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

//子组件
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/RecommendView'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

//方法
import {getHomeMultidata,getHomeGoods} from 'network/home'//{}方式导入 由于没有用default导出







export default {
name:'Home',
components:{
  NavBar,
  HomeSwiper,
  Recommend,
  RecommendView,
  FeatureView,
  TabControl,
  getHomeGoods




},

data(){

  return {
    banners: [],
    recommends:[],
    // (tab-control 流行/新款、精选) 数据模型 将请求的数据传递保存过来
    goods:{
      'pop':{ page:0,list:[]},
      'news':{ page:0,list:[]},
      'sell':{ page:0,list:[]},
    }
  }
},
// 首页组件创建完成 就发送网络请求 -> 生命周期函数
created(){
  // 1.请求多个数据
  this.getHomeMultidata()
  // 2.请求商品数据

},
methods:{
  getHomeMultidata(){
      getHomeMultidata().then(res=>{
    console.log(res);
    // this.result = res;//将数据进行保存，即使函数执行完了，result不会被回收。
    // 垃圾回收；函数执行完， res变量被回收，对象没有引用指向了 ，就会被回收了。但是result指向这个对象，就没有被当做垃圾被回收。
    this.banners = res.data.banner.list;//将请求到的数据保存到组件中的data里面
    this.recommends = res.data.recommend.list;
  })
  },
  getHomeGoods(){
     getHomeGoods('pop',1).then(res=>{
    console.log(res);
  })
  }

}
}
</script>


<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
/* .tab-control{
  position: sticky;
  top: 44px;
} */
</style>