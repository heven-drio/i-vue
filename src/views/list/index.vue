<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-cell-group>
      <van-cell title="安心蔬菜" />
    </van-cell-group>
    <van-row class="g-list">
      <van-col span="8">
        <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-col>
      <van-col span="16">
        <h5>清美盐卤五香干120g/袋</h5>
        <span>新老包装交替中 皖北风味~</span>
        <span class="new-price">￥3.53</span>
        <span class="vip-price">
          ￥3.19
          <van-tag type="success" style="float:left">会员价</van-tag>
        </span>
        <span></span>
      </van-col>
    </van-row>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.g-list {
  border-bottom: 1px solid black;
  padding-bottom: 15px;
}
span {
  display: block;
}
.new-price {
  padding-top: 25px;
  color: red;
}
.vip-price {
  color: #0f0;
  font-size: 12px;
}
</style>