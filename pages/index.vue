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
    <div class="max-w-[1200px] mx-auto">
      <IndexLongImageArea />
      <IndexPopularProducts />
      <IndexProductCategory />
    </div>
  </main>
</template>

<style lang='scss' scoped></style>
