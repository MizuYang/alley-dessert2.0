import { defineStore } from "pinia";

export const useProductInfoStore = defineStore("useProductInfoStore", () => {
  const config = useRuntimeConfig();
  const productInfoData = ref({});

  const router = useRouter();

  function getProductInfo(product) {
    try {
      productInfoData.value = JSON.parse(JSON.stringify(product));
    } catch (err) {
      console.error(err);
    }
  }
  function gotoProductDetail(product = { id: "" }) {
    const { id } = product;
    if (!id) return;
    getProductInfo(product);
    router.push(`/productInfo/${id}`);
  }
  async function fetchProductInfo(productId) {
    if (!productId) return;

    const { apiPath, apiBaseUrl } = config.public;
    const api = `${apiBaseUrl}/api/${apiPath}/product/${productId}`;
    try {
      const res = await $fetch(api);
      productInfoData.value = res.product;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    productInfoData,
    getProductInfo,
    gotoProductDetail,
    fetchProductInfo,
  };
});
