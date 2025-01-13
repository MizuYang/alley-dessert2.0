<script setup>
const homeSsction3Swiper = ref(null);
const swiper = useSwiper(homeSsction3Swiper, {
  // effect: 'creative',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 50,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  navigation: true,
  // pagination: true,
  // pagination: {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return `<span class="${className}"></span>`;
  //   },
  // },
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  // },
});

import { useProductStore } from "@/stores/productStore.js";
console.log('useProductStore: ', useProductStore)

const { popularProducts } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

onMounted(() => {
  getProducts();
});
function viewProduct(id) {
  this.$router.push("/products");
  setTimeout(() => {
    this.$router.push(`/one_product/${id}`);
  });
}
function addCart(id) {
  this.isLoading = true;
  this.addProductData.product_id = id;
  const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
  this.$http.post(api, { data: this.addProductData }).then((res) => {
    this.isLoading = false;
    this.$httpMessageState(res.data.success, "加入購物車");
    this.emitter.emit("get_cart"); //* Navbar更新
  });
}
</script>

<template>
  <div class="product-swiper-banner text-primary mx-auto max-w-[1200px]">
    <ClientOnly>
      <swiper-container ref="homeSsction3Swiper" :init="false">
        <swiper-slide
          v-for="products in popularProducts"
          :key="products.id"
          class="group"
        >
          <div class="h-[320px] w-[260px] overflow-hidden">
            <a href="#" @click.prevent="viewProduct(products.id)">
              <div
                class="img-fluid relative h-full w-full bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: `url(${products.imageUrl})` }"
              >
                <!-- hover:遮罩 -->
                <div
                  class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                ></div>
                <img
                  class="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 group-hover:opacity-100"
                  alt="顯示產品細節"
                  src="/images/other/product_info.png"
                />
                <div class="flex h-full items-end justify-center pb-8">
                  <p
                    class="inline-block px-3 py-[10px] font-bold"
                    style="background-color: rgba(168, 90, 0, 0.562)"
                  >
                    {{ products.title }}
                  </p>
                </div>
              </div>

              <!-- 緞帶 -->
              <p
                class="text-primary bg-danger absolute -left-6 top-5 z-50 rotate-[-42deg] bg-red-600 px-6 py-[3.2px]"
                style="border-top-left-radius: 40%"
              >
                熱門產品
              </p>
            </a>
          </div>
          <button
            type="button"
            class="bg-danger block w-full bg-red-800 px-3 py-[6px] text-2xl text-white hover:bg-red-700/80 active:bg-red-700/90"
            @click="addCart(`${products.id}`)"
          >
            <i class="bi bi-cart4"></i>加入購物車
          </button>
        </swiper-slide>
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.product-swiper-banner {
  // 輪播箭頭顏色
  --swiper-navigation-color: #f1ebd8;

  // 下方圓點
  --swiper-pagination-bullet-width: 20px;
  --swiper-pagination-bullet-size: 20px;
  --swiper-pagination-bullet-horizontal-gap: 10px;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 0.5;
  --swiper-pagination-color: #f1ebd8;
}
</style>
