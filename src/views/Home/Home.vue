<template>
  <div class="home">
    <van-search placeholder="请输入商品名称" class="search" show-action shape="round">
      <div slot="action">搜索</div>
    </van-search>

    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe-item-thumb">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" class="van-swipe-item-thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="4">
      <van-grid-item v-for="show in shows.show" :key="show">
        <img
          v-if="show.img"
          :src="show.img"
          width="80"
          height="100"
          class="show-img"
          @click="onclick"
        />
        <span>{{show.title}}</span>
      </van-grid-item>
    </van-grid>

    <van-cell-group>
      <van-cell title="限时抢购" value="更多">
        <van-count-down :time="time">
          <template class="T-item">
            <!-- v-slot="timeData"  -->
            <span class="item">10</span>
            <span class="item">10</span>
            <span class="item">10</span>
            <!-- <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>-->
          </template>
        </van-count-down>
      </van-cell>
    </van-cell-group>

    <van-tabs>
      <!-- v-model="active" -->
      <van-tab title="豆制品">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="show in shows.show" :key="show">
            <img
              v-if="show.img"
              :src="show.img"
              width="80"
              height="100"
              class="show-img"
              @click="onclickdetails"
            />
            <span>{{show.title}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="新鲜水果">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="value in 8" :key="value">
            <van-image
              width="80"
              height="100"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              @click="onclickdetails"
            />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="肉禽蛋">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="show in shows.show" :key="show">
            <img
              v-if="show.img"
              :src="show.img"
              width="80"
              height="100"
              class="show-img"
              @click="onclickdetails"
            />
            <span>{{show.title}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="海鲜水产">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="value in 8" :key="value">
            <van-image
              width="80"
              height="100"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              @click="onclickdetails"
            />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="乳品烘焙">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="show in shows.show" :key="show">
            <img
              v-if="show.img"
              :src="show.img"
              width="80"
              height="100"
              class="show-img"
              @click="onclickdetails"
            />
            <span>{{show.title}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="火锅来了">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="value in 8" :key="value">
            <van-image
              width="80"
              height="100"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              @click="onclickdetails"
            />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="营养早餐">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="show in shows.show" :key="show">
            <img
              v-if="show.img"
              :src="show.img"
              width="80"
              height="100"
              class="show-img"
              @click="onclickdetails"
            />
            <span>{{show.title}}</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="早餐营养">
        <van-grid>
          <!-- :column-num="4" -->
          <van-grid-item v-for="value in 8" :key="value">
            <van-image
              width="80"
              height="100"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
              @click="onclickdetails"
            />
            <span>悄悄是别离</span>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>

    <van-cell-group>
      <van-cell title="猜你喜欢" />
    </van-cell-group>

    <div class="vegetable-card" @click="onVegetableCard">
      <div class="cards" v-for="cards in vegetableCard.cards" :key="cards">
        <img v-if="cards.img" :src="cards.img" width="100%" height="100" />

        <span>{{cards.title}}</span>
        <van-tag plain type="success" class="van-tag-T">{{cards.acrive}}</van-tag>
        <br />
        <span class="home-price">{{cards.price}}</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>
      <!-- <div class="cards">
        <van-image width="100%" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>土豆（黄心）约500g</span>
        <van-tag plain type="success" class="van-tag-T">1元换购天天</van-tag>
        <br />
        <span class="home-price">￥2.7</span>
        <van-icon style="display:inline-block; float:right" name="cart" class="home-catr" />
      </div>-->
    </div>
    <!-- <Footer /> -->
    <footer></footer>
  </div>
</template>

<script>
// import Footer from "../../layout/Footer";
export default {
  data() {
    return {
      goods: {
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      shows: {
        show: [
          {
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "最近浴室新"
          },
          {
            img:
              "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
            title: "150元搞定"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
            title: "最近浴室新"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
            title: "150元搞定"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "最近浴室新"
          },
          {
            img:
              "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
            title: "150元搞定"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
            title: "最近浴室新"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
            title: "150元搞定"
          }
        ]
      },
      vegetableCard: {
        cards: [
          {
            id: 1,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 2,
            img:
              "https://image.watsons.com.cn//upload/b709ed72.jpg?w=552&h=414&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 3,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 4,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 5,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 6,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 7,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 8,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 9,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 10,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 11,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 12,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 13,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 14,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 15,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          },
          {
            id: 16,
            img:
              "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
            title: "土豆（黄心）约500g",
            acrive: "1元换购天天",
            price: "￥2.7"
          }
        ]
      }
    };
  },
  components: {
    // Footer
  },
  methods: {
    // onClickHome() {
    //   this.$router.push("home");
    // },
    // onClickClassify() {
    //   this.$router.push("classify");
    // },
    // onClickWant() {
    //   this.$router.push("want");
    // },
    // onClickCart() {
    //   this.$router.push("cart");
    // },
    // onClickMine() {
    //   this.$router.push("mine");
    // },
    onclick() {
      this.$router.push("classify");
    },
    onclickdetails() {
      this.$router.push("details");
    },
    onVegetableCard() {
      this.$router.push("details");
    }
  }
};
</script>

<style scoped>
footer {
  height: 100px;
}
.search {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.van-swipe-item-thumb {
  width: 100%;
  display: block;
  height: 300px;
}
.item {
  display: inline-block;

  width: 22px;
  margin-left: 5px;
  left: 50px;

  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
.T-item {
  left: 200px;
}
.vegetable-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 10px;
}
.cards {
  width: 12rem;

  border: 1px solid #fff;
  margin: 5px;
  border-radius: 5px;
}
.cards p {
  border: 0;
}
.van-tag-T {
  margin: 5px;
}
.home-price {
  margin: 0 10px;
}
.home-catr {
  margin-right: 20px;
}
</style>


