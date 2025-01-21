<script setup>
import ProductInfo from "@/components/productInfo/productInfo.vue";

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
    <div>
      <PageTitle :title="productInfoData?.title || ''" />
    </div>

    <section class="mx-auto max-w-[1200px]">
      <ProductInfo :productInfoData="productInfoData" />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
