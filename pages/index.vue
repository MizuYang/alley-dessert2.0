<script setup>
const { getProducts } = useProductStore();

onMounted(() => {
  getProducts();
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
