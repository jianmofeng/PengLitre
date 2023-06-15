// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', type: "image/png", href: '@/assets/images/icon/favicon.png' }],
      title: "澎升装饰官网",
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-cn",
      },
      
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      }
    }
  }
})
