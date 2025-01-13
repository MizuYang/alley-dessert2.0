<script setup>
const { getProducts } = useProductStore();

onMounted(() => {
  getProducts();
});
</script>

<template>
  <main class="bg-black">
    <IndexBanner />
    <IndexLongImageArea />
    <IndexPopularProducts />
    <IndexProductCategory />
  </main>
</template>

<style lang='scss' scoped></style>
