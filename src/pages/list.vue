<template>
  <NuxtLayout name="header"/>
  <h2 class="title">
    <p>Living Room</p>
    <p>客厅的合理布置满足舒适性、空间性、功能性和平衡性：这一切都归功于 Python 能够识别、理解和加工材料以掌握其本质。</p>
  </h2>
  <div class="list">
    <div class="item" v-for="(item, i) in list" :key="i">
      <div class="item-img">
        <img :src="item.url">
      </div>
      <div class="text">
        {{ item.text }}
      </div>
    </div>
    <div class="item"></div>
  </div>
</template>
<style lang="scss" scoped>
  .title {
        margin: 60px 0;
  }
  .title>p{
      line-height: 26px;
      text-align: center;
      font-weight: 400;
      font-family: inherit;
      font-size: 22px;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px;
    padding: 20px;
    .item {
      &-img {
        height: 437px;
       
        img {
          width: 100%;
          height: 100%;
           object-fit: cover;
        }
      }
      &-text {
        margin-top: 10px;
      }
    }
  }
</style>

<script setup lang="ts">
import img1 from "@/assets/images/MODERN-LUXURY-DESIGN-KITCHENS.webp";

const list = [{
  url: img1,
  text: 'xxxxxxxxxxxx'
},
{
  url: img1,
  text: 'xxxxxxxxx222'
}]

</script>