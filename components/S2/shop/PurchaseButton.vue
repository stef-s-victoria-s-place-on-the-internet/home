<template>
  <div class="shop-purchase">
    <p>Price</p>
    <p class="price">€{{ product.price }}</p>
    <div class="button" v-on:click.prevent="addShopItem">Purchase</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addShopItem(e) {
      this.$store.commit('addShopItem', this.product)
      this.$router.push({
        path: '/more/payment'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
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

  .button {
    width: 100%;
    padding: 1rem 1.5rem 0.875rem;
    line-height: 1em;
    text-transform: uppercase;
    color: $white;
    background: $black;
    letter-spacing: 2px;
    border-radius: 0.375rem;
    margin-top: 2rem;
    cursor: pointer;
    @include flex-center;
    @include respond-until($screen-sm) {
      margin-top: 1.5rem;
    }
    @include respond-until($screen-xs) {
      margin-top: 1rem;
    }
  }
}
</style>
