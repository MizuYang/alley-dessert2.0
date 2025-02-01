import { defineStore } from "pinia";

export const useCartStore = defineStore("useCartStore", () => {
  const config = useRuntimeConfig();
  const { apiPath, apiBaseUrl } = config.public;

  const cartData = ref([]);

  async function addProductToCart({ product, qty = 1 }) {
    if (!product?.id) return;

    product.qty = qty;
    product.product_id = product.id;

    const data = {
      product_id: product.id,
      qty,
    };

    const option = {
      method: "POST",
      body: { data },
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
  async function getCartData() {
    const option = {
      method: "GET",
    };

    try {
      const res = await $fetch(`${apiBaseUrl}/api/${apiPath}/cart`, {
        ...option,
      });
      console.log("res", res);
      cartData.value = res.data.carts;
    } catch (err) {
      console.error(err);
    }
  }
  async function updateProductQty(data) {
    const { qty, id } = data;

    const body = {
      product_id: data.product.id,
      qty,
    };
    const options = {
      method: "PUT",
      body: { data: body },
    };
    const api = `${apiBaseUrl}/api/${apiPath}/cart/${id}`;

    try {
      const res = await $fetch(api, { ...options });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    cartData,
    addProductToCart,
    getCartData,
    updateProductQty,
  };
});
