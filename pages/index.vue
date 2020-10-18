<template>
<main class="home-wrapper">
  <!-- Intro -->
  <block-intro />

  <div class="home-catalog">
    <!-- Content -->
  </div>
</main>
</template>

<script>
import BlockIntro from '~/components/BlockIntro.vue';


export default {
  components: {
    BlockIntro
  }
}
</script>

<style lang="scss" scoped>
.home-catalog {
    width: 100%;
    min-height: 200vh;
    background: $black;
}
</style>
