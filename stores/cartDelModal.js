import { defineStore } from "pinia";

export const useCartDelModalStore = defineStore("useCartDelModalStore", () => {
  const isDelModalShow = ref(false);
  const isDeleteAll = ref(false);

  function modalShow(isDeleteAllAction) {
    isDeleteAll.value = isDeleteAllAction ? true : false;
    isDelModalShow.value = true;
  }
  function modalHide() {
    isDelModalShow.value = false;
  }

  return {
    isDelModalShow,
    isDeleteAll,
    modalShow,
    modalHide,
  };
});
