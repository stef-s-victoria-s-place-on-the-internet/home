<template>
<div class="header">
  <div class="profile">
    <img :src="user.picture" alt="user profile" />
    <div class="name">
      {{ user.name }}
    </div>
  </div>
  <div class="logout">
    <div class="button" v-on:click.prevent="logout">Logout</div>
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
    padding: 0.5rem 0;
    border-bottom: 1px solid $grey;
    @include subheader;

    .profile {
        display: grid;
        grid-template-columns: 2.5rem 1fr;
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
        color: rgba($black,0.4);
        background: $white;
        transition: color 0.125s;
        cursor: pointer;

        &:hover {
            color: $black;
        }
    }
}
</style>
