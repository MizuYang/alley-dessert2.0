<script setup lang="ts">
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  // effect: 'creative',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: true,
  // pagination: true,
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});

const config = useRuntimeConfig();
let imgBaseUrl = config.public.imgPath;

let mainSwiper = [
  `${imgBaseUrl}/images/pages/主頁/主要輪播/主頁大輪播1.jpeg`,
  `${imgBaseUrl}/images/pages/主頁/主要輪播/主頁大輪播2.jpeg`,
  `${imgBaseUrl}/images/pages/主頁/主要輪播/主頁輪播3.jpg`,
];
</script>

<template>
  <section class="swiper-banner">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="(imgUrl, idx) in mainSwiper"
          :key="`mainSwiper-${idx}`"
          class="relative"
        >
          <!-- 背景圖 -->
          <div
            class="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
            :style="`background-image: url(${imgUrl})`"
          ></div>
          <div
            class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <h2
              class="text-primary mb-6 me-16 text-right text-3xl lg:me-0 lg:text-[48px]"
            >
              <span
                class="mb-2 inline-block text-nowrap bg-[#110e0e6c] py-2 lg:px-4"
                >❝ 最意想不到的...
              </span>
              <br />
              <span
                class="mb-4 ms-9 inline-block translate-x-16 text-nowrap bg-[#110e0e6c] py-2 lg:px-4"
                >永遠最甜蜜 ❞</span
              >
            </h2>
            <div class="text-center">
              <NuxtLink
                to="/products"
                class="text-primary border-primary btn-active-animation hover:!bg-primary/20 relative inline-block border-2 border-solid bg-[#110e0e6c] p-2 text-center text-[28px] transition-all hover:!scale-100 hover:rounded-lg active:!scale-105"
                >前往商品<i
                  class="bi bi-hand-index text-primary finger-active-animation absolute left-1/2 top-1/2 text-[48px]"
                ></i
              ></NuxtLink>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper-container>
    </ClientOnly>
  </section>
</template>

<style lang="scss">
.swiper-banner {
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
.swiper-banner swiper-slide {
  --nav-height: 76px;
  height: calc(100vh - var(--nav-height));
  @media (min-width: 768px) {
    --nav-height: 83.53px;
    height: calc(100vh - var(--nav-height));
  }
}

.finger-active-animation {
  animation: fingerActiveAnimation 1s ease infinite;
}
@keyframes fingerActiveAnimation {
  0% {
    font-size: 3rem;
  }
  20% {
    transform: rotate(-8deg);
  }
  25% {
    transform: rotate(0deg);
  }
  70% {
    font-size: 3.2rem;
  }
  100% {
    font-size: 3rem;
  }
}

.btn-active-animation {
  animation: btnActive 1s ease infinite;
}
@keyframes btnActive {
  0% {
    transform: scale(0.97);
    background-color: #00000028;
  }
}
</style>
