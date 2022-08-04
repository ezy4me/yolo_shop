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
                            <li @mouseover="areOptionsVisible = true, optionName = 'Аксессуары'"
                                class="header-menu__item">
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
        <HeaderDropdown @mouseleave="areOptionsVisible = false" v-if="areOptionsVisible">
            <template v-if="optionName === 'Новинки'" v-slot:body>
                <HeaderDropdownItem :objectValue="brands" :objectName='"Все бренды"' :start=0 :end=10>
                </HeaderDropdownItem>
                <HeaderDropdownItem :objectValue="categories" :objectName='"Все категории"' :start=0 :end=10>
                </HeaderDropdownItem>
            </template>
            <template v-else-if="optionName === 'Бренды'" v-slot:body>
                <HeaderDropdownItem :objectValue="brands" :objectName='"Все бренды"' :start=0 :end=40>
                </HeaderDropdownItem>
            </template>
            <template v-else-if="optionName === 'Мужское'" v-slot:body>
                <HeaderDropdownItem :objectValue="brands" :objectName='"Все бренды"' :start=0 :end=10>
                </HeaderDropdownItem>
                <HeaderDropdownItem :objectValue="categories" :objectName='"Все категории"' :start=0 :end=10>
                </HeaderDropdownItem>
            </template>
            <template v-else v-slot:body>
                <HeaderDropdownItem :objectValue="brands" :objectName='"Все бренды"' :start=0 :end=10>
                </HeaderDropdownItem>
                <HeaderDropdownItem :objectValue="categories" :objectName='"Все категории"' :start=0 :end=10>
                </HeaderDropdownItem>
            </template>
            <template v-if="optionName === 'Новинки'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-1>
                        <img class="banner__image" src="@/assets/images/1.jpg" alt="">
                        <p class="banner__link">Adidas Original</p>
                    </template>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/2.jpg" alt="">
                        <p class="banner__link">Maison Kitsune</p>
                    </template>
                    <template v-slot:item-3>
                        <img class="banner__image" src="@/assets/images/3.jpg" alt="">
                        <p class="banner__link">Bronze 56k</p>
                    </template>
                    <template v-slot:item-4>
                        <img class="banner__image" src="@/assets/images/4.jpg" alt="">
                        <p class="banner__link">Premiata</p>
                    </template>
                </GridBanner>
            </template>
            <template v-else-if="optionName === 'Бренды'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/3.jpg" alt="">
                        <p class="banner__link">Maison Kitsune</p>
                    </template>
                    <template v-slot:item-4>
                        <img class="banner__image" src="@/assets/images/1.jpg" alt="">
                        <p class="banner__link">Premiata</p>
                    </template>
                </GridBanner>
            </template>
            <template v-else-if="optionName === 'Мужское'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-1>
                        <img class="banner__image" src="@/assets/images/5.jpg" alt="">
                        <p class="banner__link">Обувь</p>
                    </template>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/6.jpg" alt="">
                        <p class="banner__link">Одежда</p>
                    </template>
                </GridBanner>
            </template>
            <template v-else-if="optionName === 'Женское'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-1>
                        <img class="banner__image" src="@/assets/images/7.jpg" alt="">
                        <p class="banner__link">Обувь</p>
                    </template>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/8.jpg" alt="">
                        <p class="banner__link">Одежда</p>
                    </template>
                </GridBanner>
            </template>
            <template v-else-if="optionName === 'Аксессуары'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-1>
                        <img class="banner__image" src="@/assets/images/9.jpg" alt="">
                        <p class="banner__link">Кепки</p>
                    </template>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/10.jpg" alt="">
                        <p class="banner__link">Солнцезащитные очки</p>
                    </template>
                    <template v-slot:item-3>
                        <img class="banner__image" src="@/assets/images/11.jpg" alt="">
                        <p class="banner__link">Рюкзаки и сумки</p>
                    </template>
                    <template v-slot:item-4>
                        <img class="banner__image" src="@/assets/images/12.jpg" alt="">
                        <p class="banner__link">Наручные часы</p>
                    </template>
                </GridBanner>
            </template>
            <template v-else-if="optionName === 'Скидки'" v-slot:banner>
                <GridBanner>
                    <template v-slot:item-1>
                        <img class="banner__image" src="@/assets/images/9.jpg" alt="">
                        <p class="banner__link">Кепки</p>
                    </template>
                    <template v-slot:item-2>
                        <img class="banner__image" src="@/assets/images/10.jpg" alt="">
                        <p class="banner__link">Солнцезащитные очки</p>
                    </template>
                    <template v-slot:item-3>
                        <img class="banner__image" src="@/assets/images/11.jpg" alt="">
                        <p class="banner__link">Рюкзаки и сумки</p>
                    </template>
                    <template v-slot:item-4>
                        <img class="banner__image" src="@/assets/images/12.jpg" alt="">
                        <p class="banner__link">Наручные часы</p>
                    </template>
                </GridBanner>
            </template>
            <!-- <template v-slot:col-1>
                <HeaderDropdownItem :start=0 :end=10 :optionName="optionName" :brands="brands">{{brand}}</HeaderDropdownItem> -->

            <!-- <p class="header-dropdown__title">Все бренды</p>
                <ul class="header-dropdown__list">
                    <li class="header-dropdown__item" v-for="brand in brands.slice(0, 10)" :key="brand.id">
                        <a class="header-dropdown__link link" href="#">
                            {{ brand.brand }}
                        </a>
                    </li>
                </ul> -->

            <!-- </template>
            <template v-slot:col-2>
                <HeaderDropdownItem :start=10 :end=20 :optionName="optionName" v-if="optionName === 'Бренды'" :brands="brands">{{brand}}</HeaderDropdownItem>
                <HeaderDropdownItem v-else :categories="categories">{{category}}</HeaderDropdownItem> -->

            <!-- <p class="header-dropdown__title">Все категории</p>
                <ul class="header-dropdown__list">
                    <li class="header-dropdown__item" v-for="category in categories.slice(0, 10)" :key="category.id">
                        <a class="header-dropdown__link link" href="#">
                            {{ category.category }}
                        </a>
                    </li>
                </ul> -->

            <!-- </template> -->
            <!-- <template v-slot:banner>
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
            </template> -->
        </HeaderDropdown>
    </div>
</template>

<script>
import HeaderDropdown from './HeaderDropdown.vue'
import ModalWindow from './ModalWindow.vue'
import HeaderDropdownItem from './HeaderDropdownItem.vue'
import GridBanner from './GridBanner.vue'
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
        HeaderDropdownItem,
        GridBanner
    },
    data() {
        return {
            areOptionsVisible: false,
            isModalVisible: false,
            optionName: '',
            start: 0,
            end: 0,
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
.header-dropdown__list {
    height: 400px;
    flex-wrap: wrap;
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
}

.header-dropdown__item {
    list-style: none;
    margin: 8px 0;
    margin-right: 2rem;

}

.header-dropdown__item:last-child {
    margin-right: 0;
}

.header-dropdown__title {
    text-transform: uppercase;
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