<template>
  <div class="home">
    <div class="main-container container">
      <div class="main-category">
        <div class="main-category__wrapper">
          <a class="main-category__item">
            <div class="main-category__img">
              <img class="img" src="@/assets/images/main_men.jpg" alt="">
            </div>
            <div class="main-category__body">
              <h3 class="main__category__title">Мужское</h3>
              <div class="main-category__link">Смотреть</div>
            </div>
          </a>
          <a class="main-category__item">
            <div class="main-category__img">
              <img class="img" src="@/assets/images/main_woman.jpg" alt="">
            </div>
            <div class="main-category__body">
              <h3 class="main__category__title">Женское</h3>
              <div class="main-category__link">Смотреть</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <SaleBanner></SaleBanner>
    <div class="product-slider" style="padding:20px 0">
      <h3 class="product-slider__title">Популярные товары</h3>
      <Carousel></Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import SaleBanner from '@/components/SaleBanner.vue'
export default {
components: {
    Carousel,
    SaleBanner,
  },
}
</script>

<style lang="scss">
.main-container {
  width: 100%;
}

.main-category {
  width: 100%;
}

.main-category__wrapper {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.main-category__item:not(:last-child) {
  margin-right: 20px;
}

.main-category__body {}

.main-category__img,
.img {
  width: 100%;
}
</style>