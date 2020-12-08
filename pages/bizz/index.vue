<template>
  <ShopWrapper>
    <Header />
    <h1>Order History</h1>

    <button v-clipboard="customerEmails">Copy all customer emails</button>

    <div class="filters">
      <h4>Filters</h4>
      <div class="buttons">
        <button
          v-for="status in statuses"
          :key="status.label"
          :class="currentStatus === status.label && 'active'"
          :style="{ backgroundColor: stc(status.label) }"
          @click="filterList(status)"
        >
          {{ status.label }} {{ status.count }}/{{ customersCount }}
        </button>
      </div>
    </div>

    <div v-if="GridCustomers" class="order-list">
      <ListItem
        class="customer-item"
        v-for="(customer, index) in GridCustomers"
        :key="customer._id"
        :index="index"
        :statuses="statuses"
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
import { countStatus, getStatus } from '~/helpers'
import stc from 'string-to-color'

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
      const statusOptions = [
        'all',
        'paid',
        'in-process',
        'packaged',
        'shipped',
        'delivered',
      ]
      const customers = await $axios.$get('/shop/customers/paid')

      const statuses = statusOptions.map((statusOption) => {
        return {
          label: statusOption,
          count: countStatus(customers, statusOption),
        }
      })

      return {
        statusOptions,
        customersCount: customers.length,
        customers,
        currentStatus: 'all',
        statuses,
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
    stc(label) {
      return stc(label)
    },
    async filterList({label}) {
      console.log('status', label)
      const customers = await this.$axios.$get('/shop/customers/paid')
      if (label === 'all') {
        this.currentStatus = label
        this.customersCount = customers.length
        return (this.customers = customers)
      }

      this.customers = customers.filter((customer) => {
        if (label === this.getStatus(customer)) {
          return true
        }

        return false
      })

      this.currentStatus = label
    },
    getStatus(customer) {
      if (customer.status) {
        return customer.status
      }

      if (_.has(customer, ['paid'])) {
        return customer.paid ? 'paid' : 'in-process'
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
  opacity: 1;
  transition: opacity 0.15s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  &.active {
    opacity: 0.6;
  }

  & + button {
    margin-left: 0.2rem;
  }
}
</style>
