<script setup>
import CartTimeLine from "@/components/cart/cartTimeLine.vue";

const { cartData } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

onMounted(() => {
  getCartData();
});
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'購物車'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <div class="mb-6 text-end">
        <button
          type="button"
          class="border-primary border border-solid px-3 py-2"
        >
          全部刪除
        </button>
      </div>
      <CartTable :cartData="cartData" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
