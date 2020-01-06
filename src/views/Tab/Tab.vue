
<template>
  <div>
    <!-- <footer> -->
       <!-- v-model="active"  -->
      <van-tabbar v-model="active" class="nav-van" style="z-index:999">
        <van-tabbar-item icon="home-o"  to="/">首页</van-tabbar-item>

        <!-- <van-tabbar-item icon="apps-o" to="/Classify">分类</van-tabbar-item> -->
       
        <van-tabbar-item icon="cart-circle-o" to="/Want">吃什么</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/Cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/Mine">我的</van-tabbar-item>
      </van-tabbar>
    <!-- </footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },
  watch: {
    $route(to) {
      switch (to.fullPath) {
        case '/':
          this.active = 0;
          break;
        // case '/Classify':
        //   this.active = 1;
        //   break;
        case '/Want':
          this.active = 1;
          break;
        case '/Cart':
          this.active = 2;
          break;
        case '/Mine':
          this.active = 3;
          break;
        default:
          this.active = 0;
      }
    }
  }
};
</script>
<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>