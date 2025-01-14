import { defineStore } from "pinia";
import cloneDeep from "lodash/cloneDeep.js";

export const useProductStore = defineStore("useProductStore", () => {
  const router = useRouter();
  const env = useRuntimeConfig();
  const products = ref([]);

  // 產品頁的商品篩選、排序
  const filter = ref("全部");
  const isLowToHigh = ref("default");
  const productsRender = computed(() => {
    const tempProducts = cloneDeep(products.value);
    if (filter.value === "全部") {
      return tempProducts;
    } else {
      const filterData = tempProducts.filter((item) => {
        if (filter.value === "熱門") return item.popular >= 3;
        else return item.category === filter.value;
      });
      if (isLowToHigh.value === "default") {
        return filterData;
      } else {
        if (isLowToHigh.value === "低到高") {
          return filterData.sort((a, b) => a.price - b.price);
        } else {
          return filterData.sort((a, b) => b.price - a.price);
        }
      }
    }
  });

  // 首頁的輪播商品
  const popularProducts = computed(() =>
    products.value.filter((item) => item.popular >= 3),
  );
  const cakeProducts = computed(() =>
    products.value.filter((item) => item.category === "蛋糕"),
  );
  const puddingProducts = computed(() =>
    products.value.filter((item) => item.category === "布丁"),
  );
  const profiteroleProducts = computed(() =>
    products.value.filter((item) => item.category === "泡芙"),
  );

  async function getProducts() {
    const api = `${env.public.apiBaseUrl}/api/${env.public.apiPath}/products/all`;

    try {
      const res = await $fetch(api);
      console.log("res: ", res);
      products.value = res.products;
    } catch (err) {
      console.error(err);
    }
  }
  function setFilter(value) {
    filter.value = value;
    router.push(`/products/${value}`);
  }
  function sortToggle() {
    isLowToHigh.value = !isLowToHigh.value;
  }

  return {
    cakeProducts,
    profiteroleProducts,
    popularProducts,
    puddingProducts,
    products,
    productsRender,
    filter,
    isLowToHigh,
    getProducts,
    setFilter,
    sortToggle,
  };
});
