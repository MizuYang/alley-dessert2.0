<script setup>
const route = useRoute();
const router = useRouter();

const { getOrderId } = useOrderStore();

function goToOrderPage() {
  getOrderId(route?.params?.orderId);
  router.push(`/order/${route?.params?.orderId}`);
}
</script>

<template>
  <div class="mx-auto max-w-[400px] text-start text-lg">
    <div class="mb-24">
      <h2 class="mb-5 text-center text-xl font-black">
        感謝您的訂購 <span class="text-green-500">(已付款)</span>
      </h2>
      <p>
        <span class="mb-5 inline-block"
          >您訂購的商品將在近期安排出貨，請留意簡訊通知或配送人員的電話。</span
        >
        <span class="mb-5 inline-block"
          >如果您對我們的產品有任何想法，歡迎聯</span
        >絡我們。 祝您有美好的一天。
      </p>
    </div>

    <ul class="text-center">
      <li>
        <NuxtLink
          to="/contact"
          class="border-primary hover:bg-primary/10 mb-5 block border border-solid py-2"
        >
          <i class="bi bi-envelope-fill"></i>
          聯絡我們
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/products"
          class="border-primary hover:bg-primary/10 mb-5 block border border-solid py-2"
        >
          <i class="bi bi-cart4"></i>
          繼續購物
        </NuxtLink>
      </li>
      <template v-if="route?.params?.orderId">
        <li>
          <button
            type="button"
            class="border-primary hover:bg-primary/10 mb-5 block w-full border border-solid py-2"
            @click="goToOrderPage"
          >
            <i class="bi bi-cart4"></i>
            訂單查詢
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
