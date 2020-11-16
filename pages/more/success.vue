<template>
  <div class="shop-wrapper">
    <div class="shop-side">
      <LogoCircle />
    </div>

    <div class="form-content">
      <h1>Purchase complete!</h1>

      <ProductDescription>
        <p>
          Thank you for your purchase, you should recieve an email with you
          invoice soon-ish. If you have any questions contact us at: <a href="mailto:hi@oneacre.online">hi@oneacre.online</a>.
        </p>
      </ProductDescription>
    </div>
  </div>
</template>

<script>
import LogoCircle from '~/components/S2/identity/LogoCircle.vue'
import ProductDescription from '~/components/S2/shop/ProductDescription.vue'
import ProductImages from '~/components/S2/shop/ProductImages.vue'
import ProductSpecs from '~/components/S2/shop/ProductSpecs.vue'
import PurchaseButton from '~/components/S2/shop/PurchaseButton.vue'

export default {
  components: {
    ProductDescription,
    LogoCircle,
  },
}
</script>

<style lang="scss" scoped>
.shop-wrapper {
  width: 100%;
  max-width: 1600px;
  padding: 2rem 2rem 6rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15rem minmax(min-content, 80rem);
  grid-gap: 4rem;
  align-items: flex-start;
  justify-content: center;
  @include respond-until($screen-lg) {
    grid-gap: 3rem;
  }
  @include respond-until($screen-md) {
    grid-template-columns: 12.5rem minmax(min-content, 80rem);
  }
  @include respond-until($screen-sm) {
    grid-template-columns: 1fr;
    padding: 0 2rem 6rem;
  }
  @include respond-until($screen-xs) {
    padding: 0 1rem 6rem;
  }

  .shop-side {
    height: calc(100vh - 2rem);
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 2rem;
    padding: 0 0 2rem;
    @include respond-until($screen-sm) {
      top: 0;
      height: auto;
    }
  }

  h1 {
    width: 100%;
    font-size: 6rem;
    font-family: $font-nova;
    line-height: 1em;
    padding-bottom: 4rem;
    text-transform: lowercase;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0;
    @include respond-until($screen-lg) {
      font-size: 5.5rem;
    }
    @include respond-until($screen-md) {
      font-size: 5rem;
    }
    @include respond-until($screen-sm) {
      width: 60%;
      padding-bottom: 0;
    }
    @include respond-until($screen-xs) {
      font-size: 4rem;
    }
  }
  .form-content {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 4rem;
    border-top: 1px solid;
    padding-top: 0.75rem;
    @include respond-until($screen-sm) {
      border-top: 0;
      padding-top: 10vh;
    }
  }
}
</style>
