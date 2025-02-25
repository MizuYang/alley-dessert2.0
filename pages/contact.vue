<script setup>
import { addAnimate } from "~/utils/animate.client.js";

const form = ref({ category: "-請選擇聯絡類別-" });
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
    label: "聯絡類別",
    id: "category",
    options: [
      "-請選擇聯絡類別-",
      "退 / 換貨問題、我收到的東西有破損",
      "重複付款或其他付款問題",
      "我收到的產品有發霉、其它品質問題",
      "優惠券相關問題",
      "我沒收到訂購的產品",
      "我要加盟",
      "其它問題 / 請詳細描述",
    ],
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*類別 為必填",
    isCustomRule: true,
    rule: (value) => value !== "-請選擇聯絡類別-",
  },
  {
    inputType: "input",
    type: "text",
    label: "留言",
    id: "message",
    placeholder: "請輸入留言",
    isInvalid: null, // null: 未檢查, false: 通過, true: 未通過
    requireErrorMsg: "*留言 為必填",
  },
]);
const formInputRef = ref({});

const addAnimateFn = ({ element, animateName }) => {
  const fn = addAnimate({ element, animateName });
  if (typeof fn === "function") fn();
};

function submitForm() {
  console.log(form);
  checkForm();
}
function checkForm() {
  formInput.value.forEach((item) => {
    const element = formInputRef.value[item.id];
    // 先檢查有特殊規則的欄位
    if (item.isCustomRule) {
      !item.rule(form.value[item.id])
        ? fieldInvalidHandler({ element, item })
        : (item.isInvalid = false);
    } else {
      // 檢查必填欄位
      !form.value[item.id]
        ? fieldInvalidHandler({ element, item })
        : (item.isInvalid = false);
    }
  });
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
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'聯絡我們'" />

      <div class="mx-auto flex max-w-[1200px] justify-center">
        <form
          class="border-primary mx-auto w-full max-w-[700px] rounded-3xl border-2 border-solid px-16 py-10 text-xl"
          @submit.prevent="submitForm"
        >
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

          <button
            type="submit"
            class="text-primary mx-auto my-5 block w-full rounded-xl bg-red-800 px-4 py-1 text-2xl hover:bg-red-800/90 active:bg-red-800/80"
          >
            送出
          </button>

          <p class="text-primary">
            送出內容後，我們將在 3~5 個工作天內回覆您。
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
option:disabled {
  color: #fff !important;
  background-color: gray !important;
}
</style>
