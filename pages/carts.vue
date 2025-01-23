<script setup>
import CartTimeline from "@/components/cart/cartTime.vue";
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'購物車'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeline />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
