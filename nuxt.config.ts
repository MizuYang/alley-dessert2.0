// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // plugins: [
  //   { src: '@/plugins/aos.client.js', mode: 'client' } // 確保插件在客戶端運行
  // ],

  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-aos'],
  
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#f1ebd8'
          }
        }
      }
    }
  },
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css'
        }
      ]
    }
  }
})