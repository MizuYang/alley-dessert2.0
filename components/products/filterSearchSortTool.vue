<script setup>
const {
  category,
  isHighToLow: isHighToLow,
  sortPriceBtnName,
  search,
} = storeToRefs(useProductStore());
const { setCategory, sortPriceToggle, setSearch, debounceSetSearch } =
  useProductStore();

const route = useRoute();
const refs = ref({});

const filterBtnList = ["全部", "蛋糕", "布丁", "泡芙", "舒芙蕾", "熱門"];
const activeStyle =
  "bg-primary/30 font-black border-primary rounded-br-2xl rounded-tl-2xl";

onMounted(() => {
  filterBtnList.includes(route.params.filterCategory)
    ? setCategory(route.params.filterCategory || "全部")
    : setCategory("全部");

  if (route.query.search) setSearch(route.query.search);

  // searchInput 自動 focus
  nextTick(() => {
    const searchInput = refs.value.searchInput;
    if (searchInput) searchInput.focus();
  });
});
</script>

<template>
  <div class="text-primary mb-8">
    <ul
      class="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-normal lg:gap-y-0"
    >
      <li
        v-for="btn in filterBtnList"
        :key="`filterBtn-${btn}`"
        class="border-primary hover:bg-primary/20 shrink-0 border border-solid transition-all hover:rounded-br-2xl hover:rounded-tl-2xl"
        :class="category === btn && activeStyle"
      >
        <button type="button" class="px-4 py-3" @click="setCategory(btn)">
          {{ btn }}
        </button>
      </li>
      <li
        class="border-primary hover:bg-primary/20 border border-solid transition-all hover:rounded-br-2xl hover:rounded-tl-2xl"
        :class="typeof isHighToLow === 'boolean' && activeStyle"
      >
        <button
          type="button"
          class="shrink-0 px-4 py-3"
          @click="sortPriceToggle"
        >
          <i class="bi bi-cash-coin"></i>
          {{ sortPriceBtnName }}
        </button>
      </li>
      <li class="lg:ml-auto ml-0 shrink-0">
        <label for="products-search-input">
          <i class="bi bi-search me-4 text-3xl"></i>
          <input
            type="text"
            class="p-1 px-2 text-2xl text-black outline-none ring-4 focus:ring-gray-400"
            id="products-search-input"
            :ref="(el) => (refs['searchInput'] = el)"
            placeholder="請輸入產品名稱"
            :value="search"
            autofocus
            @input="debounceSetSearch($event.target.value)"
          />
        </label>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
