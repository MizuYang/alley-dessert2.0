import { defineStore } from "pinia";

export const useOrderStore = defineStore("useOrderStore", () => {
  const orderInfoForm = ref({
    // pay_method: "-請選擇付款方式-",
    name: "xxx",
    email: "xxx@gmail.com",
    tel: "0900000000",
    pay_method: "超商取貨付款",
    address: "xxx",
  });
  const orderPaymentData = ref({});

  const { cartDataInit } = useCartStore();

  const route = useRoute();
  const router = useRouter();

  const config = useRuntimeConfig();
  const { apiPath, apiBaseUrl } = config.public;

  const orderId = ref(route?.params?.orderId || "");

  function getOrderId(id) {
    orderId.value = id;
  }
  async function getOrder() {
    const myOrderId = route?.params?.orderId || orderId.value || "";
    if (!myOrderId) return;

    const option = {
      method: "GET",
    };

    try {
      const res = await $fetch(
        `${apiBaseUrl}/api/${apiPath}/order/${myOrderId}`,
        {
          ...option,
        },
      );
      console.log("res", res);
      if (res?.order?.id)
        orderPaymentData.value = { ...res.order, ...res.order.user, orderId };
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
  async function payment() {
    console.log("orderId", orderId.value);
    const api = `${apiBaseUrl}/api/${apiPath}/pay/${orderId.value}`;

    const option = {
      method: "POST",
    };

    try {
      const res = await $fetch(api, {
        ...option,
      });
      console.log("res", res);
      router.push(`/orderComplated/${orderId.value}`);
    } catch (err) {
      console.error(err);
    }
  }
  function formInit() {
    orderInfoForm.value = { pay_method: "-請選擇付款方式-" };
  }

  return {
    orderId,
    orderInfoForm,
    orderPaymentData,
    getOrderId,
    getOrder,
    sendOrder,
    payment,
  };
});
