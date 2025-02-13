import { defineStore } from "pinia";

export const useOrderStore = defineStore("useOrderStore", () => {
  // const orderInfoForm = ref({ pay_method: "-請選擇付款方式-" });
  const orderInfoForm = ref({
    // pay_method: "-請選擇付款方式-",
    name: "xxx",
    email: "xxx@gmail.com",
    tel: "0900000000",
    pay_method: "超商取貨付款",
    address: "xxx",
  });

  const { cartDataInit } = useCartStore();

  const config = useRuntimeConfig();
  const { apiPath, apiBaseUrl } = config.public;

  async function getOrder(orderId) {
    if (!orderId) return;

    const option = {
      method: "GET",
    };

    try {
      const res = await $fetch(
        `${apiBaseUrl}/api/${apiPath}/order/${this.orderId}`,
        {
          ...option,
        },
      );
      console.log("res", res);
    } catch (err) {
      console.error(err);
    }
  }
  async function sendOrder() {
    const api = `${apiBaseUrl}/api/${apiPath}/order`;

    const option = {
      method: "POST",
      body: {
        data: {
          user: orderInfoForm.value,
        },
      },
    };

    try {
      const res = await $fetch(api, {
        ...option,
      });
      console.log("res", res);
      formInit();
      cartDataInit();
      return res.orderId;
    } catch (err) {
      console.error(err);
    }
  }
  function formInit() {
    orderInfoForm.value = { pay_method: "-請選擇付款方式-" };
  }

  return {
    orderInfoForm,
    getOrder,
    sendOrder,
  };
});
