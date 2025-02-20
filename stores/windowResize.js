import { defineStore } from "pinia";

export const useWindowSizeStore = defineStore("useWindowSizeStore", () => {
  const navbarStore = useNavbarStore();

  const windowWidth = ref(0);
  const windowHeight = ref(0);

  const isDesktop = computed(() => windowWidth.value >= 1024);
  const isMobile = computed(() => windowWidth.value < 768);

  function resizeHandler() {
    getWindowSize();

    if (isDesktop.value) {
      navbarStore?.navbarShow();
    } else {
      navbarStore?.navbarHide();
    }
  }
  function getWindowSize() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  return {
    windowWidth,
    windowHeight,
    isMobile,
    isDesktop,
    getWindowSize,
    resizeHandler,
  };
});
