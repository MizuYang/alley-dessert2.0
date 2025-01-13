import { defineStore } from "pinia";

export const useProductStore = defineStore(
  "useProductStore",
  () => {
    const env = useRuntimeConfig();
    const products = ref([]);
    const popularProducts = computed(() => products.value.filter((item) => item.popular >= 3))

    async function getProducts() {
      const api = `${env.public.apiBaseUrl}/api/${env.public.apiPath}/products/all`;

      try {
        const res = await $fetch(api);
        products.value = res.products;
      } catch (err) {
        console.error(err);
      }
    }

    return {
      popularProducts,
      products,
      getProducts,
    };
  },
);
