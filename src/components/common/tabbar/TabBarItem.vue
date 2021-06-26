<template>
  
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" ><slot name="item-icon" ></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
    
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String ,//限制类型
    activeColor: {
      type: String,
      default: 'red'
    }
  },

  data(){
    return{
      // isActive: false
    }
  },
  computed: {
      isActive(){
        // home => item(/home) =true
        return this.$route.path.indexOf(this.path) !== -1
      },
      //通过计算属性来将活跃的组件 添加字体颜色
      activeStyle(){
        return this.isActive ? {color: this.activeColor}:{}
      }
  },
  methods: {
    itemClick(){
      // 点击进行路由跳转
      // 返回按钮无效
      this.$router.replace(this.path)//每个item有不同的path 点击谁就将路径获取过来
      // 返回按钮有效
      // this.$router.push()
      // console.log('itemClick');
      
    }
  }
}
</script>

<style scoped>
  

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  /* .active{
    color: red;
  } */
</style>