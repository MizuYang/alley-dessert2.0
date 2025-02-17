<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  slidesPerView: {
    type: Number,
    required: false,
    default: 1,
  },
  maxWidth: {
    type: Number,
    // required: true,
  },
  options: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const { options } = toRefs(props);

const { addProductToCart } = useCartStore();

const maxW = {
  // 300: "max-w-[300px]",
  1200: "max-w-[1200px]",
};
const indexProfiteroleSwiper = ref(null);
const swiper = useSwiper(indexProfiteroleSwiper, {
  ...props.options,

  // effect: 'creative',
  loop: true,
  slidesPerView: props.slidesPerView || 1,
  spaceBetween: 50,
  autoplay: {
    delay: options.value.delay ? +options.value.delay : 2000,
    pauseOnMouseEnter: true,
  },
  speed: options.value.speed && options.value.speed,
  freeMode: options.value.freeMode,
  breakpoints: {
    ...options.value.breakpoints,
  },
  // navigation: true,
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
</script>

<template>
  <div
    class="product-swiper-banner text-primary mx-auto"
    :class="maxW[maxWidth] ? maxW[maxWidth] : 'max-w-[250px] xl:max-w-[370px]'"
  >
    <h3 class="mb-4 text-center text-2xl font-bold" v-if="title">
      {{ title }}
    </h3>

    
    <ClientOnly>
      <swiper-container ref="indexProfiteroleSwiper" :init="false">
        <swiper-slide
          v-for="product in props.products"
          :key="product.id"
          class="group"
        >
          <div class="h-[320px] overflow-hidden">
            <NuxtLink :to="`/productInfo/${product.id}`">
              <div
                class="relative block h-full w-full bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
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
                    {{ product.title }}
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
            </NuxtLink>
          </div>
          <button
            type="button"
            class="bg-danger block w-full bg-red-800 px-3 py-[6px] text-2xl text-white hover:bg-red-700/80 active:bg-red-700/90"
            @click.stop="addProductToCart({ product })"
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

.swiper-free-mode > .swiper-wrapper {
  transition-timing-function: linear;
  margin: 0 auto;
}
</style>
