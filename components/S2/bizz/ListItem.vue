<template>
  <div>
    <div v-if="!toggle" class="small">
      <div>
        <div :style="{backgroundColor: stc(getStatus(customer))}" class="select-item">
         {{ getStatus(customer) }}
        </div>
      </div>
      <div>
        <span>Name</span><span>{{ customer.name }}</span>
      </div>
      <button @click="toggleSize">toggle</button>
    </div>
    <div v-if="toggle" class="big">
      <h4>
        <div>
          <span>Order: #{{ customer.invoicenr }}</span>
          <span>{{ customer.date }}</span>
        </div>
        <button @click="toggleSize">toggle</button>
      </h4>

      <ul class="customer-info">
        <li>
          <span>Status</span>
          <span>
            <v-select
              class="customer-status"
              :value="getStatus(customer)"
              :options="statuses"
              @input="(status) => updateStatus(customer, status)"
            >
              <template #option="{ label }">
                <div :style="{backgroundColor: stc(label)}" class="select-item">{{ label }}</div>
              </template>
              <template #selected-option="{ label }">
                <div :style="{backgroundColor: stc(label)}" class="select-item">{{ label }}</div>
              </template>
            </v-select>
          </span>
        </li>
        <li>
          <span>Name</span><span>{{ customer.name }}</span>
        </li>
        <li>
          <span>Email</span><span>{{ customer.email }}</span>
        </li>
        <li>
          <span>Address</span><span>{{ customer.address }}</span>
        </li>
        <li v-if="customer.number">
          <span>House Number</span><span>{{ customer.number }}</span>
        </li>
        <li>
          <span>Postal Code</span><span> {{ customer.postalcode }}</span>
        </li>
        <li>
          <span>Country</span
          ><span>{{ customer.country.iso }}, {{ customer.country.name }}</span>
        </li>
        <li>
          <span>Paid</span><span>{{ customer.paid }}</span>
        </li>
        <li>
          <span>Invoice Number</span><span>{{ customer.invoicenr }}</span>
        </li>
      </ul>

      <div class="table">
        <h4>Products</h4>
        <div class="table-content">
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
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import { formatCurrency, formatPercentage } from '~/helpers'
import download from 'js-file-download'
import stc from 'string-to-color'

export default {
  props: ['index', 'customer', 'customers', 'statuses'],
  data() {
    return {
      toggle: false,
    }
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
    stc(label) {
      return stc(label)
    },
    toggleSize() {
      this.toggle = !this.toggle
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
    async updateStatus(customer, status) {
      const newCustomer = await this.$axios.$patch(
        `/shop/customers/${customer.id}`,
        { status: status.label }
      )

      this.$set(this.customers, this.index, newCustomer)
      this.$toast
        .success(`Updated ${customer.name} status to ${status.label}`)
        .goAway(1500)
    },
    async generateInvoice({ id }) {
      console.log('generateInvoice', id)
      const defaultFilename = `${id}.pdf`
      const res = await this.$axios.$get(
        `/shop/customers/generate-invoice/${id}`,
        {},
        {
          responseType: 'blob',
        }
      )
      //  download(res.data, `${id}.pdf`, 'application/pdf');
      // this.ip = ip
      window.open(
        `http://localhost:8080/api/v2/shop/customers/generate-invoice/${id}`
      )
    },
    customerInfo(customer) {
      let string = ''
      string += `${customer.name}\n`
      string += `${customer.address}\n`
      string += `${customer.postalcode}\n`
      string += `${customer.country.name}\n`
      return string
    },
  },
}
</script>

<style lang="scss" scoped>
.small {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: .5rem;
}
.customer-item {
  display: grid;
  grid-auto-columns: auto;
  grid-gap: 2rem;
  border: 1px solid $grey;
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 0.5rem;

  h4 {
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 0;
    padding-bottom: 2rem;
    @include subheader;
    @include respond-until($screen-xs) {
      padding-bottom: 2.5rem;
    }
  }

  .customer-status {
    width: 200px;
  }

  .select-item {
    display: inline-block;
    padding: 0rem 0.5rem;
    border-radius: 0.6rem;
    color: white;
    background: lightgray;
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
          color: rgba($black, 0.4);
          white-space: nowrap;
          min-width: 12rem;
        }
      }
    }
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
        color: rgba($black, 0.3);
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
