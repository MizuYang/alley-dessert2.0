// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // 環境變數設定
  runtimeConfig: {
    // 只能在 server 端讀取到的環境變數
    // 可以放置敏感資料, 例: token
    // token: "1234567890",

    // 只能在 client 端讀取到的環境變數
    // 可放 apiUrl 或其他不敏感的變數資訊
    public: {
      apiBaseUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "mizupath72"
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "nuxt-aos"],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#f1ebd8",
          },
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css",
        },
      ],
    },
  },
});
