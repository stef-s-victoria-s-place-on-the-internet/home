<template>
  <Confirmation :publication="artist.dir" :artist="artist" :customer="customer" />
</template>

<script>
import Confirmation from '~/components/publications/S1/payment/confirmation'
import { setMeta, publications } from '~/helpers'
const { ingrid } = publications

export default {
  components: {
    Confirmation,
  },
  async asyncData({ $axios, error, query }) {
    try {
      const customer = await $axios.$post('/shop/catalog/order-information', {
        id: query.id,
      })

      return {
        customer,
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      ...ingrid,
      artist: ingrid,
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      bodyAttrs: {
        class: this.dir,
      },
    }
  },
}
</script>

<style lang="scss">
.ingrid {
  --primary: #fff;
  --secondary: #fff;
  --bg-color: #000;
  --font-color: #fff;
}
</style>
