<script setup>
import { addAnimate } from "~/utils/animate.client.js";

const emits = defineEmits(["showOrder"]);

const route = useRoute();
const router = useRouter();

const { orderId } = storeToRefs(useOrderStore());
const { getOrderId, clearOrderData } = useOrderStore();

const orderInputRef = ref(null);
const inputClass = ref(null);
let isUserChange = ref(null);
const inputClassList = {
  default: "ring-gray-400 focus:ring-gray-400/50 ",
  error: "ring-red-500 focus:ring-red-500/50",
  success: "ring-green-500 focus:ring-green-500/50",
};
const myOrderId = ref(orderId.value);

const isOrderIdInputDisabled = computed(() => myOrderId.value?.length === 20);
const btnClass = computed(() =>
  isOrderIdInputDisabled.value
    ? "bg-red-800 hover:bg-red-800/90 active:bg-red-800/80"
    : "bg-gray-400 hover:bg-gray-400/90 active:bg-gray-400/80 cursor-not-allowed",
);

onMounted(() => {
  if (orderInputRef.value) orderInputRef.value.focus();
  if (route.query.orderId) {
    myOrderId.value = route.query.orderId;
    getOeder();
  }
});

function addAnimateFn({ element, animateName }) {
  const fn = addAnimate({ element, animateName });
  if (typeof fn === "function") fn();
}
function getInputStatusClass() {
  let inputStatus = "default";

  if (myOrderId.value === "" && !isUserChange) {
    inputStatus = "default";
  } else if (myOrderId.value.length !== 20) {
    inputStatus = "error";
  } else {
    inputStatus = "success";
  }
  inputClass.value = inputClassList[inputStatus];
}
function getOeder() {
  isUserChange.value = true;
  getInputStatusClass();

  if (!isOrderIdInputDisabled.value) {
    if (orderInputRef.value) orderInputRef.value.focus();
    addAnimateFn({
      element: orderInputRef.value,
      animateName: "shakeX",
    });
    return;
  }
  console.log("myOrderId.value: ", myOrderId.value);
  getOrderId(myOrderId.value);
  // router.replace({ path: `/order`, query: { orderId: myOrderId.value } });
  router.replace(`/order?orderId=${myOrderId.value}`);
  setTimeout(() => {
    emits("showOrder");
  }, 100);
  // emits("showOrder");
}
function clearOrder() {
  myOrderId.value = "";
  isUserChange.value = false;
  clearOrderData();
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
      v-model.trim="myOrderId"
      ref="orderInputRef"
    />
    <p
      class="text-left text-xl font-bold text-red-500"
      v-if="!isOrderIdInputDisabled && isUserChange !== null"
    >
      *訂單編號
      {{ myOrderId.length < 20 ? "不足" : "超過" }}
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

    <template v-if="myOrderId">
      <button
        type="button"
        class="text-primary mx-auto my-5 block w-full rounded-xl bg-slate-400/50 px-4 py-1 text-2xl hover:bg-slate-400/55 active:bg-slate-400/60"
        @click="clearOrder"
      >
        清除
      </button>
    </template>
  </form>
</template>

<style lang="scss" scoped></style>
