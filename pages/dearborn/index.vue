<template>
  <div class="container">
    <div>
      <h1>dearborn</h1>
      <p>
        document will be created as <span class="code-inline">{{slugifiedSlug}}</span>
      </p>
    </div>
    <menu>
      <input type="text" v-model="slug" />
      <nuxt-link :to="'/dearborn/write/' + slugifiedSlug" class="button--green">start writing</nuxt-link>
    </menu>
    <div></div>
  </div>
</template>

<script>
import slugify from "@sindresorhus/slugify";
export default {
  components: {},
  data() {
    return {
      slug: 'default-slug',
    }
  },
  methods: {
    handleScroll(event) {},
  },
  computed: {
    slugifiedSlug() {
      return slugify(this.slug)
    },
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

  .code-inline {
    border: 1px solid;
    border-radius: 4px;
    padding: .5ch;
  }
}
</style>
