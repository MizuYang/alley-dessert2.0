<script setup>
const config = useRuntimeConfig();
let imgBaseUrl = config.public.imgPath;
const img1 = ref("");
const img2 = ref("");
img1.value = `${imgBaseUrl}/images/pages/主頁/垂直banner-主要/垂直大.png`;
img2.value = `${imgBaseUrl}/images/pages/主頁/垂直banner-主要/「招牌」草莓酥.png`;
</script>

<template>
  <section class="text-primary">
    <div
      class="flex h-[600px] bg-cover bg-no-repeat lg:h-[960px] xl:w-[636px]"
      :style="`background-image: url(${img1});`"
    >
      <div class="m-auto translate-y-16 bg-[#110e0e6c] px-4 py-6 text-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          <p class="mb-8 bg-[#110e0e6c] text-left text-xl leading-10">
            一群來自桃園的大學生們 <br />
            離鄉背景來到新北打拼 <br />
            來到這陌生的城市 <br />
            他們靠著滿腔熱血，征服了夢想...
          </p>
          <div>
            <NuxtLink
              class="hover:bg-primary/20 border-primary inline-block border-2 border-solid px-2 py-3 text-2xl transition-all duration-75 hover:scale-[1.01] active:!scale-105"
              to="/about"
              title="查看品牌故事"
              >想聽他們的故事</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/products/蛋糕"
      class="square-main group relative mx-auto my-[5%] block h-[290px] w-[400px] cursor-pointer overflow-hidden bg-contain bg-center bg-no-repeat opacity-70 transition-all hover:!opacity-100"
      :style="`background-image: url(${img2});`"
    >
      <p
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-end justify-center"
      >
        <span
          class="bg-[#110e0e6c] text-2xl font-bold text-white"
          data-aos="fade-right"
          data-aos-duration="5500"
          >「招牌」草莓酥</span
        >
      </p>
      <span
        class="text-primary absolute left-1/2 top-1/2 -translate-x-1/2 text-nowrap bg-[#110e0e6c] px-2 py-3 text-[32px] font-bold transition-all duration-500 group-hover:!-translate-y-1/2 lg:translate-y-40"
        >前往經典蛋糕</span
      >
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.square-main {
  clip-path: polygon(25% 0%, 75% 0%, 95% 50%, 70% 100%, 30% 100%, 0% 40%);

  &:hover {
    clip-path: none;
  }
}
</style>
