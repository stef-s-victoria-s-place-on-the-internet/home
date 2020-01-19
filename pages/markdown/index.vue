<template>
  <div class="container">
    <div>
      <nuxt-link to="/" class="button--green">back</nuxt-link>
      <Markdown :file="require('./content.md')" />
    </div>
  </div>
</template>

<script>
import Markdown from '~/components/Markdown.vue'

export default {
  components: {
    Markdown
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 600px;
}
</style>
