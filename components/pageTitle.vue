<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-primary">
    <h2 class="mb-12 text-center">
      <span
        class="before:bg-primary after:bg-primary relative text-2xl before:absolute before:right-full before:top-1/2 before:h-[1px] before:w-[120px] before:-translate-x-16 after:absolute after:left-full after:top-1/2 after:h-[1px] after:w-[120px] after:translate-x-16"
        >{{ props.title }}</span
      >
    </h2>
  </div>
</template>

<style lang="scss" scoped></style>
