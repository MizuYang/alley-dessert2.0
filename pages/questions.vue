<script setup>
const questions = ref([
  {
    title: "如何購買？",
    content: [
      "將喜歡的甜點加到購物車",
      "在購物車頁確認您購買的產品及數量",
      "填寫訂購人資料",
      "確認資料後，完成付款後即可。",
    ],
    isListDecimal: true,
  },
  { title: "購買需要先註冊會員嗎？", content: ["不必註冊會員即可購買。"] },
  {
    title: "有哪些付款方式？",
    content: ["目前可以信用卡付款、 LINE PAY 、超商付款。"],
  },
  {
    title: "會有發票嗎？可以開統編發票嗎？",
    content: [
      "每筆訂單都會成立電子發票 email 給您。",
      "也可以開立統編發票，需請在結帳資料頁填寫完整。",
    ],
    isListDecimal: true,
  },
  {
    title: "有哪些配送方式？",
    content: [
      "低溫宅配單筆運費160 元，滿 1000 元免運。快遞運費依送達地址計算。自取免運。",
    ],
  },
  {
    title: "今天下單有辦法明天送達嗎？",
    content: [
      "目前所有品項都是訂購後才通知店家備料製作，需要準備時間，所以無法隔日送達。",
    ],
  },
  {
    title: "請問可以冷藏或冷凍嗎？可存放多久？退冰後如何食用？",
    content: [
      "所有的產品都是建議在五天內吃完唷！而冷凍會影響口感，所以不建議冷凍。",
    ],
  },
  {
    title: "收到的商品有缺少或損壞怎麼辦？",
    content: [
      "若收到商品嚴重破損或缺品，請於收到 2 小時內拍照，",
      `提供到 <a href="https://equatorial-alloy-23b.notion.site/Mizu_-dc646b31574641de856dd54ac3f6cc1b" class="underline" target="_blank">本店粉絲團</a> 或來信客服信箱： <a href="mailto:psdk55052004@gmail.com" class="underline">psdk55052004@gmail.com</a> 和我們反應。`,
    ],
    isListDecimal: true,
    isInnerHTML: true,
  },
  {
    title: "買太多吃不完可以退貨嗎？和想像的大小不同可以退貨嗎？",
    content: [
      `很抱歉，生鮮食品類商品售出後 <span class="text-red-500 font-bold bg-primary fw-bold px-1">不享有鑑賞期及退換貨服務</span> 。`,
      "（自 105 年 1 月 1 日起，生鮮食品類不適用於消費者保護法第 19 條，不享有 7 天鑑賞期。）",
      "請謹慎評估後購買。",
    ],
    isInnerHTML: true,
    isListCircle: true,
  },
]);
</script>

<template>
  <main class="text-primary bg-black pb-14 pt-10">
    <PageTitle :title="'常見問題'" />

    <ul class="mx-auto max-w-[1200px]">
      <li v-for="(que, idx) in questions" :key="`que-${idx}`" class="mb-5">
        <div class="border-primary cursor-pointer border border-solid p-4">
          <h3 class="flex items-center">
            <span class="me-3 inline-block text-lg font-black"
              >{{ idx + 1 }}.</span
            >
            <span class="text-2xl font-black">{{ que.title }}</span>
          </h3>
        </div>
        <div class="border-primary border border-solid p-4">
          <ul>
            <li
              class="list-inside text-xl"
              :class="[
                que.isListDecimal && 'list-decimal',
                que.isListCircle && 'list-[circle]',
              ]"
              v-for="(content, idx) in que.content"
              :key="`que-content-${idx}`"
            >
              <template v-if="que.isInnerHTML"
                ><span v-html="content"></span
              ></template>
              <template v-else>{{ content }}</template>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
