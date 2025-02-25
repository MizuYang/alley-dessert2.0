// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/alley-dessert2.0/" : "/",

    // 設定 npm run generate 打出輸入的 assets 會放到 .output/static 資料夾
    buildAssetsDir: "/static/",

    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css",
        },
      ],
    },
  },

  css: ["@/assets/style/index.scss"],

  // 環境變數設定
  runtimeConfig: {
    // 只能在 server 端讀取到的環境變數
    // 可以放置敏感資料, 例: token
    // token: "1234567890",

    // 只能在 client 端讀取到的環境變數
    // 可放 apiUrl 或其他不敏感的變數資訊
    public: {
      imgPath: process.env.NODE_ENV === "production" ? "/alley-dessert2.0" : "",
      apiBaseUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "mizupath72",
      // 正式環境的 base URL
      baseUrl:
        process.env.NODE_ENV === "production" ? "/alley-dessert2.0/" : "/",
    },
  },

  // 新增其他想 Auto Import 的資料夾
  imports: {
    dirs: ["stores"], // 資料夾名稱
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "nuxt-aos", "@pinia/nuxt", "nuxt-lodash"],

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
});
