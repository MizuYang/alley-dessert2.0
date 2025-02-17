<script setup>
const { products } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

onMounted(() => {
  if (!products.value.length) getProducts();
});
</script>

<template>
  <main class="text-primary bg-black">
    <IndexBanner />
    <div
      class="mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] px-5"
      style="width: calc(100% - 10%)"
    >
      <IndexLongImageArea />
      <IndexPopularProducts />
      <IndexProductCategory class="hidden lg:block" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
