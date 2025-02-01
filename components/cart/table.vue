<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    required: true,
  },
});

// const emits = defineEmits(["updDelProdId"]);
const { updDelProdId } = useCartStore();

const { updateProductQty } = useCartStore();

const deleteProductsId = ref([]);
const timer = ref(null);
const isMouseDown = ref(false);

function updProductCount(action, item) {
  if (!item.originQty) item.originQty = item.qty;

  if (action === "+" && item.qty) {
    item.qty++;
  } else if (action === "-" && item.qty > 1) {
    item.qty--;
  }
}
function handleMouseDown(action, item) {
  isMouseDown.value = true;
  updProductCount(action, item);
  timer.value = setTimeout(() => {
    if (isMouseDown.value) {
      timer.value = setInterval(() => {
        updProductCount(action, item);
      }, 100);
    }
  }, 800);
}
function handleMouseUp() {
  isMouseDown.value = false;
  clearTimeout(timer.value);
  clearInterval(timer.value);
}
function hasEdit(item) {
  return item.originQty && item.originQty !== item.qty;
}
</script>

<template>
  <table class="mb-5 w-full text-center">
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
        class="border-primary hover:bg-primary/10 group/table-line border-y border-solid text-xl"
        :class="deleteProductsId.includes(item.product.id) && '!bg-red-400/15'"
        v-for="item in props.cartData"
        :key="item.id"
      >
        <td class="w-20 py-3 align-middle">
          <input
            type="checkbox"
            class="bg-primary focus:ring-primary/50 size-5 text-red-500 ring-4 checked:text-red-500 hover:text-red-500/90 focus:outline-none"
            :value="item.product.id"
            v-model="deleteProductsId"
            @change="updDelProdId(deleteProductsId)"
          />
        </td>
        <td class="group w-[150px] py-3 align-middle">
          <NuxtLink :to="`/productInfo/${item.product.id}`">
            <div class="relative">
              <img
                :src="item.product.imageUrl"
                class="mx-auto block h-[100px] w-[150px] object-cover"
                :alt="item.product.title"
              />
              <span
                class="bg-primary absolute left-0 top-0 rounded-br-2xl border border-solid border-red-400 px-2 text-base font-bold text-black"
              >
                {{ item.product.category }}
              </span>
              <!-- hover:遮罩 -->
              <div
                class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"
              ></div>
              <img
                class="absolute left-1/2 top-1/2 h-[90px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 group-hover:opacity-100"
                alt="顯示產品細節"
                src="/images/other/product_info.png"
              />
            </div>
          </NuxtLink>
        </td>
        <td class="py-3 align-middle">
          <div
            class="flex items-center justify-start pl-[150px] group-hover/table-line:font-bold"
          >
            <span
              class="me-2 inline-block rounded-md bg-red-600 p-1 text-sm text-white"
            >
              熱門
            </span>
            {{ item.product.title }}
          </div>
        </td>
        <td class="relative py-3 align-middle">
          <div class="flex items-center justify-center">
            <div>
              <button
                type="button"
                class="hover:bg-primary/20 active:bg-primary/25 mx-3 px-2 py-1 text-sm opacity-0 group-hover/table-line:opacity-100"
                :class="{
                  'cursor-not-allowed bg-gray-600 text-black':
                    item.product.qty <= 1,
                  'opacity-100': hasEdit(item),
                }"
                @mousedown="handleMouseDown('-', item)"
                @mouseup="handleMouseUp"
                @mouseleave="handleMouseUp"
              >
                <i class="bi bi-dash-lg"></i>
              </button>
            </div>
            <div>
              {{ item.qty }}
            </div>
            <div>
              <button
                type="button"
                class="hover:bg-primary/20 active:bg-primary/25 mx-3 px-2 py-1 text-sm opacity-0 group-hover/table-line:opacity-100"
                :class="{ 'opacity-100': hasEdit(item) }"
                @mousedown="handleMouseDown('+', item)"
                @mouseup="handleMouseUp"
                @mouseleave="handleMouseUp"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
          <!-- 確定修改 -->
          <div
            class="absolute bottom-6 left-1/2 -translate-x-1/2"
            v-if="hasEdit(item)"
          >
            <button
              type="button"
              class="active:bg-primary/30 hover:bg-primary/25 bg-primary/20 text-primary p-1 text-sm"
              @click="updateProductQty(item)"
            >
              確定修改
            </button>
          </div>
        </td>
        <td class="py-3 align-middle">
          <span class="text-gray-500 line-through"
            >${{ item.product.origin_price }}</span
          >
          ${{ item.product.price }}
        </td>
        <td class="py-3 align-middle">${{ item.final_total }}</td>
        <td class="py-3 align-middle"></td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
