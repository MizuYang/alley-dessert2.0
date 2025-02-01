<script setup>
import CartTimeLine from "@/components/cart/cartTimeLine.vue";

const { cartData } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

const deleteProductsId = ref([]);

onMounted(() => {
  getCartData();
});

function updDelProdId(data) {
  deleteProductsId.value = [...data];
}
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'購物車'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <CartDelBtns :deleteProductsId="deleteProductsId" />

      <CartTable :cartData="cartData" @updDelProdId="updDelProdId" />

      <CartTotal />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
