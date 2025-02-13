<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    default: () => [],
  },
  final_total: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div>
    <h3>
      <ClientOnly>
        <slot name="title"></slot>
      </ClientOnly>
    </h3>

    <table class="w-full">
      <thead class="align-middle">
        <tr class="border-primary border-b-2 border-solid text-xl font-bold">
          <th scope="col" class="pb-2">圖片</th>
          <th scope="col" class="pb-2">名稱</th>
          <th scope="col" class="pb-2">數量</th>
          <th scope="col" class="pb-2">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-primary hover:bg-primary/10 group/table-line border-y border-solid text-xl"
          v-for="item in props.cartData"
          :key="item.id"
        >
          <td class="group w-[100px] py-3 align-middle">
            <div class="relative">
              <img
                :src="item.product.imageUrl"
                class="mx-auto block h-[80px] w-[100px] object-cover"
                :alt="item.product.title"
              />
            </div>
          </td>
          <td class="py-3 text-center align-middle">
            {{ item.product.title }}
          </td>
          <td class="relative py-3 text-center align-middle">
            {{ item.qty }}
          </td>
          <td class="py-3 text-center align-middle">${{ item.final_total }}</td>
          <td class="py-3 align-middle"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="py-3 text-right text-xl font-bold">
            總計: ${{ props.final_total }} 元
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
