<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["updDelProdId"]);

const deleteProductsId = ref([]);
</script>

<template>
  <table class="w-full text-center">
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
        class="border-primary hover:bg-primary/15 group/table-line border-y border-solid text-xl"
        :class="deleteProductsId.includes(item.product.id) && 'bg-primary/10'"
        v-for="item in props.cartData"
        :key="item.id"
      >
        <td class="w-20 py-3 align-middle">
          <input
            type="checkbox"
            class="bg-primary focus:ring-primary/50 size-5 text-red-500 ring-4 checked:text-red-500 hover:text-red-500/90 focus:outline-none"
            :value="item.product.id"
            v-model="deleteProductsId"
            @change="emits('updDelProdId', deleteProductsId)"
          />
        </td>
        <td class="group relative w-[200px] py-3 align-middle">
          <NuxtLink :to="`/productInfo/${item.product.id}`">
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
            <!-- hover:遮罩 -->
            <div
              class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"
            ></div>
            <img
              class="absolute left-1/2 top-1/2 h-[120px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 group-hover:opacity-100"
              alt="顯示產品細節"
              src="/images/other/product_info.png"
            />
          </NuxtLink>
        </td>
        <td class="py-3 align-middle">
          <div
            class="flex items-center justify-center group-hover/table-line:font-bold"
          >
            <span
              class="me-2 inline-block rounded-md bg-red-600 p-1 text-sm text-white"
            >
              熱門
            </span>
            {{ item.title }}
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
