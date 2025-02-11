import { defineStore } from "pinia";

export const useOrderConfirmStore = defineStore("useOrderConfirmStore", () => {
  const form = ref({ payMethod: "-請選擇付款方式-" });

  return {
    form,
  };
});
