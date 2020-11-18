<template>
  <ShopWrapper>
    <!-- Title -->
    <h1>More by <span>Yun Lee</span></h1>

    <!-- Description -->
    <ProductDescription>
      <h4>Description</h4>
      <p>
        If you enjoyed Poetics and Politics of Erasure see also : ‘Only Edison
        could speak to the dead’ a limited edition of 100 records that consists
        of 4 minutes of silence pressed on a 7″ vinyl record wrapped in a
        sandpaper record sleeve.
      </p>
    </ProductDescription>

    <!-- Images -->
    <ProductImages>
      <h4>Images</h4>
      <div class="image-content portrait">
        <figure>
          <img src="~/assets/shop/yun-lee-vinyl/yun-lee-vinyl-01.jpg" />
        </figure>
        <figure>
          <img src="~/assets/shop/yun-lee-vinyl/yun-lee-vinyl-02.jpg" />
        </figure>
      </div>
    </ProductImages>

    <!-- Specifications -->
    <ProductSpecs>
      <h4>Information</h4>
      <ul class="info-section">
        <li>
          <p>Title</p>
          <p>Only Edison could speak to the dead</p>
        </li>
        <li>
          <p>Creator</p>
          <p>Yun Lee</p>
        </li>
        <li>
          <p>Size</p>
          <p>7″ vinyl record</p>
        </li>
        <li>
          <p>Price</p>
          <p>€20 + VAT + Shipping</p>
        </li>
      </ul>
    </ProductSpecs>
  </ShopWrapper>
</template>

<script>
import ShopWrapper from '~/components/S2/shop/ShopWrapper.vue'
import ProductDescription from '~/components/S2/shop/ProductDescription.vue'
import ProductImages from '~/components/S2/shop/ProductImages.vue'
import ProductSpecs from '~/components/S2/shop/ProductSpecs.vue'
import PurchaseButton from '~/components/S2/shop/PurchaseButton.vue'

export default {
  components: {
    ProductDescription,
    ProductImages,
    ProductSpecs,
    ShopWrapper,
  },
  data() {
    return {
      product: {
        name: 'Only Edison could speak to the dead',
        price: 20,
        quantity: 1,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
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
    color: rgba($black, 0.25);
    margin: 0;
    @include respond-until($screen-lg) {
      font-size: 5.5rem;
    }
    @include respond-until($screen-md) {
      font-size: 5rem;
    }
    @include respond-until($screen-sm) {
      padding-bottom: 0;
    }
    @include respond-until($screen-xs) {
      font-size: 4rem;
    }

    span {
      color: $black;
    }
  }

  section {
    border-top: 1px solid;
    padding-top: 0.75rem;
    padding-bottom: 2rem;
    h4 {
      margin: 0;
      font-size: 1rem;
      line-height: 1em;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding-bottom: 2rem;
      @include respond-until($screen-xs) {
        padding-bottom: 2.5rem;
      }
    }
  }
}
</style>
