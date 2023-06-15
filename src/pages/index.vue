<template>
  <NuxtLayout name="header" />
  <main>
    <Swiper
      :style="swiperStyle"
      :modules="modules"
      :navigation="true"
      :loop="true"
      :pagination="true"
      class="swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @mouseenter="onSwiperMouseEnter"
      @mouseleave="onSwiperMouseLeave"
      @navigationNext="next"
    >
      <swiper-slide
        v-for="(item, index) in data"
        :key="index"
        v-slot="{ isActive }"
      >
        <img :src="item.url" :alt="item.alt" />
        <Transition>
          <div v-if="isActive" class="desc">
            <div v-html="item.text"></div>
          </div>
        </Transition>
      </swiper-slide>
    </Swiper>
    <div class="block box-shadow">
      <h2>
        <p>设计的历史</p>
        <p>是澎升的历史</p>
      </h2>
      <HisorySwiper />
    </div>
    <div class="block box-shadow">
      <h2>
        <p>产品</p>
      </h2>
      <div class="list">
        <div class="item" v-for="(item, i) in list" :key="i">
          <div class="item-img">
            <img :src="item.url">
          </div>
          <div class="item-text">
            {{ item.text }}
          </div>
        </div>
      </div>

      <div @click="product" class="more">
        发现所有产品
      </div>
    </div>
  </main>
  <NuxtLayout name="footer" />
</template>

<script setup lang="tsx">
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import HisorySwiper from "@/components/historySwiper.vue"

import img1 from "@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp";
import img2 from "@/assets/images/MODERN-LUXURY-DESIGN-BATHROOS.webp";
import img3 from "@/assets/images/MODERN-LUXURY-DESIGN-WARDROBES.webp";

const modules = [Autoplay, Navigation, Pagination, Mousewheel, Keyboard];

const swiperStyle = {
  "--swiper-navigation-color": "#fff",
  "--swiper-pagination-color": "#fff",
  "--swiper-navigation-size": "22px",
};

const data = [
  {
    url: img1,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: "澎升装饰图片",
  },
  {
    url: img2,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: "澎升装饰图片",
  },
  {
    url: img3,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: "澎升装饰图片",
  },
];

const list = [{
  url: img1,
  text: '产品1'
},
{
  url: img1,
  text: '产品2'
}]


const onSlideChange = (e: SwiperType) => {};

const next = (e: SwiperType) => {
  console.log(`(╯‵□′)╯︵┻━┻`, e.realIndex);
};

const router = useRouter();
const toList = () => {
  router.push("/user-admin/111");
};
const product = () => {
  router.push('/list')
}
let swiper:any;
const onSwiper = (s: SwiperType) => {
  swiper = s;
};
const onSwiperMouseEnter = () => {
  swiper.autoplay.stop();
};

const onSwiperMouseLeave = () => {
  swiper.autoplay.start();
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
main {
    width: 100%;
}
.swiper {
    width: 100%;
    height: 100%;
}

.desc {
    position: absolute;
    bottom: 50px;
    left: 20px;
    color: #fff;
    font-size: 36px;
    line-height: 35px;
    font-family: inherit;
    font-weight: 300;
    text-align: left;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.block {
    margin: 0px 0px 0px 0px;
    --e-column-margin-right: 0px;
    --e-column-margin-left: 0px;
    padding: 20px 0px;
    min-height: 1px;

    h2 {
        padding: 60px 0;
        margin: 0;
    }
    h2>p{
        line-height: 26px;
        text-align: center;
        font-weight: 400;
        font-family: inherit;
        font-size: 22px;
    }
}

.list {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 20px;
  text-align: center;
  font-size: 13px;
  color: rgb(51, 51, 51);
  .item {
    cursor: pointer;
    &-img {
      height: 437px;
      
      img {
        width: 100%;
        height: 100%;
          object-fit: cover;
      }
    }
    &-text {
      width: 100%;
      margin: 20px 0;
    }
  }
}
.more {
  width: 200px;
  height: 40px;
  border: 1px solid #999;
  border-radius: 30px;
  margin: 0 auto;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
}
.more:hover {
  background: #000;
  color: #fff;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
}
.box-shadow {
  box-shadow: 0px 7px 7px -7px rgba(0, 0, 0, 0.12);
}
</style>