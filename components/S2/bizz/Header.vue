<template>
  <div class="header">
    <div class="profile">
      <img :src="user.picture" alt="user profile" />
      <div class="name">
        {{ user.name }}
      </div>
    </div>
    <div class="logout">
      <div class="button" v-on:click.prevent="logout">logout</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.auth.user,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout('google')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;

  .profile {
    display: grid;
    grid-template-columns: 4rem 1fr;
    align-items: center;
    gap: 1rem;
  }
  img {
    border-radius: 100%;
    padding: 0.2rem;
    border: 1px solid;
    width: 100%;
  }

  .button {
    color: $black;
    background: $white;
      border-bottom: 1px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid;
    }
  }
}
</style>
