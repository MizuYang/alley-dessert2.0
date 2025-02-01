<script setup>
import CartTimeLine from "@/components/cart/cartTimeLine.vue";
import RecommendProductSwiper from "@/components/productInfo/recommendProductSwiper.vue";
import CartEmpty from "@/components/cart/cartEmpty.vue";

const { cartData } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

const { isDelModalShow } = storeToRefs(useCartDelModalStore());

const isCartDataLoading = ref(false);

onMounted(async () => {
  await getCartData();
  isCartDataLoading.value = true;
});
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'購物車'" />
    </div>

    <template v-if="!isCartDataLoading">
      <LoadingText />
    </template>

    <template v-else>
      <div class="mx-auto max-w-[1200px]">
        <template v-if="cartData.length">
          <CartTimeLine class="mb-12" />
          <CartDelBtns />
          <CartTable :cartData="cartData" />
          <CartTotal />
        </template>
        <template v-else>
          <CartEmpty />
        </template>
        <h3
          class="border-primary my-12 border-b border-solid pb-2 text-center text-[32px]"
        >
          猜你會喜歡...
        </h3>
        <RecommendProductSwiper />
        <transition name="fade">
          <CartDelModal v-if="isDelModalShow" />
        </transition>
      </div>
    </template>
  </main>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
