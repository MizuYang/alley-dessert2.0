<script setup>
const homeSsction3Swiper = ref(null);
const swiper = useSwiper(homeSsction3Swiper, {
  // effect: 'creative',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 30000,
  },
  navigation: true,
  // pagination: true,
  // pagination: {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return `<span class="${className}"></span>`;
  //   },
  // },
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     shadow: true,
  //     translate: [0, 0, -400],
  //   },
  // },
});
const env = useRuntimeConfig();
const popular = ref([]);
const products = ref([]);
const temp_product = ref([]);

onMounted(() => {
  getProducts();
});

async function getProducts() {
  console.log("env: ", env.public);
  const api = `${env.public.apiBaseUrl}/api/${env.public.apiPath}/products/all`;

  try {
    const res = await $fetch(api);
    console.log("getProducts: ", res);
    const popularProducts = res.products.filter((item) => item.popular >= 3);
    console.log("popular: ", popularProducts);
    popular.value = structuredClone(popularProducts);
    products.value = res.products;
    temp_product.value = res.products;
  } catch (err) {
    console.error(err);
  }
}
function viewProduct(id) {
  this.$router.push("/products");
  setTimeout(() => {
    this.$router.push(`/one_product/${id}`);
  });
}
function addCart(id) {
  this.isLoading = true;
  this.addProductData.product_id = id;
  const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
  this.$http.post(api, { data: this.addProductData }).then((res) => {
    this.isLoading = false;
    this.$httpMessageState(res.data.success, "加入購物車");
    this.emitter.emit("get_cart"); //* Navbar更新
  });
}
// function getPopularProducts() {

//   this.popular = this.products.filter((item) => item.popular >= 3);
//   if (this.popular.length > 0) {
//     this.swiperShow = true;
//   }
// }
</script>

<template>
  <div class="text-primary">
    <ClientOnly>
      <swiper-container
        ref="homeSsction3Swiper"
        :init="false"
        class="flex justify-center"
      >
        <swiper-slide v-for="products in popular" :key="products.id">
          <div class="overflow-hidden">
            <a href="#" @click.prevent="viewProduct(products.id)">
              <div
                class="img-fluid h-[300px] w-[280px] bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: `url(${products.imageUrl})` }"
              >
                <p class="badge text-primary bg-danger tag">熱門產品</p>
                <img
                  class="product_info img-fluid"
                  alt="顯示產品細節"
                  src="/images/other/product_info.png"
                />
                <div
                  class="d-flex justify-content-center align-items-end h-100"
                >
                  <p
                    class="badge"
                    style="background-color: rgba(168, 90, 0, 0.562)"
                  >
                    {{ products.title }}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <button
            type="button"
            class="bg-danger w-100 animation_hover animation_active btn-opacity-none block bg-red-800 text-2xl text-white"
            @click="addCart(`${products.id}`)"
          >
            <i class="bi bi-cart4"></i>加入購物車
          </button>
        </swiper-slide>
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped></style>
