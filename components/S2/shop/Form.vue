<template>
  <form action="">
    <slot />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
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
