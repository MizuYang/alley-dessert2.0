import { defineStore } from "pinia";

export const useCartStore = defineStore("useCartStore", () => {
  const config = useRuntimeConfig();
  const { apiPath, apiBaseUrl } = config.public;

  async function addProductToCart({ product, qty = 1 }) {
    if (!product?.id) return;

    product.qty = qty;
    product.product_id = product.id;

    const option = {
      method: "POST",
      body: { data: product },
    };

    try {
      const res = await $fetch(`${apiBaseUrl}/api/${apiPath}/cart`, {
        ...option,
      });
      console.log("res", res);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    addProductToCart,
  };
});
