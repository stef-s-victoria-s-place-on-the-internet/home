<template>
  <div class="testing">
    <div class="form-wrapper">
      <form action="">
        <div class="form-item">
          <label for="name">Name: </label>
          <input type="text" name="name" v-model="form.name" required />
        </div>
        <div class="form-item">
          <label for="email">email: </label>
          <input type="text" name="email" v-model="form.email" required />
        </div>
        <div class="form-item">
          <label for="adress">adress: </label>
          <input type="text" name="adress" v-model="form.adress" required />
        </div>
        <div class="form-item">
          <label for="country">country: </label>
          <v-select
            label="name"
            v-model="form.country"
            :options="countries"
          ></v-select>
        </div>
        <div class="form-item">
          <label for="postalcode">postalcode: </label>
          <input
            type="select"
            name="postalcode"
            v-model="form.postalcode"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="data">
      <pre>
      {{ form.name }}
      {{ form.email }}
      {{ form.adress }}
      {{ form.country }}
      {{ form.postalcode }}
      {{ shipping }}
    </pre
      >
    </div>
    <div class="shoppinglist">
      <div class="item" v-for="product in products" :key="product.name">
        {{product.name}}
        {{product.price}}
      </div>
      total price: 10 <br>
      vat: 21% <br>
      shipping: {{ shipping }}
    </div>
  </div>
</template>

<script>
// https://vue-select.org/
export default {
  name: 'Form',
  data() {
    return {
      form: {
        // name: '',
        // email: '',
        // adress: '',
        // postalcode: '',
        // country: '',
        //
        // For testing:
        name: 'Stef Kors',
        email: 'stef.kors@gmail.com',
        adress: 'Tenierstraat 13C',
        postalcode: '2526NX',
        country: {
          iso: 'NL',
          name: 'Nederland',
          priority: 1,
        },
      },
      products: [{
        name: 'radio',
        price: 5
      },{
        name: 'techno',
        price: 5
      }],
      countries: [],
      rates: {},
    }
  },
  async fetch() {
    try {
      this.countries = await this.$axios.$get('/shop/shipping/countries')
      this.rates = await this.$axios.$get('/shop/shipping/rates')
    } catch (err) {
      console.log('errrrr')
      console.log(err)
    }
  },
  methods: {
    async checkForm() {
      const formData = {
        name: this.name,
        email: this.email,
        adress: this.adress,
        country: this.country,
        postalcode: this.postalcode,
        products: this.products,
      }

      // const redirect = await this.$axios.$post('/shop/products/submit', formData)
      // TODO: replace mollie testing API key

      // When we don't recieve an url we should handle the redirect ourselves
      // if (!isUrl(redirect)) {
      //   return this.$router.push({ path: this.path, query: { id: redirect } })
      // }

      window.location = redirect
    },
  },
  computed: {
    shipping() {
      if (this.form.country) {
        const { iso } = this.form.country
        const rate = this.rates[iso]
        if (rate) {

          console.log('rate', rate.singlePrice)
          return `€${rate.singlePrice}`
        }
      }

      return `€${0}`
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

  & > div {
    border: 1px solid;
    padding: 1rem;
  }
}
</style>
