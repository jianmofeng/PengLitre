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
  </main>
</template>
<style lang="scss" src="@/assets/styles/index.scss"></style>
<style lang="scss" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }
</style>
<script setup lang="tsx">
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

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

const onSlideChange = (e: SwiperType) => {};

const next = (e: SwiperType) => {
  console.log(`(╯‵□′)╯︵┻━┻`, e.realIndex);
};

const router = useRouter();
const toList = () => {
  router.push("/user-admin/111");
};

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