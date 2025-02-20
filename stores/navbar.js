import { defineStore } from "pinia";

export const useNavbarStore = defineStore("useNavbarStore", () => {
  const { isMobile } = storeToRefs(useWindowSizeStore());

  const isNavbarShow = ref(false);

  function navbarShow() {
    if (isMobile) isNavbarShow.value = true;
  }
  function navbarHide() {
    isNavbarShow.value = false;
  }
  function navbarToggle() {
    if (isMobile) isNavbarShow.value = !isNavbarShow.value;
  }
  return {
    isNavbarShow,
    navbarShow,
    navbarHide,
    navbarToggle,
  };
});
