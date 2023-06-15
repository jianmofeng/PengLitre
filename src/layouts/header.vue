<template>
  <header class="header">
    <div class="header-left">
      <div class="header-left-logo">
        <a @click="toHome" class="cursor-pointer">
          <img :src="homeIcon" alt="Python Decordtion Logo" class="logo__img logo__img--desktop">
        </a>
      </div>
      <nav class="nav">
        <ul class="nav-menu">
          <li class="nav-menu-item" @click="product">
            产品集
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import homeIcon from "@/assets/images/icon/favicon.png"

const router = useRouter()
const product = () => {
  router.push('/list')
}
const toHome = () => {
  router.push('/')
}
</script>
<style lang="scss">
.cursor-pointer{
  cursor: pointer;
}
.header {
  justify-content: space-between;
  padding: 5px 20px;
  box-shadow: 0px 7px 7px -7px rgba(0, 0, 0, 0.12);
  margin-bottom: 5px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1900;
  background-color: #f5f5f5;

  &-left {
    display: flex;
    width: 20.6rem;

    &-logo {
      width: 160px;
      height: 36px;
      padding-top: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .nav{
      display: flex;
      &-menu {
        margin-left: 40px;
        display: flex;
        &-item {
          font-size: 13px;
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
        &-item:hover {
          color: #b0b0b0;
        }
      }
    }
  }
}
</style>