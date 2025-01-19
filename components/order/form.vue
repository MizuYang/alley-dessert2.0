<script setup>
import { addAnimation } from "~/utils/animation.client.js";

const emits = defineEmits(["showOrder"]);

const orderId = ref("11111111111111111111");
const orderInput = ref(null);
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
  } else if (orderId.value.length < 20) {
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
const addAnimationFn = ({ element, animateName }) => {
  const fn = addAnimation({ element, animateName });
  if (typeof fn === "function") fn();
};

function getOeder() {
  if (!isOrderIdInputDisabled.value) {
    if (orderInput.value) orderInput.value.focus();
    addAnimationFn({
      element: orderInput.value,
      animateName: "shakeX",
    });
    return;
  }

  emits("showOrder", orderId.value);
}
</script>

<template>
  <form
    class="border-primary rounded-3xl border-2 border-solid px-16 py-10 text-center"
  >
    <h3 class="text-primary mb-8 text-[32px]">請輸入訂單編號( 20碼 )</h3>
    <input
      type="text"
      class="mb-4 w-full bg-gray-700/80 px-3 py-2 text-xl ring-1 focus:outline-none focus:ring-4"
      :class="inputClass"
      placeholder="請輸入訂單編號 (20碼)"
      v-model.trim="orderId"
      ref="orderInput"
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
  </form>
</template>

<style lang="scss" scoped></style>
