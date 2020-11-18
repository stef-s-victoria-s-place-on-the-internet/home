<template>
  <div class="header">
    {{ user.name }}
    <img :src="user.picture" alt="user profile">
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  img {
    border-radius: 100%;
    max-width: 5rem;
  }
}
</style>
