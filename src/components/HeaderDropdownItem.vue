<template>
    <div class="header-dropdown__col">
        <p class="header-dropdown__title">{{ objectName }}</p>
        <ul class="header-dropdown__list">
            <li class="header-dropdown__item" v-for="value in objectValue.slice(start, end)" :key="value.id">
                <a class="header-dropdown__link link" href="#">
                    {{ value.value }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        objectValue: {
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
        // brands: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        // categories: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
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
</style>