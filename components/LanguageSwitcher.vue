<template>
  <div>
    <div class="wrapper">
      <nuxt-link class="link" :to="switchLocalePath('en')">English</nuxt-link> //
      <nuxt-link class="link" :to="switchLocalePath('nl')">Dutch</nuxt-link> //
      <nuxt-link class="link" :to="switchLocalePath('el')">Greek</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  background-color: $black;
  font-size: 1rem;
}
.link {
  margin: auto;
}
</style>
