<script setup></script>

<template>
  <div class="flex gap-x-8">
    <div
      class="border-primary rounded-3xl border-2 border-solid px-16 py-10 text-center"
    >
      <h4 class="border-primary mb-5 border-b border-solid pb-2 text-[32px]">
        訂單編號: <span class="text-primary">123456789</span>
      </h4>
      <div class="flex gap-x-20">
        <div>
          <h4 class="border-primary mb-2 text-xl font-black">訂單資訊</h4>
          <ul class="text-left text-xl">
            <li>購買日期: <time>2025-01-20</time></li>
            <li>付款方式: Line Pay</li>
            <li>
              付款狀態:
              <span class="font-bold text-green-600">已付款</span>
            </li>
            <li>姓名: XXX</li>
            <li>手機: XXX</li>
            <li>信箱: XXX</li>
            <li>地址: XXX</li>
          </ul>
        </div>
        <div class="min-w-[150px]">
          <h4 class="border-primary mb-2 text-xl font-black">產品列表</h4>
          <ul class="text-left text-xl">
            <li>草莓大福</li>
            <li>布丁</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
