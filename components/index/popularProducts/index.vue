<script setup>
const { popularProducts } = storeToRefs(useProductStore());

const options = ref({
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
</script>

<template>
  <section class="text-primary">
    <div data-aos="zoom-out">
      <h2 class="pb-12 text-center text-3xl lg:text-[40px]">
        用甜點，抓住你的胃 -
      </h2>
    </div>

    <h3 class="text-primary pb-6 text-center text-[32px]">熱門商品</h3>

    <IndexProductSwiper
      :slidesPerView="4"
      :products="popularProducts"
      :options="options"
      :max-width="1200"
    />

    <div class="py-12 text-center">
      <div data-aos="zoom-out">
        <h3 class="mb-12 text-[32px]">實在是忍不住了...</h3>
      </div>
      <div class="flex items-center justify-center">
        <i
          class="bi bi-arrow-right arrowLeft arrowMoveLeft me-10 text-[40px]"
        ></i>
        <NuxtLink
          to="/products"
          class="border-primary animation-rotate inline-block border border-solid px-3 py-[6px] text-2xl"
          @click="currentPage('products')"
        >
          現在，就想吃
        </NuxtLink>
        <i
          class="bi bi-arrow-left arrowRight arrowMoveRight ms-10 text-[40px]"
        ></i>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// 旋轉動畫
.animation-rotate {
  animation: animation-rotate 2s infinite;
}

@keyframes animation-rotate {
  0% {
    transform: rotate(3deg);
  }
  10% {
    transform: scale(1.05);
    background-color: #f1ebd862;
  }
  25% {
    transform: scale(1);
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(3deg);
  }
}

// 左右箭頭動畫
.arrowMoveLeft {
  animation: arrowMoveLeft 1s ease infinite;
}
@keyframes arrowMoveLeft {
  50% {
    transform: translateX(1rem);
  }
}
.arrowMoveRight {
  animation: arrowMoveRight 1s ease infinite;
}
@keyframes arrowMoveRight {
  50% {
    transform: translateX(-1rem);
  }
}
</style>
