<template>
  <div class="page">
    <Header />
    <div>hi</div>
  </div>
</template>

<script>
import Header from '~/components/S2/bizz/Header'
export default {
  middleware: 'auth',
  components: {
    Header,
  },
}
</script>

<style>
</style>
