<script setup>
import orderManInfo from "@/components/checkout/orderManInfo.vue";
</script>

<template>
  <main class="pb-14 pt-10">
    <div>
      <PageTitle :title="'填寫資料'" />
    </div>

    <div class="mx-auto max-w-[1200px]">
      <CartTimeLine class="mb-12" />

      <section>
        <orderManInfo>
          <template #formTitle>
            <h2
              class="border-primary mb-6 border-b border-solid text-2xl font-bold"
            >
              訂購人資料
            </h2>
          </template>
        </orderManInfo>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
