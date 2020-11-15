<template>
  <div class="shoppinglist">
    <div class="item" v-for="product in products" :key="product.name">
      {{ product.name }}
      {{ product.price | currency}}
    </div>
    <hr />
    total price: {{ total | currency }} <br />
    vat: {{ vat | percentage }} <br />
    shipping: {{ shipping | currency }}
  </div>
</template>

<script>
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
      const { iso } = this.country.value
      if (isEuMember(iso)) {
        return 21
      }
      return 0
    },
    total() {
      return this.products.reduce((accumulator, product) => {
        return accumulator.price + product.price
      })
    },
    shipping() {
      if (this.country) {
        const { iso } = this.country.value
        const rate = this.shippingRates[iso]
        if (rate) {
          console.log('rate', rate.singlePrice)
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

<style>
</style>
