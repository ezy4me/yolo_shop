<template>
  <div class="about">
    <div class="product-page">
      <div class="container product-page__container">
        <div class="product-page__slider">Slider</div>
        <div class="sticky product-sticky">Sticky</div>
      </div>

    </div>
  </div>
</template>

.<style lang="scss">
.product-page {
  width: 100%;
  &__container{
    justify-content: flex-start;
  }
}
.product-page__slider{
  flex: 0 1 56.7rem;
}
.product-sticky{
  // width: 100%;
}
</style>