<script setup>
import noFavoriteProduct from "@/components/favorite/noFavoriteProduct.vue";

const { favoriteData } = storeToRefs(useFavoriteStore());
const { favoriteInit } = useFavoriteStore();

let isReady = ref(false);

onMounted(() => {
  favoriteInit();
  isReady.value = true;
});
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'收藏清單'" />
    </div>

    <section v-if="favoriteData.length && isReady">
      <ProductsCards :products="favoriteData" />
    </section>
    <section
      class="mx-auto max-w-[700px]"
      v-else-if="!favoriteData.length && isReady"
    >
      <!-- 無收藏產品 -->
      <noFavoriteProduct />
    </section>
    <section v-else>
      <LoadingText />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
