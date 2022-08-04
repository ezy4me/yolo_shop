<template>
  <div class="wrappe">
    <Header :brands="brands" :categories="categories"></Header>
    <div class="container container__catalog">
      <div class="toolbar" style="background:greenyellow">Toolbar</div>
      <div class="catalog">
        <div class="sticky" style="background:lightblue">
          <div class="sticky__body">
            <div class="div">dadsada</div>
            <div class="div">fsdfsdfs</div>
            <div class="div">fsdfsdfs</div>
            <div class="div">fsdfsdfs</div>
            <div class="div">fsdfsdfs</div>
          </div>
        </div>
        <div class="catalog__wrapper">
          <div class="product-catalog">
            <!-- <div class="product-card" v-for="n in 15" :key="n"> -->
              <GoodCard  v-for="n in 15" :key="n"></GoodCard>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
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
import GoodCard from './components/GoodCard.vue'
export default {

  components: {
    Header,
    Footer,
    Carousel,
    SaleBanner,
    GoodCard
},
  data() {
    return {

    }
  },

}
</script>
<style lang="scss">
.container{
  &__catalog{
    display: flex;
    flex-direction: column;
  }
}

.toolbar{
  width: 100%;
}
.catalog{
  display: flex;
  width: 100%;
  &__wrapper{
    // width: 56.8rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 56.7rem;
    flex: 0 1 56.7rem;
    opacity: 1;
    -webkit-transition: opacity .3s ease;
    -o-transition: opacity .3s ease;
    transition: opacity .3s ease;
    // flex-grow: 3;
  }
}

.product-catalog{
  background: pink;
    // display: flex;
    // flex-wrap: wrap;
  justify-content: center;
  display: grid;
    justify-items: flex-start;
    grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit,minmax(210px,18rem));
    // max-width: 85.6rem;
    gap: 0.9rem;
    // min-width: 56.8rem;
}
.product-card{
  // margin: 5px;
  //       width: fit-content;
    //   display: block;
    // width: 100%;
    //     max-width: 28rem;
    // // max-width: 100%;
    // max-height: 100%;
    padding: 3.6rem 0;
    // background-color: var(--product-card-bg);
    // border-radius: 0.4rem;
    // position: relative;

    //   width: fit-content;
    // display: flex;
    // flex-direction: column;
}
.sticky{
  
  position: relative;
  &__body{
    width: 264px;
  }
  // flex-grow: 1;
}
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
