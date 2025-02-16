<script setup>
const { modalHide } = useOrderPaymentModalStore();

const { payment } = useOrderStore();
</script>

<template>
  <div
    class="fixed -inset-20 z-[9999] flex items-center justify-center bg-black/50"
    @click.stop="modalHide"
  >
    <div class="min-w-[400px] bg-black" @click.stop>
      <header class="border-primary border border-b-0 border-solid p-3">
        <i class="bi bi-exclamation-octagon-fill"></i>
        檢查資料及付款
      </header>
      <main class="border-primary border border-b-0 border-solid p-5 text-lg">
        請確認您的資料是否正確
        <br />
        如果資料正確，即可確認付款。
      </main>
      <footer
        class="border-primary border border-t-0 border-solid p-5 pt-0 text-center"
      >
        <button
          type="button"
          class="border-primary hover:bg-primary/20 active:bg-primary/25 me-3 inline-block border border-solid px-3 py-1"
          @click="modalHide"
        >
          取消
        </button>
        <button
          type="button"
          class="inline-block bg-green-600 px-3 py-[5.5px] text-white hover:bg-green-600/80 active:bg-green-600/85"
          @click="payment"
        >
          確認付款
        </button>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
