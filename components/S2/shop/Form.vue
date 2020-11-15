<template>
  <form @submit.prevent="checkForm" method="post">
    <slot />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    submitData: {
      type: Object,
      required: true
    }
  },
  methods: {
    async checkForm(val) {
      console.log(this.submitData, val)
      // const redirect = await this.$axios.$post('/shop/products/submit', this.submitData)
      // TODO: replace mollie testing API key

      // When we don't recieve an url we should handle the redirect ourselves
      if (!isUrl(redirect)) {
        return this.$router.push({ path: this.path, query: { id: redirect } })
      }

      window.location = redirect
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 1rem;
}
</style>
