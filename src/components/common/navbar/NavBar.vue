<template>
<!-- 封装独立组件  -->
  <div class="nav-bar">
    <!-- 不直接对插槽进行布局，将包裹在div中 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 1px rgba(100,100,100,.08);
  }
   .left, .right{
    width: 60px;
    /* background-color: red; */
  }

  .center {
    flex: 1;
    /* background-color: blue; */
  }
</style>