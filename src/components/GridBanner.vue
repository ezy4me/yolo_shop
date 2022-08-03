<template>
    <div class="grid-banners">
        <div class="banner__item item-1">
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

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.grid-banners {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "item-1 item-2"
        "item-3 item-4";
}

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
</style>