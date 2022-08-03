<template>
    <div class="header-dropdown__col">
        <p  class="header-dropdown__title">{{ objectName }}</p>
        <ul class="header-dropdown__list">
            <li class="header-dropdown__item" v-for="value in objectValue.slice(start, end)" :key="value.id">
                <a class="header-dropdown__link link" href="#">
                    {{ value.value }}
                </a>
            </li>
        </ul>
        <!-- <p v-if="optionName === 'Бренды'" class="header-dropdown__title">{{ brandName }}</p>
        <p v-else-if="optionName === 'Новинки' || optionName === 'Мужское' || optionName === 'Женское' || optionName === 'Аксессуары' || optionName === 'Скидки'"
            class="header-dropdown__title">{{ brandName }}</p>
        <p v-else class="header-dropdown__title">{{ categoryName }}</p>
        <ul v-if="optionName === 'Бренды'" class="header-dropdown__list">
            <li class="header-dropdown__item" v-for="brand in brands.slice(start, end)" :key="brand.id">
                <a class="header-dropdown__link link" href="#">
                    {{ brand.brand }}
                </a>
            </li>
        </ul>
        <ul v-else-if="optionName === 'Новинки' || optionName === 'Мужское' || optionName === 'Женское' || optionName === 'Аксессуары' || optionName === 'Скидки'"
            class="header-dropdown__list">
            <li class="header-dropdown__item" v-for="brand in brands.slice(0, 10)" :key="brand.id">
                <a class="header-dropdown__link link" href="#">
                    {{ brand.brand }}
                </a>
            </li>
        </ul>
        <ul v-else class="header-dropdown__list"> -->
            
            <!-- <div v-if="optionName === 'Мужское'">
                <li class="header-dropdown__item"
                    v-for="category in categories.filter(f => { return f.sex == 'm' }).slice(0, 8)" :key="category.id">
                    <a class="header-dropdown__link link" href="#">
                        {{ category.category }}
                    </a>
                </li>
            </div>-->

                <!-- <li class="header-dropdown__item"
                    v-for="category in categories.slice(0, 10)" :key="category.id">
                    <a class="header-dropdown__link link" href="#">
                        {{ category.category }}
                    </a>
                </li>

        </ul> -->
    </div>
</template>
<script>
export default {
    props: {
        objectValue:{
            type: Array,
            default() {
                return []
            }
        },
        objectName: {
            type: String,
        },
        optionName: {
            type: String,
        },
        brands: {
            type: Array,
            default() {
                return []
            }
        },
        categories: {
            type: Array,
            default() {
                return []
            }
        },
        start: {
            type: Number,
        },
        end: {
            type: Number,
        }
    },
    data() {
        return {
            brandName: 'Все бренды',
            categoryName: 'Все категории'
        }
    },
}
</script>

<style>
.header-dropdown__col {
    margin-right: 8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>