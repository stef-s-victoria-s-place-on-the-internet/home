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
    pricing: {
      type: Object,
      required: false,
    }
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
      const price = this.products.reduce((accumulator, product) => {
        return accumulator.price + product.price
      })
      this.pricing.productTotal = price
      return price
    },
    totalOrderPrice() {
      const total = this.totalProductPrice * (1 + this.vat / 100) + this.shipping
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
      return `please contact us for shipping to ${name}`
    },
    shipping() {
      let shippingrate = 0
      if (_.get(this, ['country', 'value'])) {
        const { iso, name } = _.get(this, ['country', 'value'])
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
.notice {
  color: red;
  border: 1px solid;
}
</style>
