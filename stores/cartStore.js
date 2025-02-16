import { defineStore } from "pinia";

export const useCartStore = defineStore("useCartStore", () => {
  const { isDeleteAll } = storeToRefs(useCartDelModalStore());
  const { modalHide } = useCartDelModalStore();

  const config = useRuntimeConfig();
  const { apiPath, apiBaseUrl } = config.public;

  const cartData = ref([]);
  const deleteProductsIdArray = ref([]);

  const final_total = computed(() => {
    return cartData.value.reduce((acc, pre) => {
      const qty = pre.originQty || pre.qty;
      return acc + qty * pre.product.price;
    }, 0);
  });

  function updDelProdId(data) {
    deleteProductsIdArray.value = [...data];
  }
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
      console.log("res", res.data);

      const curProductidx = cartData.value.findIndex(
        (item) => item.product_id === res.data.product_id,
      );
      const cartHasThisProduct = curProductidx !== -1;
      cartHasThisProduct
        ? cartData.value[curProductidx].qty++
        : cartData.value.push(res.data);
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
      data.originQty = data.qty;
    } catch (err) {
      console.error(err);
    }
  }
  async function deleteProduct() {
    isDeleteAll.value ? deleteAllProducts() : deleteIsCheckedProducts();
  }
  async function deleteIsCheckedProducts() {
    for (let i = 0; i < deleteProductsIdArray.value.length; i++) {
      const id = deleteProductsIdArray.value[i];
      const api = `${apiBaseUrl}/api/${apiPath}/cart/${id}`;
      const options = { method: "DELETE" };

      try {
        const res = await $fetch(api, { ...options });
        console.log(res);
        cartData.value = cartData.value.filter((item) => item.id !== id);
      } catch (err) {
        console.error(err);
      }
    }
    modalHide();
    deleteProductsIdArray.value = [];
    // 重新計算總金額
    final_total.value = cartData.value.reduce(
      (acc, pre) => acc + pre.final_total,
      0,
    );
  }
  async function deleteAllProducts() {
    const api = `${apiBaseUrl}/api/${apiPath}/carts`;
    const options = {
      method: "DELETE",
    };
    try {
      const res = await $fetch(api, { ...options });
      console.log(res);
      cartData.value = [];
    } catch (err) {
      console.error(err);
    } finally {
      modalHide();
      final_total.value = 0;
    }
  }
  function cartDataInit() {
    cartData.value = [];
    deleteProductsIdArray.value = [];
  }

  return {
    cartData,
    deleteProductsIdArray,
    final_total,
    addProductToCart,
    updDelProdId,
    getCartData,
    updateProductQty,
    deleteProduct,
    deleteAllProducts,
    cartDataInit,
  };
});
