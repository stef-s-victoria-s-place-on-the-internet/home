<template>
  <main class="home-wrapper">
    <!-- Intro -->
    <block-intro>
      <p>
        <a href="#">oneacre.online</a> is an experimental publishing &amp;
        distribution project based in The Hague, The Netherlands. The project
        seeds unprintable text-based works by emerging artists.
      </p>
      <p>
        Currently it presents the second release of Poetics and Politics of
        Erasure by Yun Lee, a multidisciplinary research paper on the aesthetics
        and politics of erasure.
      </p>
      <p>
        Please join us for the publication launch of Poetics and Politics of
        Erasure on Friday Nov 20 2020 at 14:30 CEST / 21:30 JST as part of the
        VIRTUAL ART BOOK FAIR of TOKYO ART BOOK FAIR.
      </p>
      <p>
        To purchase a copy of the publication please
        <NuxtLink to="/catalog/poetics-and-politics-of-erasure/payment"
          >click here</NuxtLink
        >
      </p>
    </block-intro>

    <div class="home-catalog">
      <!-- Content -->
    </div>
  </main>
</template>

<script>
import BlockIntro from '~/components/BlockIntro.vue'

export default {
  components: {
    BlockIntro,
  },
}
</script>

<style lang="scss" scoped>
.home-catalog {
  width: 100%;
  min-height: 200vh;
  background: $black;
}
</style>
