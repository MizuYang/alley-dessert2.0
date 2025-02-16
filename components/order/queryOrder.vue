<script setup>
const { getOrder } = useOrderStore();
const { orderId } = storeToRefs(useOrderStore());

const orderRef = ref(null);
const isShow = ref(false);

onMounted(async () => {
  if (orderId.value) {
    await getOrder();
    showOrder();
  }
});

async function showOrder() {
  try {
    isShow.value = true;
    await new Promise((resolve) => setTimeout(resolve, 50));
    nextTick(() => {
      if (orderRef.value) {
        orderRef.value?.classList?.add("order-show-animation");
        orderRef.value?.classList?.remove(
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
  <PageTitle :title="'查詢訂單'" />

  <div class="flex justify-center gap-8">
    <section>
      <OrderForm @showOrder="showOrder" />
    </section>
    <section class="w-0 opacity-0" v-if="isShow" ref="orderRef">
      <OrderTable />
    </section>
  </div>
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
