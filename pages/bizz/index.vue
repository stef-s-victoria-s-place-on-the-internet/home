<template>
  <ShopWrapper>
    <Header />
      <h1>more <span>purchases</span></h1>
    <section>
      <h4>item</h4>
      
    </section>
  </ShopWrapper>
</template>

<script>
import Header from '~/components/S2/bizz/Header'
import ShopWrapper from '~/components/S2/shop/ShopWrapper'
export default {
  middleware: 'auth',
  components: {
    Header,
    ShopWrapper,
  },
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 6rem;
  font-family: $font-nova;
  line-height: 1em;
  padding-bottom: 4rem;
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: rgba($black, 0.25);
  margin: 0;
  @include respond-until($screen-lg) {
    font-size: 5.5rem;
  }
  @include respond-until($screen-md) {
    font-size: 5rem;
  }
  @include respond-until($screen-sm) {
    padding-bottom: 0;
  }
  @include respond-until($screen-xs) {
    font-size: 4rem;
  }

  span {
    color: $black;
  }
}

section {
  border-top: 1px solid;
  padding-top: 0.75rem;
  padding-bottom: 2rem;
  h4 {
    margin: 0;
    font-size: 1rem;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 2rem;
    @include respond-until($screen-xs) {
      padding-bottom: 2.5rem;
    }
  }
}
</style>
