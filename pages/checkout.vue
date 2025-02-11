<script setup>
import OrderManInfo from "@/components/checkout/orderManInfo.vue";
import OrderProductsInfo from "@/components/checkout/orderProductsInfo.vue";

const { cartData, final_total } = storeToRefs(useCartStore());
const { getCartData } = useCartStore();

onMounted(() => {
  if (!cartData.value.length) getCartData();
});
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'填寫資料'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <div class="grid grid-cols-2 items-start gap-x-5">
        <section>
          <OrderManInfo>
            <ClientOnly>
              <template #title>
                <h2
                  class="border-primary mb-6 border-b border-solid text-2xl font-bold"
                >
                  訂購人資料
                </h2>
              </template>
            </ClientOnly>
          </OrderManInfo>
        </section>

        <section
          class="border-primary h-full rounded-3xl border-2 border-solid px-10 py-10 text-xl"
        >
          <OrderProductsInfo
            :cartData="cartData"
            :final_total="final_total"
            class="mb-5"
          >
            <template #title>
              <h2
                class="border-primary mb-6 border-b border-solid text-2xl font-bold"
              >
                訂單明細
              </h2>
            </template>
          </OrderProductsInfo>

          <CheckoutFooter />
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
