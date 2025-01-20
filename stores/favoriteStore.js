import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("useFavoriteStore", () => {
  const favoriteData = ref([]);
  favoriteData.value = JSON.parse(localStorage.getItem("favoriteData") || []);
  console.log("favoriteData.value: ", favoriteData.value);
  // 透過物件取值 判斷是否為收藏產品 { "product.id": product.id }
  const favoritedPproductKeyName = ref({});

  function getFavorite() {
    favoriteData.value = JSON.parse(
      JSON.stringify(localStorage.getItem("favoriteData")) || [],
    );
  }
  function getFavoriteKey() {
    if (favoriteData.value.length) {
      favoriteData.value.forEach((item) => {
        if (!favoritedPproductKeyName.value[item.id])
          favoritedPproductKeyName.value[item.id] = item.id;
      });

      console.log(
        "favoritedPproductKeyName.value: ",
        favoritedPproductKeyName.value,
      );
    }
  }
  function toggleFavorite(product) {
    console.log("product: ", product);
    console.log("favoriteData.value: ", favoriteData.value);
    const isAdd =
      favoriteData.value.findIndex((item) => item.id === product.id) === -1;

    isAdd ? addFavoriteHandler(product) : removeFavoriteHandler(product);
    favoriteHeartAnimation({ product, isAdd });
    localStorage.setItem("favoriteData", JSON.stringify(favoriteData.value));
  }
  function addFavoriteHandler(product) {
    favoriteData.value.push(product);
    favoritedPproductKeyName.value[product.id] = product.id;
  }
  function removeFavoriteHandler(product) {
    favoriteData.value = favoriteData.value.filter(
      (item) => item.id !== product.id,
    );
    delete favoritedPproductKeyName.value[product.id];
  }
  function favoriteHeartAnimation({ product, isAdd }) {
    const heartName = isAdd ? "heart-full" : "heart-break";
    const heart = document.querySelector(`.${heartName}-${product.id}`);
    const animationMs = 1000;


    heart.classList.remove("hidden");
    heart.classList.add(`${heartName}-animation`, "block");
    setTimeout(() => {
      heart.classList.add("hidden");
      heart.classList.remove(`${heartName}-animation`, "block");
    }, animationMs);
  }

  return {
    favoriteData,
    getFavorite,
    toggleFavorite,
    getFavoriteKey,
    favoritedPproductKeyName,
  };
});
