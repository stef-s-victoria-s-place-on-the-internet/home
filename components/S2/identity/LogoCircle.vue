<template>
<nuxt-link to="/" class="logo">
  <logo-letter />
  <span>oneacre.online</span>
</nuxt-link>
</template>

<script>
import LogoLetter from '~/components/S2/identity/LogoLetter.vue'

export default {
  name: 'LogoCircle',

  components: {
    LogoLetter,
  },
}
</script>

<style lang="scss" scoped>
.logo {
    width: 15rem;
    height: 0;
    position: sticky;
    top: 2rem;
    font-size: 3.25rem;
    font-family: $font-nova;
    line-height: 1em;
    padding-bottom: 100%;
    border: 1px solid;
    border-radius: 50%;
    background: $white;
    cursor: pointer;
    @include flex-center();
    @include respond-until($screen-lg) {
        width: 12.5rem;
    }
    @include respond-until($screen-sm) {
        width: 100%;
        height: auto;
        top: 0;
        border: 0;
        border-bottom: 1px solid;
        border-radius: 0;
        padding: 1rem 0 0.5rem;
    }
    @include respond-until($screen-xs) {
        font-size: 3rem;
        padding: 0.5rem 0;
    }

    .logo-o {
        width: 50%;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        @include respond-until($screen-sm) {
            display: none;
        }
    }

    span {
        @include respond-from($screen-sm) {
            display: none;
        }
    }
}
</style>
