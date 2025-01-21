import { defineStore } from "pinia";
import cloneDeep from "lodash/cloneDeep.js";
import debounce from "lodash/debounce.js";

export const useProductStore = defineStore("useProductStore", () => {
  const route = useRoute();
  const router = useRouter();
  const env = useRuntimeConfig();
  const products = ref([]);

  // 產品頁的商品篩選、排序、搜尋
  const category = ref("全部");
  const isHighToLow = ref("default");
  const search = ref("");
  const sortPriceBtnName = computed(() => {
    if (isHighToLow.value === "default") {
      return "價格排序";
    } else {
      if (isHighToLow.value) return "價格排序(高→低)";
      else return "價格排序(低→高)";
    }
  });
  const productsRender = computed(() => {
    let tempProducts = cloneDeep(products.value);

    // 搜尋篩選
    if (search.value) tempProducts = getFilterSearchData(tempProducts);

    if (category.value === "全部") {
      // 價格排序
      return getSortPriceData(tempProducts);
    } else {
      // 類別篩選
      const filterData = tempProducts.filter((item) => {
        if (category.value === "熱門") return item.popular >= 3;
        else return item.category === category.value;
      });
      // 價格排序
      return getSortPriceData(filterData);
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
  function setCategory(value) {
    category.value = value;
    const { search } = route.query;

    router.replace({ path: `/products/${value}`, query: { search } });
  }
  function getSortPriceData(data) {
    if (isHighToLow.value === "default") {
      return data;
    } else {
      if (isHighToLow.value) {
        return data.sort((a, b) => b.price - a.price);
      } else {
        return data.sort((a, b) => a.price - b.price);
      }
    }
  }
  function sortPriceToggle() {
    if (isHighToLow.value === "default") {
      isHighToLow.value = false;
    } else {
      isHighToLow.value = !isHighToLow.value;
    }
  }
  function setSearch(value) {
    search.value = value;
    const { filterCategory } = route.params;
    router.push({
      path: `/products/${filterCategory || category.value}`,
      query: { search: value },
    });
  }

  function getFilterSearchData(tempProducts) {
    return tempProducts.filter((item) => item.title.includes(search.value));
  }

  const debounceSetSearch = debounce(setSearch, 700);

  return {
    cakeProducts,
    profiteroleProducts,
    popularProducts,
    puddingProducts,
    products,
    productsRender,
    category,
    isHighToLow,
    search,
    sortPriceBtnName,
    getProducts,
    setCategory,
    sortPriceToggle,
    setSearch,
    debounceSetSearch,
  };
});
