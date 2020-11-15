<template>
<div class="shoppinglist">
  <h4>Order summary</h4>
  <div class="item-list">
    <div class="item" v-for="product in products" :key="product.name">
      <span>{{ product.name }}</span>
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
import {
  isEuMember
} from 'is-eu-member'
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: false,
    },
    country: {
      type: Object,
      required: false,
    },
    shippingRates: {
      type: Object,
      required: false,
    },
  },
  computed: {
    vat() {
      const {
        iso
      } = _.get(this, ['country', 'value'])
      if (isEuMember(iso)) {
        return 21
      }
      return 0
    },
    totalProductPrice() {
      return this.products.reduce((accumulator, product) => {
        return accumulator.price + product.price
      })
    },
    totalOrderPrice() {
      return this.totalProductPrice * (1 + this.vat / 100) + this.shipping
    },
    displayNotice() {
      const {
        iso,
        name
      } = _.get(this, ['country', 'value'])
      const rate = this.shippingRates[iso]

      if (!rate && iso) {
        return true
      }

      return false
    },
    notice() {
      const {
        name
      } = _.get(this, ['country', 'value'])
      return `Please contact us for shipping to ${name}`
    },
    shipping() {
      if (_.get(this, ['country', 'value'])) {
        const {
          iso,
          name
        } = _.get(this, ['country', 'value'])
        const rate = this.shippingRates[iso]
        if (rate) {
          return rate.singlePrice
        }
      }

      return 0
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
        border-top: 1px solid rgba($black,0.1);
        @include respond-until($screen-sm) {
            padding: 0 0 1rem;
            border-top: 0;
        }
        .item {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
            padding-top: 0.5rem;
            @include respond-until($screen-sm) {
                grid-template-columns: 1fr minmax(min-content, 6.5rem);
            }
        }
    }

    .pricing {
        border-top: 1px solid rgba($black,0.1);
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
            background: rgba($black,0.1);
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
