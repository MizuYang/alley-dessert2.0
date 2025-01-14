<script setup>
const { filter, isLowToHigh } = storeToRefs(useProductStore());
const { setFilter, sortToggle } = useProductStore();

const route = useRoute();

const filterBtnList = ["全部", "蛋糕", "布丁", "泡芙", "舒芙蕾", "熱門"];
const activeStyle = "bg-primary/30 font-black border-primary";

onMounted(() => {
  filterBtnList.includes(route.params.filterCategory)
    ? setFilter(route.params.filterCategory)
    : setFilter("全部");
});
</script>

<template>
  <div class="text-primary mb-8">
    <ul class="mx-auto flex max-w-[1200px] gap-x-8">
      <li
        v-for="btn in filterBtnList"
        :key="`filterBtn-${btn}`"
        class="border-primary hover:bg-primary/20 border border-solid transition-all hover:-translate-y-[2px] hover:rounded-br-2xl hover:rounded-tl-2xl"
        :class="filter === btn && activeStyle"
      >
        <button type="button" class="px-5 py-3" @click="setFilter(btn)">
          {{ btn }}
        </button>
      </li>
      <li
        class="border-primary hover:bg-primary/20 border border-solid transition-all hover:-translate-y-[2px] hover:rounded-br-2xl hover:rounded-tl-2xl"
        :class="typeof isLowToHigh === 'boolean' && activeStyle"
      >
        <button type="button" class="px-5 py-3" @click="sortToggle">
          <i class="bi bi-cash-coin"></i>
          {{ isLowToHigh ? "低到高" : "高到低" }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
