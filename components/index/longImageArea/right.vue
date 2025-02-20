<script setup>
const config = useRuntimeConfig();
let imgBaseUrl = config.public.imgPath;
const img1 = ref("");
const img2 = ref("");
img1.value = `${imgBaseUrl}/images/pages/主頁/垂直banner-次要/垂直大.png`;
img2.value = `${imgBaseUrl}/images/pages/主頁/垂直banner-次要/垂直小.png`;
</script>

<template>
  <section class="text-primary felx-col flex flex-col lg:flex-col-reverse">
    <div
      class="flex h-[600px] bg-cover bg-center bg-no-repeat xl:w-[636px]"
      :style="`background-image: url(${img1});`"
    >
      <div class="m-auto">
        <div data-aos="flip-right" data-aos-duration="4000">
          <p
            class="-translate-y-9 translate-x-4 bg-[#110e0e6c] text-left text-xl leading-10 md:translate-x-0"
          >
            我相信努力不會白費 <br />
            就算將來的某一天我不得不放棄這個夢想 <br />
            那我也不顧一切的為其努力過了 <br />
            有這些就足夠了 <br />
            心中也不會有遺憾
          </p>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/products/熱門"
      class="square-secondary group relative mx-auto block h-[320px] w-[430px] cursor-pointer overflow-hidden bg-contain bg-center bg-no-repeat opacity-70 transition-all hover:!opacity-100"
      :style="`background-image: url(${img2});`"
    >
      <p class="ms-20 mt-12">
        <span
          class="bg-[#110e0e6c] text-2xl font-bold text-white"
          data-aos="fade-left"
          data-aos-duration="5000"
          >烤奶油堅果塔</span
        >
      </p>
      <span
        class="text-primary absolute left-1/2 top-1/2 -translate-x-1/2 text-nowrap bg-[#110e0e6c] px-2 py-3 text-[32px] font-bold transition-all duration-500 group-hover:!-translate-y-1/2 lg:translate-y-40"
        >前往熱門產品</span
      >
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.square-secondary {
  clip-path: circle(50% at 50% 50%);

  &:hover {
    clip-path: none;
  }
}
</style>
