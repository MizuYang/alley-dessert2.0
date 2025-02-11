<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    required: true,
  },
  isCartDataLoading: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["nextStep"]);

const isDisabled = computed(
  () => !props.cartData.length || props.isCartDataLoading,
);
</script>

<template>
  <footer class="flex items-center justify-between">
    <NuxtLink
      to="/carts"
      class="bg-gray-800 px-3 py-2 text-xl hover:bg-gray-700/90 active:bg-gray-600/80"
      >上一步</NuxtLink
    >
    <button
      type="button"
      class="px-3 py-2 text-xl"
      :class="
        isDisabled
          ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400/90 active:bg-gray-400/80'
          : 'bg-red-800 hover:bg-red-700/90 active:bg-red-600/80'
      "
      @click="isDisabled || emits('nextStep')"
      :disabled="isDisabled"
    >
      下一步
    </button>
  </footer>
</template>

<style lang="scss" scoped></style>
