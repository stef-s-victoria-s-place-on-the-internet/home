<template>
  <MouseColor>
    <div class="login">
      <div class="button" v-on:click.prevent="login">Login</div>
    </div>
  </MouseColor>
</template>

<script>
import MouseColor from '~/components/S2/bizz/MouseColor'
export default {
  components: {
    MouseColor,
  },
  middleware: [
    function ({ redirect, $auth }) {
      if ($auth.loggedIn) {
        redirect('/bizz')
      }
    },
  ],
  methods: {
    login() {
      this.$auth.loginWith('google')
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.button {
  width: 100%;
  max-width: 250px;
  padding: 1rem 1.5rem 0.875rem;
  line-height: 1em;
  text-transform: uppercase;
  color: $white;
  background: $black;
  letter-spacing: 2px;
  border-radius: 0.375rem;
  margin-top: 2rem;
  cursor: pointer;
  @include flex-center;
  @include respond-until($screen-sm) {
    margin-top: 1.5rem;
  }
  @include respond-until($screen-xs) {
    margin-top: 1rem;
  }
}
</style>
