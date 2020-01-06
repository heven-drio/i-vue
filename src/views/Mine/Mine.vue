<template>
  <div>
    <van-nav-bar title="个人主页" left-text="返回" >
    </van-nav-bar>
    <van-cell is-link>
      <van-image width="100" height="100" style="float:left" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span class="name">叮咚</span>
      <span class="describe">贱人就是矫情</span>
      <span class="tel">手机号:</span>
    </van-cell>
    <van-cell title="我的优惠券" icon="coupon-o" value="5张" is-link />
    <van-cell title="我的收货地址" icon="location-o" is-link />
    <van-cell title="我的绿卡" icon="gem-o" is-link/>
    <van-cell title="联系客服" icon="phone-o" value="客服时间 07:00-22:00" is-link />
    <van-cell title="意见反馈" icon="comment-o"  is-link />
    <van-cell title="我的优惠券" icon="coupon-o" value="5张" is-link />
    <van-cell title="叮咚买菜" icon="medal" value="下载APP体验更加" is-link />

  
  </div>
</template>

<script>
export default {
  
  methods:{
    onback() {
      this.$router.push("home");
    },
}};
</script>

<style scoped>
span{
  display: block;
}



</style>