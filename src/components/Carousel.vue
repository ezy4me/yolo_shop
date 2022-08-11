<template>
    <div class="swiper__container container">
        <Swiper :slides-per-view="4" :space-between="0" :loop="true" :modules="modules"
            :pagination="{ clickable: true }">
            <SwiperSlide v-for="n in 6" :key="n">
                <GoodCard></GoodCard>
            </SwiperSlide>
        </Swiper>
    </div>

</template>

<script>

import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GoodCard from './GoodCard.vue';
export default {
    name: 'v-carousel',
    components: {
        Swiper,
        SwiperSlide,
        GoodCard,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, A11y],
        };
    },
    methods: {

    },
}

</script>

<style lang="scss">
.swiper-pagination {
    position: initial;
}

:root {
    --swiper-theme-color: #225384;
}
</style>