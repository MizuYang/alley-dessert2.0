<script setup>
import ProductInfo from "@/components/productInfo/productInfo.vue";
import RecommendProductSwiper from "@/components/productInfo/recommendProductSwiper.vue";

const { category, search } = storeToRefs(useProductStore());

const { productInfoData } = storeToRefs(useProductInfoStore());
const { fetchProductInfo } = useProductInfoStore();

const route = useRoute();
const router = useRouter();

onMounted(() => {
  // 沒產品資料 && 路由也沒產品 ID
  if (!productInfoData.value?.id && !route?.params?.productId) {
    router.push(`/products/${category.value || "全部"}?search=${search.value}`);
  } else if (!productInfoData.value?.id && route?.params?.productId) {
    fetchProductInfo(route?.params?.productId);
  }
});
</script>

<template>
  <main class="pb-14 pt-10">
    <section class="mx-auto max-w-[1200px]">
      <template v-if="productInfoData.id">
        <div>
          <PageTitle :title="productInfoData?.title || ''" />
        </div>
        <ProductInfo :productInfoData="productInfoData" />

        <h3
          class="border-primary my-12 border-b border-solid pb-2 text-center text-[32px]"
        >
          猜你會喜歡...
        </h3>

        <RecommendProductSwiper :currentProductId="route?.params?.productId" />
      </template>

      <template v-else>
        <div
          class="text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-black"
        >
          讀取中...
        </div>
      </template>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
