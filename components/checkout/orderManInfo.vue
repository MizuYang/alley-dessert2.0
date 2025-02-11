<script setup>
import { addAnimate } from "~/utils/animate.client.js";

const { form } = storeToRefs(useOrderConfirmStore());

const formInput = ref([
  {
    inputType: "input",
    type: "text",
    label: "姓名",
    id: "name",
    placeholder: "請輸入姓名",
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*姓名 為必填",
  },
  {
    inputType: "input",
    type: "email",
    label: "E-mail",
    id: "email",
    placeholder: "請輸入信箱, 例：xxx@gmail.com.tw",
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*請輸入正確的信箱, 例：xxx@gmail.com.tw",
    isCustomRule: true,
    rule: (value) => /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/g.test(value),
  },
  {
    inputType: "input",
    type: "tel",
    label: "電話",
    id: "tel",
    placeholder: "請輸入電話 / 例：0912345678",
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*請輸入正確的電話，例: 0912345678",
    isCustomRule: true,
    rule: (value) => /^09\d{8}$/g.test(value),
  },
  {
    inputType: "select",
    label: "付款方式",
    id: "payMethod",
    options: ["-請選擇付款方式-", "超商取貨付款", "信用卡", "Line Pay"],
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*付款方式 為必填",
    isCustomRule: true,
    rule: (value) => value !== "-請選擇付款方式-",
  },
  {
    inputType: "input",
    type: "text",
    label: "地址",
    id: "address",
    placeholder: "請輸入地址",
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*地址 為必填",
  },
]);
const formInputRef = ref({});

const addAnimateFn = ({ element, animateName }) => {
  const fn = addAnimate({ element, animateName });
  if (typeof fn === "function") fn();
};

defineExpose({
  submitForm,
});

function submitForm(fn) {
  console.log(form);
  const result = checkForm();
  if (result) fn();
}
function checkForm() {
  let result = true;
  formInput.value.forEach((item) => {
    const element = formInputRef.value[item.id];
    // 先檢查有特殊規則的欄位
    if (item.isCustomRule) {
      if (!item.rule(form.value[item.id])) {
        fieldInvalidHandler({ element, item });
        result = false;
      } else {
        item.isInvalid = false;
      }
    } else {
      // 檢查必填欄位
      if (!form.value[item.id]) {
        fieldInvalidHandler({ element, item });
        result = false;
      } else {
        item.isInvalid = false;
      }
    }
  });

  return result;
}
function fieldInvalidHandler({ element, item }) {
  item.isInvalid = true;
  addAnimateFn({
    element,
    animateName: "shakeX",
  });
}
</script>

<template>
  <form class="mb-5" @submit.prevent="submitForm">
    <h3>
      <slot name="title"></slot>
    </h3>

    <label
      :for="item.id"
      v-for="item in formInput"
      :key="item.id"
      class="mb-4 inline-block w-full"
    >
      <span class="mb-2 inline-block font-bold">
        {{ item.label }}
      </span>
      <br />
      <template v-if="item.inputType === 'input'">
        <input
          :type="item.type"
          class="focus:ring-primary/50 w-full bg-gray-700/80 px-3 py-2 ring-1 ring-gray-400 focus:outline-none focus:ring-4"
          :class="[
            { '!ring-red-500': item.isInvalid === true },
            { '!ring-green-500': item.isInvalid === false },
          ]"
          :ref="(el) => (formInputRef[item.id] = el)"
          :id="item.id"
          :placeholder="item.placeholder"
          v-model="form[item.id]"
        />
      </template>
      <template v-else-if="item.inputType === 'select'">
        <select
          class="focus:ring-primary/50 w-full bg-gray-700/80 px-3 py-2 ring-1 ring-gray-400 focus:outline-none focus:ring-4"
          :class="[
            { '!ring-red-500': item.isInvalid === true },
            { '!ring-green-500': item.isInvalid === false },
          ]"
          :ref="(el) => (formInputRef[item.id] = el)"
          :id="item.id"
          v-model="form[item.id]"
        >
          <option
            v-for="(opt, idx) in item.options"
            :key="`opt-${idx}`"
            :disabled="idx === 0"
            :selected="idx === 0"
          >
            {{ opt }}
          </option>
        </select>
      </template>

      <!-- 錯誤訊息 -->
      <template v-if="item.isInvalid === true">
        <span class="mt-2 inline-block text-xl font-bold text-red-500">{{
          item.requireErrorMsg
        }}</span>
      </template>
    </label>
  </form>
</template>

<style lang="scss" scoped>
option:disabled {
  color: #fff !important;
  background-color: gray !important;
}
</style>
