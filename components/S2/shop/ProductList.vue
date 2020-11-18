<template>
  <div class="shoppinglist">
    <h4>Order summary</h4>
    <div class="item-list">
      <div
        class="item"
        v-for="(product, index) in products"
        :key="product.name"
      >
        <span class="item-name">
          <span class="item-label">{{ product.name }}</span>
          <span class="item-delete" v-on:click="removeProduct(index)">x</span>
        </span>
        <span class="item-price">{{ product.price | currency }}</span>
      </div>
    </div>
    <div class="notice" v-if="displayNotice">{{ notice }}</div>
    <div class="pricing">
      <p>
        <span>Order value</span>
        <span class="pricing-amount">{{ totalProductPrice | currency }}</span>
      </p>
      <p>
        <span>VAT</span>
        <span class="pricing-amount">{{ vat | percentage }}</span>
      </p>
      <p>
        <span>Shipping</span>
        <span class="pricing-amount">{{ shipping | currency }}</span>
      </p>
      <p class="total">
        <span>Total</span>
        <span class="pricing-amount">{{ totalOrderPrice | currency }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { isEuMember } from 'is-eu-member'
export default {
  name: 'ProductList',
  props: {
    country: {
      type: Object,
      required: false,
    },
    city: {
      type: Object,
      required: false,
    },
    shippingRates: {
      type: Object,
      required: false,
    },
    pricing: {
      type: Object,
      required: false,
    },
  },
  methods: {
    removeProduct(product, index) {
      console.log('product', product)
      this.$store.commit('removeShopItem', product)
    },
  },
  computed: {
    products() {
      return this.$store.state.shop.products
    },
    vat() {
      const { iso } = _.get(this, ['country', 'value'])
      if (isEuMember(iso)) {
        this.pricing.vat = 21
        return 21
      }
      this.pricing.vat = 0
      return 0
    },
    totalProductPrice() {
      if (!this.products.length) {
        return 0
      }

      let price = 0
      this.products.forEach((product) => {
        return (price += product.price)
      })

      this.pricing.productTotal = price
      return price
    },
    totalOrderPrice() {
      const total =
        this.totalProductPrice * (1 + this.vat / 100) + this.shipping
      this.pricing.total = total
      return total
    },
    displayNotice() {
      const { iso, name } = _.get(this, ['country', 'value'])
      const rate = this.shippingRates[iso]

      if (!rate && iso) {
        return true
      }

      return false
    },
    notice() {
      const { name } = _.get(this, ['country', 'value'])
      return `Please contact us for shipping to ${name}`
    },
    shipping() {
      let shippingrate = 0
      if (_.get(this, ['country', 'value'])) {
        const { iso, name } = _.get(this, ['country', 'value'])

        // No shipping to The hague
        const cityOptions = ['the hague', 'den haag']
        const city = _.get(this, ['city', 'value'], '')
        if (iso === 'NL' && cityOptions.includes(_.lowerCase(city))) {
          return shippingrate
        }

        // Any other location, add shipping
        const rate = this.shippingRates[iso]
        if (rate) {
          shippingrate = rate.singlePrice
        }
      }

      this.pricing.shipping = shippingrate
      return shippingrate
    },
  },
  filters: {
    currency(number) {
      return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
      }).format(number)
    },
    percentage(number) {
      return `${number}%`
    },
  },
}
</script>

<style lang="scss" scoped>
.shoppinglist {
  font-size: 1.25rem;
  padding-top: 0.75rem;
  margin-top: 4rem;
  border-top: 1px solid;

  h4 {
    margin: 0;
    font-size: 1rem;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 3rem;
    @include respond-until($screen-xs) {
      padding-bottom: 2.5rem;
    }
  }

  .item-list {
    padding: 1rem 0;
    border-top: 1px solid rgba($black, 0.1);
    @include respond-until($screen-sm) {
      padding: 0 0 1rem;
      border-top: 0;
    }
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      grid-gap: 2rem;
      padding-top: 0.5rem;
      @include respond-until($screen-sm) {
        grid-template-columns: 1fr minmax(min-content, 6.5rem);
      }

      .item-name {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 1rem;
        align-items: center;
        .item-delete {
          width: 1.75rem;
          height: 1.75rem;
          line-height: 1em;
          @include flex-center;
          color: rgba($black, 0.25);
          border: 1px solid;
          border-radius: 50%;
          background: $white;
          margin-bottom: 0.25rem;
          cursor: pointer;
        }
      }
    }
  }

  .pricing {
    border-top: 1px solid rgba($black, 0.1);
    padding: 1.25rem 0 0.75rem;
    border-bottom: 1px solid;

    p {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      color: rgba($black, 0.5);
      @include respond-until($screen-sm) {
        grid-template-columns: 1fr minmax(min-content, 6.5rem);
      }

      &:not(:last-of-type) {
        padding-bottom: 0.5rem;
      }

      &.total {
        color: $black;
        margin-top: 0.5rem;
        border-top: 1px solid;
        padding: 1rem 0 0;

        span {
          &:not(.pricing-amount) {
            font-size: 1.125rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        }
      }
    }
  }

  .item-list,
  .pricing {
    position: relative;
    &:before {
      content: '';
      width: 1px;
      height: 100%;
      background: rgba($black, 0.1);
      position: absolute;
      top: 0;
      left: 50%;
      z-index: -1;
      @include respond-until($screen-sm) {
        content: none;
      }
    }
  }
  .notice {
    // width: 40%;
    color: red;
    border: 1px solid;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem 0.5rem;
  }
}
</style>
