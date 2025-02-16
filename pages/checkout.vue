<script setup>
import OrderManInfo from "@/components/checkout/orderManInfo.vue";
import OrderProductsInfo from "@/components/checkout/orderProductsInfo.vue";

const { cartData, final_total } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

const { sendOrder, getOrderId } = useOrderStore();

const router = useRouter();

const orderManInfoRef = ref(null);
const isCartDataLoading = ref(true);

onMounted(async () => {
  if (!cartData.value.length) await getCartData();
  if (!cartData.value.length) router.push("/carts");
  isCartDataLoading.value = false;
});

async function nextStep() {
  const orderId = await orderManInfoRef.value.submitForm(sendOrder);

  if (orderId) {
    getOrderId(orderId);
    router.push(`/orderPayment?orderId=${orderId}`);
  }
}
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'填寫資料'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <div class="grid grid-cols-2 items-start gap-x-5">
        <section
          class="border-primary mx-auto w-full rounded-3xl border-2 border-solid px-10 py-10 text-xl"
        >
          <OrderManInfo ref="orderManInfoRef">
            <template #title>
              <h2
                class="border-primary mb-6 border-b border-solid text-2xl font-bold"
              >
                訂購人資料
              </h2>
            </template>
          </OrderManInfo>

          <CheckoutFooter
            :isCartDataLoading="isCartDataLoading"
            :cartData="cartData"
            @nextStep="nextStep"
          />
        </section>

        <section
          class="border-primary relative h-full rounded-3xl border-2 border-solid px-10 py-10 text-xl"
        >
          <template v-if="!isCartDataLoading && cartData.length">
            <OrderProductsInfo :cartData="cartData" :final_total="final_total">
              <template #title>
                <h2
                  class="border-primary mb-6 border-b border-solid text-2xl font-bold"
                >
                  訂單明細
                </h2>
              </template>
            </OrderProductsInfo>
          </template>

          <template v-else>
            <LoadingText />
          </template>
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
