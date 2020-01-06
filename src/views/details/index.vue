<template>
  <div class="details" @click="onback">
    <van-nav-bar title="商品详情" left-text="返回" >
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group class="sm">
      <van-cell>
        <span class="title">贱人就是矫情</span>
        <span class="evaluate">开车两行泪，情人一滴酒</span>
        <span class="price">￥77.77</span>
      </van-cell>
      <van-cell value="最快时间20:30-21:00送达" icon="clock-o" />
    </van-cell-group>

    <van-tabs class="code">
      <van-tab title="推荐做法">
        <van-grid>
          <van-grid-item>
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄是别离</span>
          </van-grid-item>
          <van-grid-item>
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>夏虫的寂静</span>
          </van-grid-item>
          <van-grid-item>
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>沉默是今晚</span>
          </van-grid-item>
          <van-grid-item>
            <van-image width="80" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span>悄悄的我走</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>

    <van-cell-group class="reade">
      <van-cell value="规格" />
      <van-cell value="净含量: 250g" />
      <van-cell value="保存条件: 冷藏" />
      <van-cell value="保质期: 30天" />
    </van-cell-group>
  </div>
</template>


<script>
export default {
  data() {
    return {
      goods: {
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  methods:{
    onback() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped>
.details img {
  width: 100%;
  display: block;
  height: 303px;
}
span {
  display: block;
}
.evaluate {
  font-size: 12px;
}
.price {
  color: red;
}
.reade {
  margin-top: 10px;
}
.code {
  margin-top: 10px;
}
</style>

