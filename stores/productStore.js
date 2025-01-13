import { defineStore } from "pinia";

export const useProductStore = defineStore("useProductStore", () => {
  const env = useRuntimeConfig();
  const products = ref([]);
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
      console.log('res: ', res)
      products.value = res.products;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    cakeProducts,
    profiteroleProducts,
    popularProducts,
    puddingProducts,
    products,
    getProducts,
  };
});
