<script setup>
const { products } = storeToRefs(useProductStore())
const { getProducts } = useProductStore();

onMounted(() => {
  if (!products.value.length) getProducts()
});
</script>

<template>
  <main class="bg-black text-primary">
    <IndexBanner />
    <IndexLongImageArea />
    <IndexPopularProducts />
    <IndexProductCategory />
  </main>
</template>

<style lang='scss' scoped></style>
