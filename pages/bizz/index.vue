<template>
<ShopWrapper>
  <Header />
  <h1>Order History</h1>

  <section v-if="customers.length == 0">
    <h4>No customers found</h4>
  </section>

  <button v-clipboard="customerEmails">Copy all customer emails</button>

  <div class="order-list">
    <section class="customer-item" v-for="customer in customers" :key="customer._id">
      <h4>
        <span>Order: #{{ customer.invoicenr}}</span>
        <span>{{ customer.date }}</span>
      </h4>

      <ul class="customer-info">
        <li><span>Name</span><span>{{ customer.name }}</span></li>
        <li><span>Email</span><span>{{ customer.email }}</span></li>
        <li><span>Address</span><span>{{ customer.address }}</span></li>
        <li><span>Postal Code</span><span> {{ customer.postalcode }}</span></li>
        <li><span>Country</span><span>{{ customer.country.iso }}, {{ customer.country.name }}</span></li>
        <li><span>Paid</span><span>{{ customer.paid }}</span></li>
        <li><span>Invoice Number</span><span>{{ customer.invoicenr }}</span></li>
      </ul>

      <div class="table">
        <h4>Products</h4>
        <div class="table-content">
          <div class="header row">
            <div class="cell" v-for="(col, index) in customer.products.cols" :key="index">
              {{ col }}
            </div>
          </div>
          <div class="row" v-for="(row, index) in customer.products.rows" :key="index">
            <div class="cell" v-for="(col, index) in customer.products.cols" :key="index">
              {{ row[col] }}
            </div>
          </div>
          <!-- Pricing -->
          <div class="pricing">
            <p class="total">
              <span>Total</span>
              <span class="pricing-amount">{{
                customer.pricing.total | currency
              }}</span>
            </p>
          </div>
        </div>
      </div>


      <!-- Buttons -->
      <div class="order-buttons">
        <button v-on:click="generateInvoice(customer)">Generate Invoice</button>
        <button v-clipboard="customerInfo(customer)">Copy customer</button>
      </div>
    </section>
  </div>
</ShopWrapper>
</template>

<script>
import * as _ from 'lodash'
import Header from '~/components/S2/bizz/Header'
import ShopWrapper from '~/components/S2/shop/ShopWrapper'
import {
  formatCurrency,
  formatPercentage
} from '~/helpers'
import download from 'js-file-download';

export default {
  middleware: 'auth',
  components: {
    Header,
    ShopWrapper,
    // Grid,
  },
  async asyncData({
    $axios,
    error,
    query
  }) {
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
    async generateInvoice({
      id
    }) {
      console.log('generateInvoice', id)
      const defaultFilename = `${id}.pdf`
      const res = await this.$axios.$get(`/shop/customers/generate-invoice/${id}`, {}, {
        responseType: 'blob'
      })
      console.log('res', res)
      //  download(res.data, `${id}.pdf`, 'application/pdf');
      // this.ip = ip
      window.open(`http://localhost:8080/api/v2/shop/customers/generate-invoice/${id}`)
    },
    customerInfo(customer) {
      let string = ""
      string += `${customer.name}\n`
      string += `${customer.address}\n`
      string += `${customer.postalcode}\n`
      string += `${customer.country.name}\n`
      return string
    }
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

.customer-item {
    display: grid;
    grid-auto-columns: auto;
    grid-gap: 2rem;
    border: 1px solid $grey;
    padding: 1.5rem 1.5rem 2rem;
    border-radius: 0.5rem;

    h4 {
        margin: 0;
        padding-bottom: 2rem;
        @include subheader;
        @include respond-until($screen-xs) {
            padding-bottom: 2.5rem;
        }
    }

    .customer-info {
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 0.75rem;
        margin: 0 0 2rem;
        padding: 0;
        list-style: none;

        li {
            display: grid;
            grid-template-columns: fit-content(1rem) 5fr;
            grid-gap: 1rem;
            padding-bottom: 0.25rem;
            border-bottom: 1px solid $grey;

            span {
                &:first-of-type {
                    color: rgba($black,0.4);
                    white-space: nowrap;
                    min-width: 12rem;
                }
            }
        }

    }
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
}

.table {
    .table-content {
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 1rem;
        .header {
            &.row {
                @include subheader;
                color: rgba($black,0.3);
                border-bottom: 1px solid $grey;
            }
        }
        .row {
            padding-bottom: 0.75rem;
            border-bottom: 1px solid $grey;
            display: grid;
            grid-template-columns: 1fr 10rem 10rem;
            grid-gap: 2rem;
        }
    }
}

.customer-item {
    h4 {
        display: grid;
        grid-template-columns: 1fr auto auto;
    }
}

.pricing {
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: 1rem 0 0.75rem;
    transform: translateY(calc(-1rem - 1px));

    p {
        display: grid;
        grid-template-columns: 1fr 10rem;
        grid-gap: 2rem;
        line-height: 1em;
        color: rgba($black, 0.5);
        @include respond-until($screen-sm) {
            grid-template-columns: 1fr minmax(min-content, 6.5rem);
        }

        &.total {
            color: $black;

            span {
                &:not(.pricing-amount) {
                    // font-size: 1.125rem;
                    // text-transform: uppercase;
                    // letter-spacing: 2px;
                }
            }
        }
    }
}

.order-buttons {
    display: grid;
    grid-template-columns: repeat(2, fit-content(1rem));
    grid-gap: 1rem;
    padding-top: 2rem;

    button {
        white-space: nowrap;
    }
}
</style>
