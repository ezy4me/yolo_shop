<template>
  <div class="wrappe">
    <Header :brands="brands" :categories="categories"></Header>
    <div class="main-container container">
      <div class="main-category">
        <div class="main-category__wrapper">
          <a class="main-category__item">
            <div class="main-category__img">
              <img class="img" src="./assets/images/main_men.jpg" alt="">
            </div>
            <div class="main-category__body">
              <h3 class="main__category__title">Мужское</h3>
              <div class="main-category__link">Смотреть</div>
            </div>
          </a>
          <a class="main-category__item">
            <div class="main-category__img">
              <img class="img" src="./assets/images/main_woman.jpg" alt="">
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

    <Footer></Footer>
  </div>

</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import SaleBanner from './components/SaleBanner.vue'
export default {

  components: {
    Header,
    Footer,
    Carousel,
    SaleBanner
},
  data() {
    return {
      // brands: [
      //   { id: 1, brand: 'adidas Originals' },
      //   { id: 2, brand: 'CASIO' },
      //   { id: 3, brand: 'Edwin' },
      //   { id: 4, brand: 'Gramicci' },
      //   { id: 5, brand: 'Lacoste' },
      //   { id: 6, brand: 'Ligne Blanche' },
      //   { id: 7, brand: 'New Balance' },
      //   { id: 8, brand: 'Polo Ralph Lauren' },
      //   { id: 9, brand: 'Premiata' },
      //   { id: 10, brand: 'Puma' },
      //   { id: 11, brand: 'Reebok' },
      //   { id: 12, brand: 'Ripndip' },
      //   { id: 13, brand: 'Y-3' },
      // ],
      // categories: [
      //   { id: 1, category: 'Кеды' },
      //   { id: 2, category: 'Кроссовки' },
      //   { id: 3, category: 'Куртки' },
      //   { id: 4, category: 'Брюки' },
      //   { id: 5, category: 'Джинсы' },
      //   { id: 6, category: 'Лонгсливы' },
      //   { id: 7, category: 'Рубашки' },
      //   { id: 8, category: 'Свитеры' },
      //   { id: 9, category: 'Толстовки' },
      //   { id: 10, category: 'Футболки' },
      //   { id: 11, category: 'Косметика' },
      //   { id: 12, category: 'Наручные часы' },
      //   { id: 13, category: 'Рюкзаки' },
      // ],

    }
  },

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: flex;
  min-height: 100%;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
}

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
