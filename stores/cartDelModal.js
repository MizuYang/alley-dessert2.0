import { defineStore } from "pinia";

export const useCartDelModalStore = defineStore("useCartDelModalStore", () => {
  const isDelModalShow = ref(false);

  function modalShow() {
    isDelModalShow.value = true;
  }
  function modalHide() {
    isDelModalShow.value = false;
  }

  return {
    isDelModalShow,
    modalShow,
    modalHide,
  };
});
