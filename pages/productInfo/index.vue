<script setup>
const { category, search } = storeToRefs(useProductStore());

const router = useRouter();

onMounted(() => {
  router.push(`/products/${category.value || "全部"}?search=${search.value}`);
});
</script>

<template>
  <main class="pb-14 pt-10"></main>
</template>

<style lang="scss" scoped></style>
