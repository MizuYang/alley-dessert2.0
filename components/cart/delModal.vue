<script setup>
const { modalHide } = useCartDelModalStore();
</script>

<template>
  <div
    class="fixed -inset-20 z-[9999] flex items-center justify-center bg-black/50"
    @click.stop="modalHide"
  >
    <div class="bg-black" @click.stop>
      <header class="border-primary border border-b-0 border-solid p-3">
        <i class="bi bi-exclamation-octagon-fill text-red-600"></i>
        刪除
      </header>
      <main class="border-primary border border-b-0 border-solid p-5 text-lg">
        您確定要刪除
        <span class="font-bold text-red-600">勾選商品</span>
        嗎？(此動作無法恢復)
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
          class="inline-block bg-red-600 px-3 py-[5.5px] text-white hover:bg-red-600/80 active:bg-red-600/85"
        >
          刪除
        </button>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
