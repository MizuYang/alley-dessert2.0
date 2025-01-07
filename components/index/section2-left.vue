<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({});
});
</script>

<template>
  <div class="text-primary col">
    <div
      class="flex h-[960px] w-[636px] bg-no-repeat"
      style="
        background-image: url(&quot;/images/pages/主頁/垂直banner-主要/垂直大.png&quot;);
      "
    >
      <div class="m-auto bg-[#110e0e6c] px-4 py-6 text-center translate-y-16">
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
            <router-link
              class="hover:bg-primary/20 border-primary inline-block border-2 px-2 py-3 text-2xl transition-all duration-75 hover:scale-[1.01]"
              to="/about"
              title="查看品牌故事"
              @click="currentPage('about')"
              >想聽他們的故事</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="square-main block h-[290px] w-[400px] bg-contain bg-no-repeat"
      style="
        background-image: url(&quot;/images/pages/主頁/垂直banner-主要/「招牌」草莓酥.png&quot;);
      "
    >
      <p class="flex items-end justify-center">
        <span class="badge text-2xl" data-aos="fade-right" data-aos-duration="5500"
          >「招牌」草莓酥</span
        >
        <span class="badge hoverShowText">前往經典蛋糕</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.square-main {
  overflow: hidden;
  position: relative;
  opacity: 0.7;
  clip-path: polygon(25% 0%, 75% 0%, 95% 50%, 70% 100%, 30% 100%, 0% 40%);
  // margin: 5% auto;
  // width: 25rem;
  // height: 20rem;
}
</style>
