<template>
  <ShopWrapper>
    <Header />
    <h1>more <span>purchases</span></h1>

    <section v-if="customers.length == 0">
      <h4>No customers found</h4>
    </section>

    <button v-clipboard="customerEmails">Copy all customer emails</button>

    <section
      class="customer-item"
      v-for="customer in customers"
      :key="customer._id"
    >
      <h4>
        <span>{{ customer.name }}</span> <span>{{ customer.date }}</span>
        <button v-clipboard="customer">Copy customer</button>
        <button v-on:click="generateInvoice(customer)">Generate Invoice</button>
      </h4>

      <ul>
        <li>Name: {{ customer.name }}</li>
        <li>email: {{ customer.email }}</li>
        <li>address: {{ customer.address }}</li>
        <li>postalcode: {{ customer.postalcode }}</li>
        <li>
          country: {{ customer.country.iso }}, {{ customer.country.name }}
        </li>
        <li>paid: {{ customer.paid }}</li>
        <li>invoicenr: {{ customer.invoicenr }}</li>
      </ul>

      <div class="table">
        <h4>Products</h4>
        <div class="header row">
          <div
            class="cell"
            v-for="(col, index) in customer.products.cols"
            :key="index"
          >
            {{ col }}
          </div>
        </div>
        <div
          class="row"
          v-for="(row, index) in customer.products.rows"
          :key="index"
        >
          <div
            class="cell"
            v-for="(col, index) in customer.products.cols"
            :key="index"
          >
            {{ row[col] }}
          </div>
        </div>
      </div>

      <div class="pricing">
        <p>
          <span>Order value</span>
          <span class="pricing-amount">{{
            customer.pricing.productTotal | currency
          }}</span>
        </p>
        <p>
          <span>VAT</span>
          <span class="pricing-amount">{{
            customer.pricing.vat | percentage
          }}</span>
        </p>
        <p>
          <span>Shipping</span>
          <span class="pricing-amount">{{
            customer.pricing.shipping | currency
          }}</span>
        </p>
        <p class="total">
          <span>Total</span>
          <span class="pricing-amount">{{
            customer.pricing.total | currency
          }}</span>
        </p>
      </div>
    </section>
  </ShopWrapper>
</template>

<script>
import * as _ from 'lodash'
import Header from '~/components/S2/bizz/Header'
import ShopWrapper from '~/components/S2/shop/ShopWrapper'
import { formatCurrency, formatPercentage } from '~/helpers'
import download from 'js-file-download';

export default {
  middleware: 'auth',
  components: {
    Header,
    ShopWrapper,
    // Grid,
  },
  async asyncData({ $axios, error, query }) {
    try {
      const customers = await $axios.$get('/shop/customers/paid')
      const GridCustomers = customers.map((customer) => {
        const rows = customer.products.map((product) => {
          return _.values(product)
        })

        return {
          ...customer,
          products: {
            rows: customer.products,
            // cols: _.keys(customer.products[0]),
            cols: ['name', 'quantity', 'price'],
          },
        }
      })
      return {
        customers: GridCustomers,
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
  },
  filters: {
    currency(number) {
      return formatCurrency(number)
    },
    percentage(number) {
      return formatPercentage(number)
    },
  },
  methods: {
    async generateInvoice({ id }) {
      console.log('generateInvoice', id)
      const defaultFilename = `${id}.pdf`
      const res = await this.$axios.$get(`/shop/customers/generate-invoice/${id}`, {}, {responseType: 'blob'})
      console.log('res', res)
      //  download(res.data, `${id}.pdf`, 'application/pdf');
      // this.ip = ip
      window.open(`http://localhost:8080/api/v2/shop/customers/generate-invoice/${id}`)
    },
  },
}
</script>


<style lang="scss" scoped>
h1 {
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

button {
  border: 1px solid;
  padding: 0.5rem;
  background: white;
  cursor: pointer;
}

.table {
  .row {
    padding: 0.5rem 0;
    border-bottom: 1px solid;
    display: grid;
    grid-template-columns: 1fr minmax(20ch, 30%) minmax(20ch, 5%);
  }
}

.customer-item {
  h4 {
    display: grid;
    grid-template-columns: 1fr auto auto;
  }
}

.pricing {
  border-top: 1px solid rgba($black, 0.1);
  padding: 1.25rem 0 0.75rem;
  border-bottom: 1px solid;
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
</style>
