<template>
    <div class="header-dropdown">
        <div class="header-dropdown__container">
            <div class="header-dropdown__menu">
                <div class="header-dropdown__row">
                    <slot name="body">

                    </slot>
                </div>
            </div>
            <div class="banners">
                <slot name="banner">

                </slot>
            </div>
        </div>

    </div>


</template>

<script>
export default {

    data() {
        return {

        }
    },
}
</script>

<style>
</style>