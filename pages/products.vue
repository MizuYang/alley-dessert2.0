<script setup>
const { products } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

onMounted(() => {
  console.log("products: ", products);
  if (!products.value.length) getProducts();
});
</script>

<template>
  <main class="text-primary bg-black pb-14 pt-10">
    <h2 class="mb-12 text-center">
      <span
        class="before:bg-primary after:bg-primary relative text-[40px] before:absolute before:right-full before:top-1/2 before:h-[1px] before:w-[120px] before:-translate-x-16 after:absolute after:left-full after:top-1/2 after:h-[1px] after:w-[120px] after:translate-x-16"
        >精選產品</span
      >
    </h2>

    <ProductsCards :products="products" />
  </main>
</template>

<style lang="scss" scoped></style>
