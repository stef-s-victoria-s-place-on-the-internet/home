<template>
  <Form :publication="artist.dir" :artist="artist" />
</template>

<script>
import Form from '~/components/publications/S1/payment/form'
import { setMeta, publications } from '~/helpers'
const { lisa } = publications

export default {
  components: {
    Form,
  },
  data() {
    return {
      ...lisa,
      artist: lisa,
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
.lisa {
  --primary: #ff4713;
  --secondary: #fff;
  --bg-color: #fff;
  --font-color: #000;

  background-image: url("/images/lisa/msa_bg.svg");
  background-size: 1500px;
  background-repeat: repeat;
}
</style>
