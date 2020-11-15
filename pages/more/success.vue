<template>
  <div class="confirmation">
    <pre>{{ customer }}</pre>
  </div>
</template>

<script>
import Confirmation from '~/components/S1/payment/confirmation'
export default {
  components: {
    Confirmation,
  },
  async asyncData({ $axios, error, query }) {
    try {
      const customer = await $axios.$post('/shop/products/order-information', {
        id: query.id,
      })

      console.log(customer)

      if (!customer) {
        return {
          customer: {
            _id: '5fb164cefbd53725b03dd7d0',
            id: 'D1605461198533',
            name: 'Stef Kors',
            email: 'stef.kors@gmail.com',
            adress: 'Tenierstraat 13C',
            postalcode: '2526NX',
            country: {
              iso: 'NL',
              name: 'Netherlands',
            },
            date: '2020-11-15T17:26:38.533Z',
            paid: true,
            invoicenr: 28,
            payment_amount: '16.10',
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
            attachment: {
              name: 'SHOP-OA28-D1605461198533.pdf',
              path: './temp_files/SHOP-OA28-D1605461198533.pdf',
            },
          },
        }
      }

      return {
        customer,
      }
    } catch (err) {
      return {
        customer: {
          _id: '5fb164cefbd53725b03dd7d0',
          id: 'D1605461198533',
          name: 'Stef Kors',
          email: 'stef.kors@gmail.com',
          adress: 'Tenierstraat 13C',
          postalcode: '2526NX',
          country: {
            iso: 'NL',
            name: 'Netherlands',
          },
          date: '2020-11-15T17:26:38.533Z',
          paid: true,
          invoicenr: 28,
          payment_amount: '16.10',
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
          attachment: {
            name: 'SHOP-OA28-D1605461198533.pdf',
            path: './temp_files/SHOP-OA28-D1605461198533.pdf',
          },
        },
      }

      console.log(err)
    }
  },
}
</script>

<style lang="scss">
.karina {
  --primary: #191919;
  --secondary: #d9d9d9;
  --bg-color: #fff;
  --font-color: #191919;

  background-color: $secondary;
}
</style>
