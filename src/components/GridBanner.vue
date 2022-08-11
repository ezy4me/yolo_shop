<template>
    <div class="grid-banners">
        <slot>

        </slot>
        <!-- <div class="banner__item item-1">
            <slot name="item-1">

            </slot>
        </div>
        <div class="banner__item item-2">
            <slot name="item-2">

            </slot>

        </div>
        <div class="banner__item item-3">
            <slot name="item-3">

            </slot>

        </div>
        <div class="banner__item item-4">
            <slot name="item-4">

            </slot>

        </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.grid-banners {
    height: 100%;
    /* margin-top: 0.5rem; */
    /* background: pink; */
    justify-content: center;
    display: grid;
    justify-items: flex-start;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(210px, 17rem));
    gap: 0.9rem;
}

.banner__link {
    margin: 0.5rem 0 0;
}

.banner__item {
    width: 100%;

}

.banner__image {
    border-radius: 5px;
    width: 100%;
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
</style>