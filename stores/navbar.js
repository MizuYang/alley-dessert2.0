import { defineStore } from "pinia";

export const useNavbarStore = defineStore("useNavbarStore", () => {
  const isNavbarShow = ref(false);

  function navbarShow() {
    isNavbarShow.value = true;
  }
  function navbarHide() {
    isNavbarShow.value = false;
  }
  function toggleNavbar() {
    isNavbarShow.value = !isNavbarShow.value;
  }
  return {
    isNavbarShow,
    navbarShow,
    navbarHide,
    toggleNavbar,
  };
});
