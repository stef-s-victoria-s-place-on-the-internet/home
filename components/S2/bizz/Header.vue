<template>
  <div class="header">
    <div class="profile">
      <img :src="user.picture" alt="user profile" />
      <div class="name">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  .profile {
    display: grid;
    grid-template-columns: 4rem 1fr;
     align-items: center;
     gap: 1rem;
  }
  img {
    border-radius: 100%;
    padding: .2rem;
    border: 1px solid;
    width: 100%;
  }
}
</style>
