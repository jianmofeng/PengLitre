<template>
  <NuxtLayout name="header" />
  <main>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-size': '22px'
      }"
      :cssMode="true" :loop="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true"
      :modules="modules" 
      class="swiper"
      @slideChange="onSlideChange"
      >
      <swiper-slide>
        <img src="@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp" alt="澎升装饰图片">
        <Transition>
          <div v-if="clickedIndex === 1" class="desc">
            <p>给我一份信赖给您一段美好</p>
          </div>
        </Transition>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/MODERN-LUXURY-DESIGN-BATHROOS.webp" alt="澎升装饰图片">
      </swiper-slide>
      <swiper-slide> 
        <img src="@/assets/images/MODERN-LUXURY-DESIGN-WARDROBES.webp" alt="澎升装饰图片">
      </swiper-slide>
    </swiper>
  </main>
</template>
<style lang="scss" src="@/assets/styles/index.scss"></style>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import type {Swiper as SwiperType} from "swiper"
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const modules = [Navigation, Pagination, Mousewheel, Keyboard];

const clickedIndex = ref(1)
const onSlideChange = (e: SwiperType) => {
  clickedIndex.value = e.clickedIndex
  console.log(`(╯‵□′)╯︵┻━┻`, e.clickedIndex)
}

const router = useRouter();
const toList = () => {
  router.push("/user-admin/111");
};
</script>