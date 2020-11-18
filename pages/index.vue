<template>
  <main class="home-wrapper">
    <!-- Intro -->
    <block-intro>
      <p class="en l">
        <a href="#">oneacre.online</a> is an experimental publishing &amp;
        distribution project based in The Hague, The Netherlands. The project
        seeds unprintable text-based works by emerging artists.
      </p>
      <p class="jp l">
        <a href="#">oneacre.online</a>
        はオンライン•プラットフォームを使い、若手作家による印刷不可能なテキスト•ベースの作品を発表、配布する実験的なプロジェクト。
      </p>
      <p class="en r">
        Currently it presents the second release of Poetics and Politics of
        Erasure by Yun Lee, a multidisciplinary research paper on the aesthetics
        and politics of erasure.
      </p>
      <p class="jp r">
        『消去の詩学と政治
        』はユン•リーによる「消去」に関する美学と政治を考察するマルティディシプリナリー•エッセイ。
      </p>
      <p class="en l">
        <a
          href="https://youtu.be/xWncBcEBL2E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please join us for the publication launch of Poetics and Politics of
          Erasure on Friday Nov 20 2020 at 14:30 CEST / 21:30 JST as part of the
          VIRTUAL ART BOOK FAIR of TOKYO ART BOOK FAIR.
        </a>
      </p>
      <p class="jp l">
        <a
          href="https://youtu.be/xWncBcEBL2E"
          target="_blank"
          rel="noopener noreferrer"
        >
          2020年11月20日（金）14:30（CEST）／21:30（JST）より、VIRTUAL ART BOOK
          FAIR（TOKYO ART BOOK
          FAIRのVABF）の一環として、『消去の詩学と政治学』の出版記念イベントが開催されます。
        </a>
      </p>
      <p class="en r">
        To purchase a copy of the publication please
        <NuxtLink to="/catalog/poetics-and-politics-of-erasure/payment"
          >click here</NuxtLink
        >
      </p>
      <p class="jp r">
        出版物の購入をご希望の方は、こちらをクリックしてください。
      </p>
    </block-intro>

    <article>
      <component v-bind:is="child.component"></component>
    </article>

    <BlockFooter> </BlockFooter>
  </main>
</template>

<script>
import BlockIntro from '~/components/S2/BlockIntro.vue'
import BlockFooter from '~/components/S2/BlockFooter.vue'
export default {
  components: {
    BlockIntro,
    BlockFooter,
  },
  data() {
    return {
      child: {},
    }
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      if (route.name === 'catalog-poetics-and-politics-of-erasure') {
        this.child = route
      }
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
