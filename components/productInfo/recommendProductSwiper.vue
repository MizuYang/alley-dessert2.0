<script setup>
const { products } = storeToRefs(useProductStore());
const { getProducts } = useProductStore();

const props = defineProps({
  currentProductId: {
    type: String,
    required: false,
    default: "",
  },
});

const options = ref({
  delay: "0",
  freeMode: true,
  speed: 1500,
});

const filterProduct = computed(() => {
  if (products.value.length && !props.currentProductId) {
    return products.value;
  } else if (!products.value.length || !props.currentProductId) {
    return [];
  } else {
    return products.value.filter(
      (product) => product.id !== props.currentProductId,
    );
  }
});

onMounted(() => {
  if (!products.value.length) getProducts();
});
</script>

<template>
  <div v-if="products.length">
    <IndexProductSwiper
      :slidesPerView="4"
      :products="filterProduct"
      :max-width="1200"
      :options="options"
    />
  </div>
</template>

<style lang="scss" scoped></style>
