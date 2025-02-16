import { defineStore } from "pinia";

export const useOrderPaymentModalStore = defineStore(
  "useOrderPaymentModalStore",
  () => {
    const isPaymentModalShow = ref(false);

    function modalShow() {
      isPaymentModalShow.value = true;
    }
    function modalHide() {
      isPaymentModalShow.value = false;
    }

    return {
      isPaymentModalShow,
      modalShow,
      modalHide,
    };
  },
);
