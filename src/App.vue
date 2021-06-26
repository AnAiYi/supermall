<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'


export default {
  name: 'App',
  components: {
    MainTabBar

  }
}
</script>

<style>
@import "assets/css/base.css";


  #tab-bar{
    display: flex;
    background: #F6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow:0px -3px 1px rgba(100,100,100,.1) ;
  }
</style>
