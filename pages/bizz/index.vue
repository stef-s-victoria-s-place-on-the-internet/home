<template>
  <ShopWrapper>
    <Header />
    <h1>Order History</h1>

    <button v-clipboard="customerEmails">Copy all customer emails</button>

    <div class="filters">
      <h4>Filters</h4>
      <div class="buttons">
        <button :class="currentStatus === 'all' && 'active'" @click="filterList('all')">All {{ customersCount }}</button>
        <button :class="currentStatus === 'paid' && 'active'" @click="filterList('paid')">Paid {{ status.paid }}/{{ customersCount }}</button>
        <button :class="currentStatus === 'delivered' && 'active'" @click="filterList('delivered')">
          Delivered {{ status.delivered }}/{{ customersCount }}
        </button>
        <button :class="currentStatus === 'pending' && 'active'" @click="filterList('pending')">
          Pending {{ status.pending }}/{{ customersCount }}
        </button>
        <button :class="currentStatus === 'unknown' && 'active'" @click="filterList('unknown')">
          Unknown {{ status.unknown }}/{{ customersCount }}
        </button>
      </div>
    </div>

    <div v-if="GridCustomers" class="order-list">
      <ListItem
        class="customer-item"
        v-for="(customer, index) in GridCustomers"
        :key="customer._id"
        :index="index"
        :customer="customer"
        :customers="customers"
      />
    </div>

    <div v-if="GridCustomers.length === 0">
      <h4>no customers with this status</h4>
    </div>
  </ShopWrapper>
</template>

<script>
import * as _ from 'lodash'
import Header from '~/components/S2/bizz/Header'
import ListItem from '~/components/S2/bizz/ListItem'
import ShopWrapper from '~/components/S2/shop/ShopWrapper'
import { log } from 'util'

export default {
  middleware: 'auth',
  components: {
    Header,
    ListItem,
    ShopWrapper,
  },
  data() {
    return {}
  },
  async asyncData({ $axios, error, query }) {
    try {
      const customers = await $axios.$get('/shop/customers/paid')

      const getStatus = (customer) => {
      if (customer.status) {
        return customer.status
      }

      if (_.has(customer, ['paid'])) {
        return customer.paid ? 'paid' : 'pending'
      }

      return 'unknown'
    }

      const countStatus = (customers, status) => {
        const allOfStatus = customers.filter((customer) => {
          if (status === getStatus(customer)) {
            return true
          }

          return false
        })

        return allOfStatus.length
      }

      return {
        customersCount: customers.length,
        customers,
        currentStatus: 'all',
        status: {
          paid: countStatus(customers, 'paid'),
          delivered: countStatus(customers, 'delivered'),
          pending: countStatus(customers, 'pending'),
          unknown: countStatus(customers, 'unknown'),
        },
      }
    } catch (err) {
      console.log(err)
      return {
        customers: [],
      }
    }
  },
  computed: {
    customerEmails() {
      return this.customers.reduce((emails, customer) => {
        return (emails += `${customer.name}, ${customer.email}\n`)
      }, '')
    },
    GridCustomers() {
      return this.customers.map((customer) => {
        const rows = customer.products.map((product) => {
          return _.values(product)
        })

        return {
          ...customer,
          products: {
            rows: customer.products,
            cols: ['name', 'quantity', 'price'],
          },
        }
      })
    },
  },
  methods: {
    async filterList(status) {
      const customers = await this.$axios.$get('/shop/customers/paid')
        if (status === 'all') {
          this.currentStatus = status
          this.customersCount = customers.length
          return this.customers = customers
        }

      this.customers = customers.filter((customer) => {
        if (status === this.getStatus(customer)) {
          return true
        }

        return false
      })

      this.currentStatus = status
    },
    countStatus(customers, status) {
      const allOfStatus = customers.filter((customer) => {
        if (status === this.getStatus(customer)) {
          return true
        }

        return false
      })

      return allOfStatus.length
    },
    getStatus(customer) {
      if (customer.status) {
        return customer.status
      }

      if (_.has(customer, ['paid'])) {
        return customer.paid ? 'paid' : 'pending'
      }

      return 'unknown'
    },
  },
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 6rem;
  font-family: $font-nova;
  line-height: 1em;
  padding-bottom: 6rem;
  text-transform: lowercase;
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
}

.order-list {
  display: grid;
  grid-auto-columns: auto;
  grid-gap: 6rem;
}

button {
  @include subheader;
  padding: 0.75rem 1rem;
  background: $black;
  color: $white;
  justify-self: flex-end;
  appearance: none;
  border: none;
  border-radius: 0.375rem;
  opacity: 0.2;
  transition: opacity 0.15s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
}
</style>
