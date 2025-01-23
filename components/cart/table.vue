<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    required: true,
  },
});

const deleteProductsId = ref([]);
</script>

<template>
  <table class="w-full text-center">
    <!-- <caption>標題</caption> -->
    <thead class="align-middle">
      <tr class="border-primary border-b-2 border-solid text-xl font-bold">
        <th scope="col" class="pb-2">
          <i class="bi bi-check2-square"></i>
        </th>
        <th scope="col" class="pb-2">圖片</th>
        <th scope="col" class="pb-2">產品名稱</th>
        <th scope="col" class="pb-2">數量</th>
        <th scope="col" class="pb-2">單價</th>
        <th scope="col" class="pb-2">小計</th>
      </tr>
    </thead>

    <tbody>
      <tr
        class="border-primary border-y border-solid text-3xl"
        v-for="item in props.cartData"
        :key="item.id"
      >
        <td class="w-20 py-3 align-middle">
          <input
            type="checkbox"
            class="bg-primary focus:ring-primary/50 size-5 text-red-500 ring-4 checked:text-red-500 hover:text-red-500/90 focus:outline-none"
            :value="item.id"
            v-model="deleteProductsId"
          />
        </td>
        <td class="relative w-[200px] py-3 align-middle">
          <img
            :src="item.imageUrl"
            width="200"
            height="160"
            class="mx-auto block object-cover"
            :alt="item.title"
          />
          <span
            class="bg-primary absolute left-0 top-3 rounded-br-2xl border border-solid border-red-400 px-2 text-base font-bold text-black"
          >
            {{ item.category }}
          </span>
        </td>
        <td class="py-3 align-middle">
          <div class="flex flex-col items-center justify-center">
            {{ item.title }}
            <span
              class="mt-3 inline-block bg-red-600 p-1 text-base font-semibold text-white"
            >
              熱門產品
            </span>
          </div>
        </td>
        <td class="py-3 align-middle">
          {{ item.qty }}
        </td>
        <td class="py-3 align-middle">
          <span class="text-gray-500 line-through"
            >${{ item.origin_price }}</span
          >
          ${{ item.price }}
        </td>
        <td class="py-3 align-middle">${{ item.final_total }}</td>
        <td class="py-3 align-middle"></td>
      </tr>
    </tbody>

    <!-- <tfoot>
      <tr>
        <td>表尾內容</td>
      </tr>
    </tfoot> -->
  </table>
</template>

<style lang="scss" scoped></style>
