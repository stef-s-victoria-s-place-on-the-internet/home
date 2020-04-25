<template>
  <div class="container">
    <menu>
      <nuxt-link to="/footnotes" class="button--green">footnote test</nuxt-link>
      <nuxt-link to="/dearborn" class="button--green">dearborn</nuxt-link>
    </menu>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dolorem sunt praesentium similique numquam magni harum illo est adipisci
        quae voluptatem aut placeat, asperiores voluptate voluptatibus! Optio
        culpa corrupti nemo? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. In, eum doloribus. Nulla libero corporis tempore cum ullam.
        Quaerat ut natus corrupti nostrum expedita eaque. Libero unde pariatur
        optio ut dignissimos!
      </p>
    </div>
  </div>
</template>

<script>
import { scrollPercentage } from '~/helpers'

export default {
  components: {},
  data() {
    return {
      string: 'string',
      array: [],
      scroll: {
        vector: 0,
        y: 0,
      },
    }
  },
  mounted() {
    this.handleScroll()
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {},
  },
  computed: {
    computedFunction() {},
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 60ch;
  margin: 10ch auto;

  menu {
    padding: 10ch 0;
  }
}
</style>
