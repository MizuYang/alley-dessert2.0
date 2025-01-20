<script setup></script>

<template>
  <div
    class="border-primary relative rounded-3xl border-2 border-solid px-16 py-10"
  >
    <div class="px-[120px]">
      <h3 class="mb-8 text-[32px]">您目前沒有收藏的商品</h3>
      <div class="mb-5">
        <p class="text-left text-xl leading-normal">
          若發現喜歡的商品 <br />
          可以點擊產品右上方的愛心加入收藏 <br />
          您的支持就是我們最大的動力! <br />
          祝您購物愉快！
        </p>
      </div>
    </div>

    <button
      type="button"
      class="group-active:bg-red-600/80text-primary m-auto mx-auto block rounded-xl bg-red-800 px-4 py-3 text-2xl hover:bg-red-800/90 active:bg-red-800/80 group-hover:bg-red-700/90"
    >
      <i class="bi bi-cart-check-fill"></i>
      返回購物
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
