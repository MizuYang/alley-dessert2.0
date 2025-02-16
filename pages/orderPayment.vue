<script setup>
import ErrorText from "@/components/errorsText/text.vue";

const { orderPaymentData } = storeToRefs(useOrderStore());
const { orderId, getOrder } = useOrderStore();

const router = useRouter();

const { isPaymentModalShow } = storeToRefs(useOrderPaymentModalStore());
const { modalShow } = useOrderPaymentModalStore();

let isOrderLoading = ref(true);
const notFoundOrder = ref(false);

onMounted(async () => {
  await getOrder();

  if (!orderPaymentData?.value?.id) {
    notFoundOrder.value = true;
    return;
  }
  if (orderPaymentData?.value?.is_paid) {
    router.push(`/orderComplated?orderId=${orderId}`);
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
        <OrderTable />

        <div class="text-center">
          <template v-if="orderPaymentData.is_paid === false">
            <button
              type="button"
              class="bg-green-800 px-3 py-2 text-xl hover:bg-green-700/90 active:bg-green-600/80"
              @click="modalShow"
            >
              付款
            </button>
          </template>
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

  <transition name="fade">
    <OrderPaymentModal v-if="isPaymentModalShow" />
  </transition>
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
