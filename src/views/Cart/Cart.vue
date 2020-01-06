
<template>
  <div class="cart">
     
    <van-nav-bar title="购物车" left-text="返回" >
    </van-nav-bar>
    <input type="checkbox" @change="handleChange" v-model="isAllChecked" />
    <ul>
      <li v-for="data in datalist" :key="data.id" class="cart-s">
        <input type="checkbox" v-model="checkgroup" :value="data" @change="handleItemChange" class="checkbox"/>
      <!-- {{ data}} -->
         <img v-if="data.img" :src="data.img" width="100" height="100" class="img"/>
         <span class="name">{{data.name}}</span>
         <span class="price">{{data.price}}元</span>
         <span class="btn">

        <button @click="data.number++">+</button>
        <span>
          <input type="number" v-model="data.number"  class="num"  />
        </span>
        <button @click="handleDelClick(data)">-</button>
         </span>
      </li>
    </ul>
    <p class="sum">总计:{{getSum()}}</p>
    <Footer/> 
  </div>
</template>

<script>
// import Footer from '../../layout/Footer'
export default {
  data() {
    return {
      checkgroup: [],
      isAllChecked: false,
      datalist: [
        {
          name: "最近浴室新",
          price: 10,
          number: 1,
          id: "1",
          img: "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
        },{
          name: "最近浴室新",
          price: 10,
          number: 1,
          id: "1",
          img: "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
        },{
          name: "最近浴室新",
          price: 10,
          number: 1,
          id: "1",
          img: "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
        },{
          name: "最近浴室新",
          price: 10,
          number: 1,
          id: "1",
          img: "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
        },{
          name: "最近浴室新",
          price: 10,
          number: 1,
          id: "1",
          img: "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
        },
        // { name: "商品2", price: 20, number: 1, id: "2" },
        // { name: "商品3", price: 30, number: 1, id: "3" }
      ]
    };
  },
   components:{
    // Footer
  },
  methods: {
    handleChange() {
    //   console.log("handleChange");
    },
    getSum() {
      //购物车勾选数据累加
      var sum = 0;
      for (var i in this.checkgroup) {
        sum += this.checkgroup[i].number * this.checkgroup[i].price;
      }

      return sum;
    },
    handleDelClick(data) {
      data.number--;
      if (data.number === 0) {
        data.number = 1;
      }
    },
    // handleChange() {
    //   console.log("handleChange", this.isAllChecked);
    // },
    handleItemChange() {
      if (this.checkgroup.length === this.datalist.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
    }
  }
};
</script>

<style scoped>
.img{
  float: left;
}
.cart-s{
   
    margin: 10px 0;
	margin-left: 20px;
}
.num{
    width: 50px;
}
.sum{
    float: right;
}
.name{
 margin-left: 20px;
 display: inline-block;
 margin: 10px 0;
}
.btn{
  display: block;
  margin: 11px 0
}
.price{
  display: block;
}
.btn{
	margin-right: 10px;
}
</style>










