<script setup>
const { final_total } = storeToRefs(useCartStore());
</script>

<template>
  <div class="flex items-center justify-end">
    <p class="me-10 text-lg font-bold">總金額 ${{ final_total }} 元</p>
    <NuxtLink
      to="/checkout"
      class="bg-red-800 px-3 py-2 text-xl hover:bg-red-700/90 active:bg-red-600/80"
      >下一步</NuxtLink
    >
  </div>
</template>

<style lang="scss" scoped></style>
