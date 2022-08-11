<template>
    <div class="dropdown-container">
        <div class="header-dropdown container">
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