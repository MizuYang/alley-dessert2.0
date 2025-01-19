<script setup>
const order = ref(null);
const isShow = ref(false);

async function showOrder(orderId) {
  try {
    isShow.value = true;
    await new Promise((resolve) => setTimeout(resolve, 50));
    nextTick(() => {
      if (order.value) {
        order.value?.classList?.add("order-show-animation");
        order.value?.classList?.remove(
          "order-hide-animation",
          "w-0",
          "opacity-0",
        );
      }
    });
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'查詢訂單'" />

      <div class="flex justify-center gap-8">
        <section>
          <OrderForm @showOrder="showOrder" />
        </section>
        <section class="w-0 opacity-0" v-if="isShow" ref="order">
          <OrderContent />
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.order-show-animation {
  transform-origin: left;
  animation: order-show-animation 0.5s ease-in-out;
}
.order-hide-animation {
  transform-origin: left;
  animation: order-hide-animation 0.5s ease-in-out forwards;
}
@keyframes order-show-animation {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes order-hide-animation {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}
</style>
