<template>
<div class="dropdown-container">
<div class="header-dropdown container">
        <div class="header-dropdown__menu">
            <div class="header-dropdown__row">
                <slot name="body">

                </slot>
            </div>
            <!-- <div class="header-dropdown__col">
                <slot name="col-1">
                    
                </slot>
            </div>
            <div class="header-dropdown__col">
                <slot name="col-2">
                    
                </slot>
            </div>
            <div class="banners">
                <slot name="banner">

                </slot>
            </div> -->
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
.dropdown-container{
    display: flex;
    justify-content: center;
}
.header-dropdown {
    height: 540px;
    width: 100%;
    background: #fff;
    -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6); 
    display: flex;
    position: absolute;
    z-index: 5;
    line-height: normal;
    border-top: 1px solid rgba(34, 60, 80, 0.1);
    /* margin: 0 -1rem; */
}

.header-dropdown__menu {
    display: flex;
}
.header-dropdown__row {
    margin-left: 4rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
.header-dropdown__title{
    margin: 0;
}

</style>