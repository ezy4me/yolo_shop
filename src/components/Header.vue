<template>
    <div class="header">
        <div class="header__container container">
            <!-- <div class="header__body"> -->
            <div class="header__body">
                <div class="logo">
                    <router-link to="/">
                        <img class="logo__img" src="@/assets/images/logo.png" alt="">
                    </router-link>
                </div>
                <div class="header__main">
                    <nav v-show="!mobile" class="header__menu">
                        <ul class="header-menu__list">
                            <li class="header-menu__item" v-for="(headerMenuItem, index) in headerMenuList"
                                :key="index">
                                <router-link @mouseover="areOptionsVisible = true, optionName = headerMenuItem.name"
                                    :to="headerMenuItem.path" class="header-menu__link link">
                                    {{ headerMenuItem.value }}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                    <fa @click="toggleMobileNav" v-show="mobile" class="icon" icon="bars"
                        :class="{'icon-active' : mobileNav}"></fa>
                    <transition name="mobile-nav">
                        <!-- <nav v-show="mobileNav" class="header__menu-mobile"> -->
                            <ul  v-show="mobileNav" class="header-menu__list-mobile">
                                <li class="header-menu__item" v-for="(headerMenuItem, index) in headerMenuList"
                                    :key="index">
                                    <router-link @mouseover="optionName = headerMenuItem.name"
                                        :to="headerMenuItem.path" class="header-menu__link link">
                                        {{ headerMenuItem.value }}
                                    </router-link>
                                </li>
                            </ul>
                        <!-- </nav> -->
                    </transition>
                </div>
            </div>
            <div class="header__actions">
                <div v-for="(icon, index) in headerMenuIcons" :key="index" class="header__icon">
                    <ModalWindow v-show="isModalVisible" @close="closeModal">
                        <template v-slot:body>
                            <div class="popup">
                                <div class="popup__title">
                                    Вход или регистрация
                                </div>
                                <input class="popup__input" type="text" placeholder="Введите ваш логин..">
                                <input class="popup__input" type="text" placeholder="Введите ваш пароль...">
                                <p>Зарегистриваться</p>
                                <button class="btn popup__button">Войти</button>
                            </div>
                        </template>
                    </ModalWindow>
                    <fa @click="showModal" class="icon" :icon="icon.name">
                    </fa>
                </div>
            </div>
        </div>
        <HeaderDropdown @mouseleave="areOptionsVisible = false" v-if="areOptionsVisible">
            <template v-slot:body>
                <div class="div" style="width: 100%; display: flex">
                    <HeaderDropdownItem v-if="optionName === headerMenuList[0].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[0].name" :objectValue="CATEGORIES"
                        :objectName='"Все категории"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[1].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=36>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[2].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[2].name"
                        :objectValue="CATEGORIES.filter(v => v.sex === 'm')" :objectName='"Все категории"' :start=0
                        :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[3].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[3].name"
                        :objectValue="CATEGORIES.filter(v => v.sex === 'w')" :objectName='"Все категории"' :start=0
                        :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[4].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[4].name" :objectValue="CATEGORIES"
                        :objectName='"Все категории"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[5].name" :objectValue="BRANDS"
                        :objectName='"Все бренды"' :start=0 :end=12>
                    </HeaderDropdownItem>
                    <HeaderDropdownItem v-if="optionName === headerMenuList[5].name" :objectValue="CATEGORIES"
                        :objectName='"Все категории"' :start=0 :end=12>
                    </HeaderDropdownItem>
                </div>
            </template>
            <template v-slot:banner>
                <GridBanner>
                    <div class="banner__item"
                        v-for="(banner, index) in headerMenuBanners.filter(b => b.name === optionName)" :key="index">
                        <img class="banner__image" :src=banner.path alt="">
                        <p class="banner__link">{{ banner.value }}</p>
                    </div>
                </GridBanner>
            </template>
        </HeaderDropdown>
    </div>
</template>

<script>
import HeaderDropdown from './HeaderDropdown.vue'
import ModalWindow from './ModalWindow.vue'
import HeaderDropdownItem from './HeaderDropdownItem.vue'
import GridBanner from './GridBanner.vue'

import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'v-header',
    components: {
        HeaderDropdown,
        ModalWindow,
        HeaderDropdownItem,
        GridBanner
    },
    created(){
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
        window.addEventListener("scroll", this.scrollUpdate);
        this.scrollUpdate();
    },
    data() {
        return {
            scrollNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,

            headerMenuList: [
                { value: 'Новинки', name: 'New', path: '/new' },
                { value: 'Бренды', name: 'Brand', path: '/brand' },
                { value: 'Мужское', name: 'Male', path: '/male' },
                { value: 'Женское', name: 'Female', path: '/female' },
                { value: 'Аксессуары', name: 'Accessories', path: '/accessories' },
                { value: 'Скидки', name: 'Sale', path: '/sale' },
            ],
            headerMenuIcons: [
                { name: 'search' },
                { name: 'heart' },
                { name: 'user' },
                { name: 'shopping-bag' }
            ],
            headerMenuBanners: [
                { name: 'New', value: 'Adidas Original', path: require('@/assets/images/1.jpg') },
                { name: 'New', value: 'Maison Kitsune', path: require('@/assets/images/2.jpg') },
                { name: 'New', value: 'Bronze 56k', path: require('@/assets/images/3.jpg') },
                { name: 'New', value: 'Premiata', path: require('@/assets/images/4.jpg') },
                { name: 'Brand', value: 'Maison Kitsune', path: require('@/assets/images/3.jpg') },
                { name: 'Brand', value: 'Premiata', path: require('@/assets/images/1.jpg') },
                { name: 'Male', value: 'Обувь', path: require('@/assets/images/5.jpg') },
                { name: 'Male', value: 'Одежда', path: require('@/assets/images/6.jpg') },
                { name: 'Female', value: 'Обувь', path: require('@/assets/images/7.jpg') },
                { name: 'Female', value: 'Одежда', path: require('@/assets/images/8.jpg') },
                { name: 'Accessories', value: 'Кепки', path: require('@/assets/images/9.jpg') },
                { name: 'Accessories', value: 'Солнцезащитные очки', path: require('@/assets/images/10.jpg') },
                { name: 'Accessories', value: 'Рюкзаки и сумки', path: require('@/assets/images/11.jpg') },
                { name: 'Accessories', value: 'Наручные часы', path: require('@/assets/images/12.jpg') },
                { name: 'Sale', value: 'Кепки', path: require('@/assets/images/9.jpg') },
                { name: 'Sale', value: 'Солнцезащитные очки', path: require('@/assets/images/10.jpg') },
                { name: 'Sale', value: 'Рюкзаки и сумки', path: require('@/assets/images/11.jpg') },
                { name: 'Sale', value: 'Наручные часы', path: require('@/assets/images/12.jpg') },
            ],
            areOptionsVisible: false,
            isModalVisible: false,
            optionName: '',
            start: 0,
            end: 0,
            // brands: [
            //     { id: 1, value: 'adidas Originals' },
            //     { id: 2, value: 'CASIO' },
            //     { id: 3, value: 'Edwin' },
            //     { id: 4, value: 'Gramicci' },
            //     { id: 5, value: 'Lacoste' },
            //     { id: 6, value: 'Ligne Blanche' },
            //     { id: 7, value: 'New Balance' },
            //     { id: 8, value: 'Polo Ralph Lauren' },
            //     { id: 9, value: 'Premiata' },
            //     { id: 10, value: 'Puma' },
            //     { id: 11, value: 'Reebok' },
            //     { id: 12, value: 'Ripndip' },
            //     { id: 13, value: 'Polo Ralph Lauren' },
            //     { id: 14, value: 'Polo Ralph Lauren' },
            //     { id: 15, value: 'Polo Ralph Lauren' },
            //     { id: 16, value: 'Polo Ralph Lauren' },
            //     { id: 17, value: 'Polo Ralph Lauren' },
            //     { id: 18, value: 'Polo Ralph Lauren' },
            //     { id: 19, value: 'Polo Ralph Lauren' },
            //     { id: 20, value: 'New Balance' },
            //     { id: 21, value: 'Polo Ralph Lauren' },
            //     { id: 22, value: 'Polo Ralph Lauren' },
            //     { id: 23, value: 'Polo Ralph Lauren' },
            //     { id: 24, value: 'Polo Ralph Lauren' },
            //     { id: 25, value: 'Polo Ralph Lauren' },
            //     { id: 26, value: 'Y-3' },
            //     { id: 27, value: 'Y-3' },
            //     { id: 28, value: 'Y-3' },
            //     { id: 29, value: 'Polo Ralph Lauren' },
            //     { id: 30, value: 'Polo Ralph Lauren' },
            //     { id: 31, value: 'Polo Ralph Lauren' },
            //     { id: 32, value: 'Polo Ralph Lauren' },
            //     { id: 33, value: 'Polo Ralph Lauren' },
            //     { id: 34, value: 'Polo Ralph Lauren' },
            //     { id: 35, value: 'Polo Ralph Lauren' },
            //     { id: 36, value: 'Polo Ralph Lauren' },
            //     { id: 37, value: 'Polo Ralph Lauren' },
            //     { id: 38, value: 'Polo Ralph Lauren' },
            //     { id: 39, value: 'Polo Ralph Lauren' },
            //     { id: 40, value: 'Polo Ralph Lauren' },
            // ],
            // categories: [
            //     { id: 1, value: 'Кеды', sex: 'm' },
            //     { id: 2, value: 'Кроссовки', sex: 'w' },
            //     { id: 3, value: 'Куртки', sex: 'm' },
            //     { id: 4, value: 'Брюки', sex: 'w' },
            //     { id: 5, value: 'Джинсы', sex: 'm' },
            //     { id: 6, value: 'Лонгсливы', sex: 'm' },
            //     { id: 7, value: 'Рубашки', sex: 'm' },
            //     { id: 8, value: 'Свитеры', sex: 'm' },
            //     { id: 9, value: 'Толстовки', sex: 'm' },
            //     { id: 10, value: 'Футболки', sex: 'm' },
            //     { id: 11, value: 'Косметика', sex: 'w' },
            //     { id: 12, value: 'Наручные часы', sex: 'w' },
            //     { id: 13, value: 'Рюкзаки', sex: 'm' },
            // ],
        }
    },
    computed: {
        ...mapGetters([
            'BRANDS','CATEGORIES'
        ])
    },
    methods: {
        ...mapActions([
            'GET_BRANDS_FROM_API','GET_CATEGORIES_FROM_API'
        ]),
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 860){
                this.mobile = true;
                return;
            }
            else {
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
        scrollUpdate(){
            const scrollPosition = window.scrollY;
            if(scrollPosition != window.innerHeight)
            {
                this.mobileNav = false;
                return;
            }
        }
    },
    mounted(){
        this.GET_BRANDS_FROM_API();
        this.GET_CATEGORIES_FROM_API();
    },
}
</script>

<style>
:root {
  --main-bg-color: pink;
}
.icon{
    transition: 0.8s ease all;
}
.icon-active{
    transform: rotate(180deg);
}
.header-menu__list-mobile{
    
    padding: 0;
    background: white;
    z-index: 99;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    max-width: 250px;
    /* min-height: auto; */
    height: 100%;
    top: 4.7rem;
    left: 0;
}
.header__menu-mobile{
    width: 100%;
}
.mobile-nav{
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: 1s ease all;
    
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
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
</style>