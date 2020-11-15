<template>
  <div class="testing">
    <Form debug>
      <FormItem
        v-bind:label="form.name.label"
        v-bind:value="form.name.value"
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
        v-bind:value="form.email.value"
        v-bind:type="form.email.type"
      />
      <FormItem
        v-bind:label="form.adress.label"
        v-bind:value="form.adress.value"
        v-bind:type="form.adress.type"
      />
      <FormItem
        v-bind:label="form.postalcode.label"
        v-bind:value="form.postalcode.value"
        v-bind:type="form.postalcode.type"
      />
    </Form>
    <ProductList :products="products" :country="form.country" :shippingRates="rates" />
  </div>
</template>

<script>
import ProductList from '~/components/S2/shop/ProductList'
import FormItem from '~/components/S2/shop/FormItem'
import Form from '~/components/S2/shop/Form'

export default {
  components: {
    Form,
    FormItem,
    ProductList,
  },
  data() {
    return {
      form: {
        name: {
          label: 'Name',
          value: 'Stef Kors',
          type: 'text',
        },
        email: {
          label: 'Email',
          value: 'stef.kors@gmail.com',
          type: 'email',
        },
        adress: {
          label: 'adress',
          value: 'Tenierstraat 13C',
          type: 'text',
        },
        postalcode: {
          label: 'postalcode',
          value: '2526NX',
          type: 'text',
        },
        country: {
          label: 'Country',
          value: {
            iso: 'NL',
            name: 'Nederland',
            priority: 1,
          },
          type: 'vue-select',
        },
      },
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
  }
}
</script>

<style lang="scss" scoped>
.testing {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  & > * {
    border: 1px solid;
    padding: 1rem;
  }
}
</style>
