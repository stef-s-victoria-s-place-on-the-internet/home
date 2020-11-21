<template>
  <div class="shop-wrapper">
    <div class="shop-side">
      <LogoCircle />
      <PurchaseButton v-if="product" :product="product" />
    </div>

    <div class="product">
      <slot />
    </div>
  </div>
</template>

<script>
import LogoCircle from '~/components/S2/identity/LogoCircle.vue'
import PurchaseButton from '~/components/S2/shop/PurchaseButton.vue'

export default {
  components: {
    LogoCircle,
    PurchaseButton,
  },
  props: ['product'],
}
</script>

<style lang="scss" scoped>
.shop-wrapper {
  width: 100%;
  max-width: 1600px;
  padding: 2rem 2rem 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-gap: 4rem;
  align-items: flex-start;
  justify-content: center;
  @include respond-until($screen-lg) {
    grid-gap: 3rem;
  }
  @include respond-until($screen-md) {
    grid-template-columns: 12.5rem 1fr;
  }
  @include respond-until($screen-sm) {
    grid-template-columns: 1fr;
    padding: 0 2rem 10rem;
  }
  @include respond-until($screen-xs) {
    padding: 0 2rem 10rem;
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

    .shop-purchase {
      border-top: 1px solid;
      padding-top: 0.75rem;
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include respond-until($screen-sm) {
        width: 100%;
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        padding: 1rem 2rem 2rem;
        border-top: 0;
        background: $white;
        @include respond-until($screen-xs) {
          padding: 1rem 1rem 2rem;
        }

        &:before {
          content: '';
          width: calc(100% - 4rem);
          height: 1px;
          background: $black;
          position: absolute;
          top: 0;
          @include respond-until($screen-xs) {
            width: calc(100% - 2rem);
          }
        }
      }

      p {
        color: rgba($black, 0.4);
        font-size: 1.375rem;

        &.price {
          color: $black;
        }
      }

      a {
        width: 100%;
        padding: 1rem 1.5rem 0.875rem;
        line-height: 1em;
        text-transform: uppercase;
        color: $white;
        background: $black;
        letter-spacing: 2px;
        border-radius: 0.375rem;
        margin-top: 2rem;
        @include flex-center;
        @include respond-until($screen-sm) {
          margin-top: 1.5rem;
        }
        @include respond-until($screen-xs) {
          margin-top: 1rem;
        }
      }
    }
  }

  .product {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 6rem;
    padding-top: 1rem;
    border-top: 1px solid;
    @include respond-until($screen-sm) {
      border-top: 0;
      padding-top: 15vh;
      grid-gap: 4rem;
    }
  }
}
</style>
