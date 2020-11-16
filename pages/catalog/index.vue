<template>
  <div class="routes">
    <div
      class="link-wrapper"
      v-for="(publication, index) in catalog"
      :key="publication.name + index"
    >
      <NuxtLink :to="publication.path">
        {{ publication.path }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    this.$router.options.routes.forEach((route) => {
      if (route.path.includes('catalog')) {
        this.catalog.push({
          name: route.name,
          path: route.path,
        })
      }
    })
  },
  data() {
    return {
      catalog: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.routes {
  padding: 1rem;

  .link-wrapper a {
    display: block;
    text-decoration: underline;
    padding: 1rem;
    border: 1px solid;
    margin: 1rem;
    border-radius: 4px;
  }
}
</style>
