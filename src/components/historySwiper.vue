<template>
  <Swiper
    ref="el"
    :auto="true"
    :loop="true"
    :modules="modules"
    :slidesPerView="slidesPerView"
    :spaceBetween="spaceBetween"
    :cssMode="true"
    class="mySwiper"
    @swiper="onSwiper"
    @mouseenter="onSwiperMouseEnter"
    @mouseleave="onSwiperMouseLeave"
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
      <img :src="item.url" :alt="item.alt" />
      <div class="slide-text">{{ item.alt }}</div>
    </swiper-slide>
  </Swiper>
</template>
<style lang="scss" scoped>
.mySwiper {
  width: 100%;
  height: 600px !important;
}
.swiper-container {
    position: relative;
}
.mySwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
//   position: relative;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 556px;
  object-fit: cover;
}
.slide-text{
  position: absolute;
  bottom: 0;
  left: 5px;
  font-size: 13px;
  line-height: 20px;
}
</style>
<script lang="ts">
export default defineComponent({
  name: "HistorySwiper",
});
</script>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useResizeObserver } from '@vueuse/core'


import { Autoplay, Mousewheel,Pagination, Keyboard } from "swiper";

import img1 from "@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp";
import img2 from "@/assets/images/MODERN-LUXURY-DESIGN-BATHROOS.webp";
import img3 from "@/assets/images/MODERN-LUXURY-DESIGN-WARDROBES.webp";

const modules = [Autoplay, Pagination, Mousewheel, Keyboard];


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
  {
    url: img1,
    text: `<p>给我一份信赖给您一段美好</p>
    <p>澎升, 您身边的全屋定制</p>`,
    alt: "澎升装饰图片",
  },{
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

let swiper: any;
const slidesPerView = ref(3);
const spaceBetween = ref(30);
const onSwiper = (s: SwiperType) => {
  swiper = s;
};
const onSwiperMouseEnter = () => {
  swiper.autoplay.stop();
};

const onSwiperMouseLeave = () => {
  swiper.autoplay.start();
};
function throttle(fn:any, ms:number){
  let time: NodeJS.Timeout|null = null
  return function(){
    if(!time){
      time = setTimeout(()=>{
      	fn()
        time = null
      },ms)
    }
  }
}
function debounce(fn:any, ms:number){
  let time: NodeJS.Timeout|null = null

  return function () {
    if (time) clearTimeout(time)
		time = setTimeout(()=>{
      fn()
    }, ms)
  }
}
const el = ref(null)
function resizeCallback(width:number) {
  // 移动端或视口小于500 轮播变成一个
    if (width < 500) {
      slidesPerView.value = 1
      spaceBetween.value = 0
      console.log(`(╯‵□′)╯︵┻━┻`, slidesPerView)
      
    }
  }
useResizeObserver(el, (entries) => {
  const entry = entries[0]
  // resizeCallback()
  const { width } = entry.contentRect;
  // debounce(() => {
    if (width < 500) {
      slidesPerView.value = 1
      spaceBetween.value = 0
      // console.log(`(╯‵□′)╯︵┻━┻`, slidesPerView)
      
    } else {
      slidesPerView.value = 3
      spaceBetween.value = 30
    }
  // }, 500)

})
</script>