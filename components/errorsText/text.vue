<script setup>
const props = defineProps({
  errorTitle: {
    type: String,
    default: "出現錯誤",
  },
  errorCode: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div
    class="text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg"
  >
    <div class="mb-3 flex items-center">
      <h2 class="text-2xl font-black">
        {{ errorTitle }}
        <template v-if="errorCode !== null"
          >錯誤碼: {{ errorCode }}</template
        >
      </h2>
    </div>

    <slot name="errorContent"></slot>
  </div>
</template>

<style lang="scss" scoped></style>
