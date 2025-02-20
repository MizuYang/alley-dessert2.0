<script setup>
import { useFavoriteStore } from "~/stores/favoriteStore.client.js";

const { category, search } = storeToRefs(useProductStore());
const { favoriteData } = storeToRefs(useFavoriteStore());

const { cartData } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

const { favoriteInit } = useFavoriteStore();

const { isNavbarShow } = storeToRefs(useNavbarStore());
const { navbarShow, navbarHide } = useNavbarStore();

onMounted(() => {
  if (import.meta.client) {
    favoriteInit();
  }
  if (!cartData.value.length) getCartData();

  checkWindowWidthNavbarHandler();
});

// 裝置寬度改變事件
if (import.meta.client) {
  window.addEventListener("resize", (e) => {
    checkWindowWidthNavbarHandler();
  });
}

function checkWindowWidthNavbarHandler() {
  window.innerWidth >= 1024 ? navbarShow() : navbarHide();
}
</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-black text-purple-300">
    <LayoutNavbarMobile
      class="border-primary block border-b border-solid bg-black lg:hidden"
      :category="category"
      :search="search"
      :favoriteData="favoriteData"
      :cartData="cartData"
    />
    <transition name="fade">
      <LayoutNavbarDesktop
        class="fixed top-[76px] z-50 w-full flex-col bg-black py-5 lg:!static lg:!flex lg:!flex-row"
        :class="
          isNavbarShow ? 'mobile-show-animation' : 'mobile-hide-animation'
        "
        :category="category"
        :search="search"
        :favoriteData="favoriteData"
        :cartData="cartData"
      />
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
.mobile-show-animation {
  transform-origin: top;
  animation: mobile-show 0.3s ease-in-out;
}
.mobile-hide-animation {
  transform-origin: top;
  animation: mobile-hide 0.3s forwards;
}
@keyframes mobile-show {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}
@keyframes mobile-hide {
  0% {
    transform: scaleY(1);
    opacity: 1;
    flex-direction: column;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
    display: none;
  }
}
</style>
