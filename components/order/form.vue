<script setup>
import { addAnimate } from "~/utils/animate.client.js";

const emits = defineEmits(["showOrder"]);

const router = useRouter();

const { orderId } = storeToRefs(useOrderStore());

const orderInputRef = ref(null);
let isUserChange = false;
const inputClassList = {
  default: "ring-gray-400 focus:ring-gray/50 ",
  error: "ring-red-500 focus:ring-red/50",
  success: "ring-green-500 focus:ring-green/50",
};

const isOrderIdInputDisabled = computed(() => orderId.value.length === 20);
const inputClass = computed(() => {
  let inputStatus = "default";

  if (orderId.value === "" && !isUserChange) {
    inputStatus = "default";
  } else if (orderId.value.length !== 20) {
    inputStatus = "error";
    isUserChange = true;
  } else {
    inputStatus = "success";
    isUserChange = true;
  }
  return inputClassList[inputStatus];
});
const btnClass = computed(() =>
  isOrderIdInputDisabled.value
    ? "bg-red-800 hover:bg-red-800/90 active:bg-red-800/80"
    : "bg-gray-400 hover:bg-gray-400/90 active:bg-gray-400/80 cursor-not-allowed",
);

onMounted(() => {
  if (orderInputRef.value) orderInputRef.value.focus();
});

function addAnimateFn({ element, animateName }) {
  const fn = addAnimate({ element, animateName });
  if (typeof fn === "function") fn();
}
function getOeder() {
  if (!isOrderIdInputDisabled.value) {
    if (orderInputRef.value) orderInputRef.value.focus();
    addAnimateFn({
      element: orderInputRef.value,
      animateName: "shakeX",
    });
    return;
  }
  emits("showOrder");
}
function clearOrder() {
  orderId.value = "";
  isUserChange = false;
  router.push("/order");
  orderInputRef.value.focus();
}
</script>

<template>
  <form
    class="border-primary rounded-3xl border-2 border-solid px-16 py-10 text-center"
  >
    <h3 class="text-primary mb-8 text-xl">請輸入訂單編號 ( 20碼 )</h3>
    <input
      type="text"
      class="mb-4 w-full bg-gray-700/80 px-3 py-2 text-xl ring-1 focus:outline-none focus:ring-4"
      :class="inputClass"
      placeholder="請輸入訂單編號 (20碼)"
      v-model.trim="orderId"
      ref="orderInputRef"
    />
    <p
      class="text-left text-xl font-bold text-red-500"
      v-if="!isOrderIdInputDisabled && isUserChange"
    >
      *訂單編號
      {{ orderId.length < 20 ? "不足" : "超過" }}
      20碼
    </p>
    <button
      type="button"
      class="text-primary mx-auto my-5 block w-full rounded-xl px-4 py-1 text-2xl"
      :class="btnClass"
      @click="getOeder"
    >
      送出
    </button>

    <template v-if="orderId">
      <button
        type="button"
        class="text-primary mx-auto my-5 block w-full rounded-xl bg-slate-400/50 px-4 py-1 text-2xl"
        @click="clearOrder"
      >
        清除
      </button>
    </template>
  </form>
</template>

<style lang="scss" scoped></style>
