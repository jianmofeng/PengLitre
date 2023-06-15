<template>
  <div class="footer">
    <div class="footer-desc">
      <p>澎升装饰公司（Python Decordtion Company） </p>
      <p>联系方式：13735800742</p>
      <p>门店地址：杭州市-拱墅区-鹏锦科创大厦-311室</p>
    </div>
    <div class="copyRight">
      Copyright ©{{ year }} Python Decordtion Company ALL Rights Reserved 
    </div>
  </div>
</template>
<script lang="ts" setup>
const date = new Date();

const year = date.getFullYear()
</script>
<style lang="scss" src="@/assets/styles/footer.scss"></style>
