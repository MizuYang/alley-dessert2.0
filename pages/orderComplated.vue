<script setup>
import ErrorText from "@/components/errorsText/text.vue";

const { orderPaymentData } = storeToRefs(useOrderStore());
const { orderId, getOrder } = useOrderStore();

const router = useRouter();

let isOrderLoading = ref(true);
const notFoundOrder = ref(false);

onMounted(async () => {
  await getOrder();

  if (!orderPaymentData?.value?.id) {
    // 找不到訂單
    notFoundOrder.value = true;
    return;
  } else if (orderPaymentData?.value?.is_paid === false) {
    // 訂單未付款
    router.push(`/orderPayment?orderId=${orderId}`);
    return;
  }

  isOrderLoading.value = false;
});
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'確認付款'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <template v-if="!isOrderLoading">
        <div class="flex">
          <OrderComplatedText />
          <OrderTable />
        </div>
      </template>

      <template v-else-if="notFoundOrder">
        <ErrorText errorTitle="找不到訂單" errorCode="404">
          <template #errorContent>
            <p>請重新確認訂單編號</p>
          </template>
        </ErrorText>
      </template>

      <template v-else>
        <LoadingText />
      </template>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
