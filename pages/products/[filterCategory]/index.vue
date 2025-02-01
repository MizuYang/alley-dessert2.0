<script setup>
const { products, productsRender, category, search } =
  storeToRefs(useProductStore());
const { getProducts } = useProductStore();

const isProductLoading = ref(false);

onMounted(() => {
  if (!products.value.length) getProducts();
  isProductLoading.value = true;
});
</script>

<template>
  <main class="pb-14 pt-10">
    <PageTitle :title="'精選產品'" />

    <template v-if="!isProductLoading">
      <LoadingText />
    </template>

    <template v-else>
      <ProductsFilterSearchSortTool />

      <template v-if="productsRender.length">
        <ProductsCards :products="productsRender" />
      </template>
      <template v-else-if="products.length">
        <div
          class="text-primary min-h flex items-center justify-center text-center text-2xl"
        >
          喔哦! 在『{{ category }}』類別中找不到符合『<span class="underline">{{
            search
          }}</span
          >』名稱的產品 ><
        </div>
      </template>
    </template>
  </main>
</template>

<style lang="scss" scoped>
.min-h {
  --footer-height: 202.27px;
  --nav-height: 83.53px;
  --margin-space: 96px;
  --other-height: calc(88px + 74px); // 排序元素、精選產品

  min-height: calc(
    100vh - var(--nav-height) - var(--footer-height) - var(
        --margin-space
      ) - var(--other-height)
  );
}
</style>
