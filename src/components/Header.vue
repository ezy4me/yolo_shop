<template>
    <div class="header">
        <div class="header__container container">
            <!-- <div class="header__body"> -->
            <div class="header__body">
                <div class="logo">
                    <img class="logo__img" src="@/assets/images/logo.png" alt="">
                </div>
                <div class="header__main">
                    <nav class="header__menu">
                        <ul class="header-menu__list">
                            <li @mouseover="areOptionsVisible = true, optionName = 'Новинки'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Новинки</a>
                            </li>
                            <li @mouseover="areOptionsVisible = true, optionName = 'Бренды'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Бренды</a>
                            </li>
                            <li @mouseover="areOptionsVisible = true, optionName = 'Мужское'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Мужское</a>
                            </li>
                            <li @mouseover="areOptionsVisible = true, optionName = 'Женское'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Женское</a>
                            </li>
                            <li @mouseover="areOptionsVisible = true, optionName = 'Аксессуары'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Аксессуры</a>
                            </li>
                            <li @mouseover="areOptionsVisible = true, optionName = 'Скидки'" class="header-menu__item">
                                <a class="header-menu__link link" href="#">Скидки</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="header__actions">
                <div class="header__icon">
                    <fa class="icon" icon="search"></fa>
                </div>
                <div class="header__icon">
                    <fa class="icon" style="color:red" icon="heart"></fa>
                </div>
                <div class="header__icon">
                    <ModalWindow v-show="isModalVisible" @close="closeModal">
                        <template v-slot:body>
                            <div class="popup">
                                <div class="popup__title">
                                    Вход или регистрация
                                </div>
                                <input class="popup__input" type="text" placeholder="Введите ваш логин..">
                                <input class="popup__input" type="text" placeholder="Введите ваш пароль...">
                                <p>Зарегистриваться</p>
                                <button class="popup__button">Войти</button>
                            </div>
                        </template>
                    </ModalWindow>
                    <fa @click="showModal" class="icon" icon="user">
                    </fa>
                </div>
                <div class="header__icon">
                    <fa class="icon" icon="shopping-bag"></fa>
                </div>
            </div>
        </div>
        <HeaderDropdown  @mouseleave="areOptionsVisible = false" :categories="categories" :brands="brands"
            v-if="areOptionsVisible">
            <template v-slot:col-1>
                <HeaderDropdownItem :start=0 :end=10 :optionName="optionName" :brands="brands">{{brand}}</HeaderDropdownItem>
                <!-- <p class="header-dropdown__title">Все бренды</p>
                <ul class="header-dropdown__list">
                    <li class="header-dropdown__item" v-for="brand in brands.slice(0, 10)" :key="brand.id">
                        <a class="header-dropdown__link link" href="#">
                            {{ brand.brand }}
                        </a>
                    </li>
                </ul> -->
            </template>
            <template v-slot:col-2>
                <HeaderDropdownItem :start=10 :end=20 :optionName="optionName" v-if="optionName === 'Бренды'" :brands="brands">{{brand}}</HeaderDropdownItem>
                <HeaderDropdownItem v-else :categories="categories">{{category}}</HeaderDropdownItem>
                <!-- <p class="header-dropdown__title">Все категории</p>
                <ul class="header-dropdown__list">
                    <li class="header-dropdown__item" v-for="category in categories.slice(0, 10)" :key="category.id">
                        <a class="header-dropdown__link link" href="#">
                            {{ category.category }}
                        </a>
                    </li>
                </ul> -->
            </template>
            <template v-slot:banner>
                <div class="banner__item item-1">
                    <img class="banner__image" src="@/assets/images/1.jpg" alt="">
                    <p class="banner__link">Adidas Original</p>
                </div>
                <div class="banner__item item-2">
                    <img class="banner__image" src="@/assets/images/2.jpg" alt="">
                    <p class="banner__link">Maison Kitsune</p>
                </div>
                <div class="banner__item item-3">
                    <img class="banner__image" src="@/assets/images/3.jpg" alt="">
                    <p class="banner__link">Bronze 56k</p>
                </div>
                <div class="banner__item item-4">
                    <img class="banner__image" src="@/assets/images/4.jpg" alt="">
                    <p class="banner__link">Premiata</p>
                </div>
            </template>
        </HeaderDropdown>
    </div>
</template>

<script>
import HeaderDropdown from './HeaderDropdown.vue'
import ModalWindow from './ModalWindow.vue'
import HeaderDropdownItem from './HeaderDropdownItem.vue'
export default {
    // props: {
    //     brands: {
    //         type: Array,
    //         default() {
    //             return []
    //         }
    //     },
    //     categories: {
    //         type: Array,
    //         default() {
    //             return []
    //         }
    //     }
    // },
    name: 'v-header',
    components: {
    HeaderDropdown,
    ModalWindow,
    HeaderDropdownItem
},
    data() {
        return {
            areOptionsVisible: false,
            isModalVisible: false,
            optionName: '',
            start: 0,
            end: 0,
            brands: [
        { id: 1, brand: 'adidas Originals' },
        { id: 2, brand: 'CASIO' },
        { id: 3, brand: 'Edwin' },
        { id: 4, brand: 'Gramicci' },
        { id: 5, brand: 'Lacoste' },
        { id: 6, brand: 'Ligne Blanche' },
        { id: 7, brand: 'New Balance' },
        { id: 8, brand: 'Polo Ralph Lauren' },
        { id: 9, brand: 'Premiata' },
        { id: 10, brand: 'Puma' },
        { id: 11, brand: 'Reebok' },
        { id: 12, brand: 'Ripndip' },
        { id: 13, brand: 'Y-3' },
        { id: 14, brand: 'Y-3' },
        { id: 15, brand: 'Y-3' },
        { id: 16, brand: 'Y-3' },
        { id: 17, brand: 'Y-3' },
        { id: 18, brand: 'Y-3' },
        { id: 19, brand: 'Y-3' },
        { id: 20, brand: 'Y-3' },
      ],
      categories: [
        { id: 1, category: 'Кеды', sex: 'm' },
        { id: 2, category: 'Кроссовки', sex: 'w' },
        { id: 3, category: 'Куртки', sex: 'm' },
        { id: 4, category: 'Брюки', sex: 'w' },
        { id: 5, category: 'Джинсы', sex: 'm' },
        { id: 6, category: 'Лонгсливы', sex: 'm' },
        { id: 7, category: 'Рубашки', sex: 'm' },
        { id: 8, category: 'Свитеры', sex: 'm' },
        { id: 9, category: 'Толстовки', sex: 'm' },
        { id: 10, category: 'Футболки', sex: 'm' },
        { id: 11, category: 'Косметика', sex: 'w' },
        { id: 12, category: 'Наручные часы', sex: 'w' },
        { id: 13, category: 'Рюкзаки', sex: 'm' },
      ],
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
}
</script>

<style>
.banner__item {
    margin: 10px;

}

.banner__image {
    border-radius: 5px;
}

.item-1 {
    grid-area: item-1;
}

.banner__link {
    text-transform: uppercase;
}

.item-2 {
    grid-area: item-2;
}

.item-3 {
    grid-area: item-3;
}

.item-4 {
    grid-area: item-4;
}

.header-dropdown__list {
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
}

.header-dropdown__item {
    list-style: none;
    margin: 8px 0;
}

.header-dropdown__title {
    text-transform: uppercase;
}


.banners {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "item-1 item-2"
        "item-3 item-4";
}

.popup {
    display: flex;
    flex-direction: column;
}

.popup__title {
    font-size: 20px;
    margin: 0 40px;
    margin-bottom: 20px;
}

.popup__input {
    outline: none;
    margin: 5px 0;
    border: 0;
    border-bottom: 1px solid #2f2f2f;
    height: 40px;
}

.popup__button {
    color: #fff;
    padding: 10px;
    border: 0;
    background: #000;
}
</style>