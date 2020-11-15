<template>
  <div class="shoppinglist">
    <div class="item" v-for="product in products" :key="product.name">
      {{ product.name }}
      {{ product.price | currency }}
    </div>
    <hr />

    <div class="notice" v-if="displayNotice">{{ notice }}</div>
    <div class="pricing">
      total shopping list price: {{ totalProductPrice | currency }} <br />
      vat: {{ vat | percentage }} <br />
      shipping: {{ shipping | currency }} <br />
      total shopping list price: {{ totalOrderPrice | currency }} <br />
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { isEuMember } from 'is-eu-member'
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
      const { iso } = _.get(this, ['country', 'value'])
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
      const { iso, name } = _.get(this, ['country', 'value'])
      const rate = this.shippingRates[iso]

      if (!rate && iso) {
        return true
      }

      return false
    },
    notice() {
      const { name } = _.get(this, ['country', 'value'])
      return `please contact us for shipping to ${name}`
    },
    shipping() {
      if (_.get(this, ['country', 'value'])) {
        const { iso, name } = _.get(this, ['country', 'value'])
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
.notice {
  color: red;
  border: 1px solid;
}
</style>
