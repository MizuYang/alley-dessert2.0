<script setup>
const { orderPaymentData } = storeToRefs(useOrderStore());

const tableData = {
  orderId: "訂購編號",
  create_at: "訂購日期",
  name: "姓名",
  email: "Email",
  tel: "電話",
  address: "地址",
  products: "訂購產品",
  total: "總金額",
  pay_method: "付款方式",
  is_paid: "付款狀態",
};
</script>

<template>
  <table class="mx-auto mb-6 min-w-[400px] text-lg">
    <tbody>
      <template v-for="(title, key) in tableData">
        <tr class="border-primary border-b border-solid">
          <td class="inline-block w-[100px] py-2 pe-5 font-black">
            {{ title }}
          </td>
          <td class="py-2">
            <!-- 訂購產品 -->
            <template v-if="key === 'products'">
              <ul>
                <template v-for="(product, key) in orderPaymentData[key]">
                  <li>{{ product.product.title }} x {{ product.qty }}</li>
                </template>
              </ul>
            </template>
            <!-- 付款狀態 -->
            <template v-else-if="key === 'is_paid'">
              <p
                class="font-black"
                :class="
                  orderPaymentData[key] ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ orderPaymentData[key] ? "已付款" : "未付款" }}
              </p>
            </template>
            <template v-else>
              {{ orderPaymentData[key] }}
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
