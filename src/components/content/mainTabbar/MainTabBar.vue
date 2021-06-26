<template >
    <tab-bar>
      <!-- 给路径起别名 层级非常多的时候，非常不方便,通过给某些文件夹起别名的方式 在webpack.base.conf.js配置
          import能找到组件
          通过别名找相关图片元素src需要加~

      -->
      <tab-bar-item path="/home" activeColor="pink">
        <img  slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img  slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div  slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
         <img  slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
         <img  slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
         <img  slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
         <img  slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
         <img  slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
         <img  slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

//想要使用组件(先导入组件，再在components注册组件,后才能去模板中使用)
 import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>