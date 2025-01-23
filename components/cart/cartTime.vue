<script setup>
const props = defineProps({
  maxWidth: {
    type: Number,
    default: 1200,
  },
});
const timeline = ref(["確認商品", "填寫資料", "確認付款", "完成訂單"]);
const step = {
  cart: 0,
  checkout: 1,
  doubleCheck: 2,
  completed: 3,
};

const route = useRoute();

const currentStep = computed(() => (route?.carts ? step[route.carts] : 0));
const arrowTranslate = computed(() => `${props.maxWidth / 4 / 4}px`);
</script>

<template>
  <header>
    <ul class="flex justify-between text-2xl">
      <li
        v-for="(item, idx) in timeline"
        :key="`timeline-${item}`"
        class="flex w-full items-center"
      >
        <span
          class="border-primary rounded-br-3xl rounded-tl-3xl border border-solid px-3 py-2"
          :class="currentStep === idx && 'bg-primary text-black'"
          >{{ item }}</span
        >

        <template v-if="idx !== timeline.length - 1">
          <i
            class="bi bi-arrow-right inline-block text-[40px]"
            :style="`transform: translateX(${arrowTranslate})`"
          ></i>
        </template>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped></style>
