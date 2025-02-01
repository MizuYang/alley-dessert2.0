<script setup>
const { category, search } = storeToRefs(useProductStore());
</script>

<template>
  <div class="text-center">
    <h3 class="mb-5 text-2xl">購物車是空的</h3>
    <p class="mb-10">如果您在購物時發生問題，請聯絡我們。</p>
    <div>
      <NuxtLink
        to="/contact"
        class="border-primary hover:bg-primary/15 active:bg-primary/20 me-5 border border-solid px-3 py-2"
        >聯絡我們</NuxtLink
      >
      <NuxtLink
        :to="`/products/${category || '全部'}?search=${search}`"
        class="border-primary me-5 border border-solid bg-red-800 px-3 py-2 hover:bg-red-800/80 active:bg-red-800/90"
        >返回購物</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
