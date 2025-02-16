<script setup>
const timeline = ref(["確認商品", "填寫資料", "確認付款", "完成訂單"]);
const step = {
  carts: 0,
  checkout: 1,
  "orderPayment-orderId": 2,
  "orderComplated-orderId": 3,
};

const route = useRoute();

const currentStep = computed(() => step[route?.name]);
</script>

<template>
  <header>
    <ul class="flex justify-between">
      <li
        v-for="(item, idx) in timeline"
        :key="`timeline-${item}`"
        class="relative flex w-full items-center justify-center"
      >
        <span
          class="border-primary rounded-br-xl rounded-tl-xl border border-solid px-3 py-2"
          :class="currentStep >= idx && 'bg-primary font-black text-black'"
          >{{ item }}</span
        >

        <template v-if="idx !== timeline.length - 1">
          <span
            class="arrow-animation absolute right-0 inline-block text-[40px]"
          >
            <i class="bi bi-arrow-right"></i>
          </span>
        </template>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.arrow-animation {
  animation: arrow 1s infinite;
}
@keyframes arrow {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
