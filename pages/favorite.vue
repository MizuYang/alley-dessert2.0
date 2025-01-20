<script setup>
import noFavoriteProduct from "@/components/favorite/noFavoriteProduct.vue";
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'收藏清單'" />
    </div>

    <section class="max-w-[700px] mx-auto">
      <!-- 無收藏產品 -->
      <noFavoriteProduct />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
