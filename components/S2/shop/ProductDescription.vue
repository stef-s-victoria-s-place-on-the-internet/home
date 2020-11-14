<template>
  <section class="product-description">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ProductDescription',
}
</script>

<style lang="scss" scoped>
.product-description {
  font-size: 2rem;
  line-height: 1.25em;
  @include respond-until($screen-lg) {
    font-size: 1.75rem;
  }
  @include respond-until($screen-md) {
    font-size: 1.75rem;
  }
  @include respond-until($screen-xs) {
    font-size: 1.5rem;
    line-height: 1.375em;
  }
}
</style>
