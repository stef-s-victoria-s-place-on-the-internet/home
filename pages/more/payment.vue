<template>
  <div class="testing">
    <Form :submitData="submitData">
      <FormItem
        v-bind:label="form.name.label"
        v-bind:value.sync="form.name.value"
        v-bind:type="form.name.type"
      />
      <FormItem v-bind:label="form.country.label">
        <v-select
          label="name"
          v-model="form.country.value"
          :options="countries"
        />
      </FormItem>
      <FormItem
        v-bind:label="form.email.label"
        v-bind:value.sync="form.email.value"
        v-bind:type="form.email.type"
      />
      <FormItem
        v-bind:label="form.adress.label"
        v-bind:value.sync="form.adress.value"
        v-bind:type="form.adress.type"
      />
      <FormItem
        v-bind:label="form.postalcode.label"
        v-bind:value.sync="form.postalcode.value"
        v-bind:type="form.postalcode.type"
      />
    </Form>
    <ProductList
      :products="products"
      :country="form.country"
      :shippingRates="rates"
      v-bind:pricing.sync="pricing"
    />
  </div>
</template>

<script>
import ProductList from '~/components/S2/shop/ProductList'
import FormItem from '~/components/S2/shop/FormItem'
import Form from '~/components/S2/shop/Form'
import * as _ from 'lodash'

export default {
  components: {
    Form,
    FormItem,
    ProductList,
  },
  data() {
    return {
      form: {
        name: { label: 'Name', type: 'text', value: 'Stef Kors' },
        email: { label: 'Email', type: 'email', value: 'stef.kors@gmail.com' },
        adress: { label: 'adress', type: 'text', value: 'Tenierstraat 13C' },
        postalcode: { label: 'postalcode', type: 'text', value: '2526NX' },
        country: {
          label: 'Country',
          value: { iso: 'NL', name: 'Netherlands' },
          type: 'vue-select',
        },
      },
      // form: {
      //   name: {
      //     label: 'Name',
      //     type: 'text',
      //     value: 'Stef Kors',
      //   },
      //   email: {
      //     label: 'Email',
      //     type: 'email',
      //     value: 'stef.kors@gmail.com',
      //   },
      //   adress: {
      //     label: 'adress',
      //     type: 'text',
      //     value: 'Teniersstraat 13C',
      //   },
      //   postalcode: {
      //     label: 'postalcode',
      //     type: 'text',
      //     value: '2526NX',
      //   },
      //   country: {
      //     label: 'Country',
      //     value: {
      //       iso: 'NL',
      //       name: 'Netherlands',
      //     },
      //     type: 'vue-select',
      //   },
      // },
      countries: [],
      rates: {},
      products: [
        {
          name: 'radio',
          price: 5,
        },
        {
          name: 'techno',
          price: 5,
        },
      ],
      pricing: {
        vat: 0,
        shipping: 0,
        total: 0,
        productTotal: 0,
      }
    }
  },
  async asyncData({ $axios }) {
    try {
      const countries = await $axios.$get('/shop/shipping/countries')
      const rates = await $axios.$get('/shop/shipping/rates')
      return {
        countries,
        rates,
      }
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    submitData() {
      const customer = {}

      _.forEach(this.form, ((item, key) => {
        customer[key] = item.value
      }))

      return {
        ...customer,
        products: this.products,
        pricing: this.pricing,
        redirectUrl: '/more/success'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.testing {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  & > * {
    border: 1px solid;
    padding: 1rem;
  }
}
</style>
