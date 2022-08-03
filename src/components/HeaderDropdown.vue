<template>
<div class="dropdown-container">
<div class="header-dropdown">
        <div class="header-dropdown__menu">
            <div class="header-dropdown__col">
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
            </div>
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

}
.header-dropdown {

    width: 100%;
    background: #fff;
    -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    display: flex;
    position: absolute;
    z-index: 5;
    line-height: normal;
    justify-content: center;
    /* margin: 0 -1rem; */
}

.header-dropdown__menu {
    display: flex;
}
.header-dropdown__col {
    margin-left: 1rem;
    margin-right: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


</style>