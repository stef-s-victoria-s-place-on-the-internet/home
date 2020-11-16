<template>
<form @submit.prevent="checkForm" method="post">
  <slot />
  <button type="submit">Submit</button>
</form>
</template>

<script>
import isUrl from 'is-url-superb'

export default {
  name: 'Form',
  props: {
    submitData: {
      type: Object,
      required: true
    }
  },
  methods: {
    async checkForm() {
      const redirect = await this.$axios.$post('/shop/products/submit', this.submitData)
      // When we don't recieve an url we should handle the redirect ourselves
      if (!isUrl(redirect)) {
        return this.$router.push({
          path: this.path,
          query: {
            id: redirect
          }
        })
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
    row-gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid;

    button {
        width: 100%;
        max-width: 200px;
        padding: 1rem 1.5rem 0.875rem;
        font-size: 1rem;
        font-family: $font-univers;
        line-height: 1em;
        text-transform: uppercase;
        color: $white;
        background: $black;
        letter-spacing: 2px;
        border: 0;
        border-radius: 0.375rem;
        margin-top: 3rem;
        cursor: pointer;
        @include flex-center;
        @include respond-until($screen-sm) {
            margin-top: 1.5rem;
        }
        @include respond-until($screen-xs) {
            margin-top: 1rem;
        }
    }
    .v-select .vs__dropdown-toggle {
        border: 0 !important;
    }
}
</style>
