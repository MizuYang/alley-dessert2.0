<script setup>
const props = defineProps({
  deleteProductsId: {
    type: Array,
    required: true,
    default: [],
  },
});

const { modalShow } = useCartDelModalStore();
</script>

<template>
  <div
    class="mb-6 flex items-center"
    :class="deleteProductsId.length ? 'justify-between' : 'justify-end'"
  >
    <button
      type="button"
      class="border-primary relative border border-solid px-3 py-2 hover:bg-red-500/30 active:bg-red-500/40"
      v-if="deleteProductsId.length"
      @click="modalShow"
    >
      刪除

      <span
        class="bg-primary-500 absolute -right-7 -top-1 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-base font-bold"
      >
        {{ deleteProductsId.length }}
      </span>
    </button>
    <button
      type="button"
      class="border-primary border border-solid px-3 py-2 hover:bg-red-500/30 active:bg-red-500/40"
      @click="modalShow('all')"
    >
      全部刪除
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
