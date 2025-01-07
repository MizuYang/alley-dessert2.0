<script setup lang="ts">
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
const swiper = useSwiper(containerRef, {
  // effect: 'creative',
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: true,
  // pagination: true,
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  // 自訂 swiper 樣式
  injectStyles: [
    `
		// 下方圓點
		.swiper-pagination-bullet {
		  width: 15px;
		  height: 15px;
		  text-align: center;
		  line-height: 15px;
		  font-size: 12px;
		  opacity: 1;
		  background: rgba(0, 0, 0, 0.5);
		}
		.swiper-pagination-bullet-active {
		  color: #fff;
		  background: #f1ebd8;
		}
`,
  ],
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

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        style="background-color: rgb(32, 233, 70); color: white"
      >
        Slide {{ idx + 1 }}
      </swiper-slide>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="scss">
:root {
  // 輪播箭頭顏色
  --swiper-navigation-color: #f1ebd8;
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>
