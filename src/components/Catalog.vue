<template>
  <div class="container container__catalog">
    <div class="toolbar">
      <select class="filter" name="filter" id="">
        <option class="filter__item" value="">По умолчанию</option>
        <option class="filter__item" value="">По возрастанию цены</option>
        <option class="filter__item" value="">По убыванию цены</option>
      </select>
    </div>
    <div class="catalog">
      <div class="sticky">
        <div class="sticky__body">
          <div class="product-filter">
            <div class="product-filter__header">Фильтр</div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Цена
              </div>
              <div class="product-filter__body filter-option">
                <div class="filter-option__item">
                  <div class="filter-option__wrapper">
                    <div class="filter-option__name">от</div>
                    <div class="filter-option__body">
                      <input v-model="value[0]" class="filter-option__input" type="number" :placeholder="minV">
                    </div>
                  </div>
                  <div class="filter-option__wrapper">
                    <div class="filter-option__name">до</div>
                    <div class="filter-option__body">
                      <input v-model="value[1]" class="filter-option__input" type="number" :placeholder=maxV>
                    </div>
                  </div>
                  <!-- <SliderElement name="slider" :max="1000" :merge="100" :format="{ prefix: '$', decimals: 2 }" /> -->
                </div>
                <Slider class="slider" @change="value" name="slider" v-model="value" :max=maxV  :min=minV :merge="400"  :tooltips="false"/>
              </div>
            </div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Пол
              </div>
              <div class="product-filter__body">
                <ul class="filter-option">
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Male">
                    <label for="Male">Мужской</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Female">
                    <label for="Female">Женский</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Unisex">
                    <label for="Unisex">Унисекс</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Категория
              </div>
              <div class="product-filter__body">
                <div class="scroll">
                  <ul class="filter-option">
                    <li class="filter-option__item" v-for="category in categories" :key="category.id">
                      <input class="filter-option__checkbox" type="checkbox" :id=category.value>
                      <label :for=category.value>{{ category.value }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Цвет
              </div>
              <div class="product-filter__body">
                <ul class="filter-option">
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="White">
                    <label for="White">Белый</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Black">
                    <label for="Black">Черный</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Red">
                    <label for="Red">Красный</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Green">
                    <label for="Green">Зеленый</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Размер
              </div>
              <div class="product-filter__body">
                <ul class="filter-option">
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="White">
                    <label for="White">Белый</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Black">
                    <label for="Black">Черный</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Red">
                    <label for="Red">Красный</label>
                  </li>
                  <li class="filter-option__item">
                    <input class="filter-option__checkbox" type="checkbox" id="Green">
                    <label class="filter-option__label" for="Green">Зеленый</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-filter__item">
              <div class="product-filter__title">
                Бренд
              </div>
              <div class="product-filter__body">
                <div class="scroll">
                  <ul class="filter-option">
                    <li class="filter-option__item" v-for="brand in brands" :key="brand.id">
                      <input class="filter-option__checkbox" type="checkbox" :id=brand.value>
                      <label :for=brand.value>{{ brand.value }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="catalog__wrapper">
        <div class="product-catalog">
          <GoodCard v-for="n in 10" :key="n"></GoodCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodCard from '@/components/GoodCard.vue'
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"
export default {
  name: 'v-catalog',
  components: {
    GoodCard,
    Slider
  },
  data() {
    return {
      minV: 0,
      maxV: 50000,
      brands: [
        { id: 1, value: 'adidas Originals' },
        { id: 2, value: 'CASIO' },
        { id: 3, value: 'Edwin' },
        { id: 4, value: 'Gramicci' },
        { id: 5, value: 'Lacoste' },
        { id: 6, value: 'Ligne Blanche' },
        { id: 7, value: 'New Balance' },
        { id: 8, value: 'Polo Ralph Lauren' },
        { id: 9, value: 'Premiata' },
        { id: 10, value: 'Puma' },
        { id: 11, value: 'Reebok' },
        { id: 12, value: 'Ripndip' },
        { id: 13, value: 'Polo Ralph Lauren' },
        { id: 14, value: 'Polo Ralph Lauren' },
        { id: 15, value: 'Polo Ralph Lauren' },
        { id: 16, value: 'Polo Ralph Lauren' },
        { id: 17, value: 'Polo Ralph Lauren' },
        { id: 18, value: 'Polo Ralph Lauren' },
        { id: 19, value: 'Polo Ralph Lauren' },
        { id: 20, value: 'New Balance' },
        { id: 21, value: 'Polo Ralph Lauren' },
        { id: 22, value: 'Polo Ralph Lauren' },
        { id: 23, value: 'Polo Ralph Lauren' },
        { id: 24, value: 'Polo Ralph Lauren' },
        { id: 25, value: 'Polo Ralph Lauren' },
        { id: 26, value: 'Y-3' },
        { id: 27, value: 'Y-3' },
        { id: 28, value: 'Y-3' },
        { id: 29, value: 'Polo Ralph Lauren' },
        { id: 30, value: 'Polo Ralph Lauren' },
        { id: 31, value: 'Polo Ralph Lauren' },
        { id: 32, value: 'Polo Ralph Lauren' },
        { id: 33, value: 'Polo Ralph Lauren' },
        { id: 34, value: 'Polo Ralph Lauren' },
        { id: 35, value: 'Polo Ralph Lauren' },
        { id: 36, value: 'Polo Ralph Lauren' },
        { id: 37, value: 'Polo Ralph Lauren' },
        { id: 38, value: 'Polo Ralph Lauren' },
        { id: 39, value: 'Polo Ralph Lauren' },
        { id: 40, value: 'Polo Ralph Lauren' },
      ],
      categories: [
        { id: 1, value: 'Кеды', sex: 'm' },
        { id: 2, value: 'Кроссовки', sex: 'w' },
        { id: 3, value: 'Куртки', sex: 'm' },
        { id: 4, value: 'Брюки', sex: 'w' },
        { id: 5, value: 'Джинсы', sex: 'm' },
        { id: 6, value: 'Лонгсливы', sex: 'm' },
        { id: 7, value: 'Рубашки', sex: 'm' },
        { id: 8, value: 'Свитеры', sex: 'm' },
        { id: 9, value: 'Толстовки', sex: 'm' },
        { id: 10, value: 'Футболки', sex: 'm' },
        { id: 11, value: 'Косметика', sex: 'w' },
        { id: 12, value: 'Наручные часы', sex: 'w' },
        { id: 13, value: 'Рюкзаки', sex: 'm' },
      ],
      value: [
        0, 5000
      ]
    }
  },
}
</script>

<style lang="scss">
.new {
  background: #f2f2f2;
}
.slider{
  margin: 20px 0;
  --slider-bg: #D1D5DB;
  --slider-connect-bg: black;
  --slider-handle-ring-color: #f2f2f2;
  --slider-handle-shadow: 0.5px 0.5px 1px 1px rgba(122, 122, 122, 0.32);
  --slider-handle-shadow-active: 0.5px 0.5px 1px 1px rgba(0,0,0,.42);
}
.filter {
  padding: 5px;
  border: 1px solid #f2f2f2;
  outline: none;

  &__item{
    border: 1px solid #f2f2f2;
  }
  &__item:focus {
    // border: 1px solid #f2f2f2;
    // outline: #f2f2f2;
  }
}

.scroll {
  width: clamp(200px, 50%, 300px);
  height: 200px;
  overflow: auto;
}

:root {
  --scrollbarBg: white;
  --scrollbarThumb: gray;
  --scrollbarWidth: 8px;
  --scrollbarBorder: 2px solid var(--scrollbarBg);
  --scrollbarBorderRadius: calc(var(--scrollbarWidth) / 2);
}

.scroll {
  scrollbar-width: var(--scrollbarWidth);
  scrollbar-color: var(--scrollbarThumb) var(--scrollbarBg);
}

.scroll::-webkit-scrollbar {
  width: var(--scrollbarWidth);
}

.scroll::-webkit-scrollbar-track {
  background: var(--scrollbarBg);
  border-radius: var(--scrollbarBorderRadius);
}

.scroll::-webkit-scrollbar-thumb {
  background-color: var(--scrollbarThumb);
  border-radius: var(--scrollbarBorderRadius);
  border: var(--scrollbarBorder);
}


.product-filter {
  display: flex;
  flex-direction: column;
  // .product-filter__header

  &__header {
    margin: 20px;
    display: flex;
  }

  // .product-filter__item

  &__item {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  // .product-filter__title

  &__title {}

  // .product-filter__body

  &__body {}
}

.filter-option {
  width: 100%;
  padding: 0;

  &__item {

    margin: 10px 0;
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__wrapper {
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  &__input {
    margin-top: 10px;
    border: 0;
    outline: none;
    background: transparent;
    width: 100%;
  }

  &__input::-webkit-outer-spin-button,
  &__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    // margin-left: 0;
  }

  &__checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    background: #dddddd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &__checkbox:checked+label::before {
    border-color: black;
    background-color: black;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  /* стили при наведении курсора на checkbox */
  &__checkbox:not(:disabled):not(:checked)+label:hover::before {
    border-color: black;
  }

  /* стили для активного состояния чекбокса (при нажатии на него) */
  &__checkbox:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }

  /* стили для чекбокса, находящегося в фокусе */
  &__checkbox:focus+label::before {
    // box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
  &__checkbox:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }

  &__label {
    font-size: 14px;
  }
}

.container {
  &__catalog {
    display: flex;
    flex-direction: column;
  }
}

.toolbar {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.catalog {
  display: flex;
  width: 100%;

  &__wrapper {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 56.7rem;
    flex: 0 1 56.7rem;
    opacity: 1;
    -webkit-transition: opacity .3s ease;
    -o-transition: opacity .3s ease;
    transition: opacity .3s ease;
  }
}

.product-catalog {
  // background: #f2f2f2;
  justify-content: center;
  display: grid;
  justify-items: flex-start;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(210px, 18rem));
  gap: 0.9rem;
}

.product-card {
  padding: 3.6rem 0;
}

.sticky {

  position: relative;

  &__body {
    width: 264px;
  }
}
</style>