<template>
  <div class="intro-wrapper">
    <!-- Logo -->
    <intro-logo />

    <div class="intro-text">
      <slot />
    </div>
  </div>
</template>

<script>
// TODO: Add users current time
import IntroLogo from '~/components/IntroLogo.vue'

export default {
  name: 'BlockIntro',

  components: {
    IntroLogo,
  },
}
</script>

<style lang="scss" scoped>
$graph-h-s: 4rem;
$graph-h-l: 8rem;

.intro-wrapper {
  position: relative;
  padding: 0 2rem;
  @include flex-center;
  flex-direction: column;
  @include respond-until($screen-xs) {
    padding: 0 1rem;
  }

  &:before {
    content: '';
    width: calc(100% + 4rem);
    height: $graph-h-s;
    top: 0;
    left: 0;
    background: $grey;
    @include respond-until($screen-m) {
      height: $graph-h-l;
    }
    @include respond-until($screen-xs) {
      height: $graph-h-s;
      width: calc(100% + 2rem);
    }
  }

  .intro-text {
    width: 100%;
    height: calc(100vh - #{$graph-h-s});
    max-width: 90rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(2, fit-content(1rem));
    align-content: space-between;
    position: relative;
    padding: 6rem 2rem;
    @include respond-until($screen-m) {
      height: calc(100vh - #{$graph-h-l});
      padding: 4rem 1.5rem 6rem;
    }
    @include respond-until($screen-s) {
      height: auto;
      min-height: calc(100vh - #{$graph-h-s});
      padding: 3rem 0;
      align-content: flex-start;
      grid-gap: 8vh;
    }
    @include respond-until($screen-xs) {
      min-height: calc(100vh - #{$graph-h-s});
    }

    p {
      width: 100%;
      max-width: 50rem;
      font-size: 1.75rem;
      line-height: 1.2em;
      letter-spacing: 0.25px;
      @include respond-until($screen-s) {
        width: calc(100% - 3rem);
        font-size: 1.5rem;
      }
      @include respond-until($screen-xs) {
        font-size: 1.25rem;
      }

      &:nth-of-type(even) {
        justify-self: flex-end;
      }

      a {
        border-bottom: 1px solid;
        transition: color 0.15s;

        &:hover {
          color: $blue;
        }
      }
    }

    &:after {
      content: '';
      display: block;
      background: $black;
    }

    &:after {
      width: 1px;
      height: 3rem;
      position: absolute;
      right: -4rem;
      bottom: 4rem;
      animation: swipe 3s infinite ease;
      @include respond-until($screen-l) {
        right: 2rem;
      }
      @include respond-until($screen-s) {
        right: 1rem;
      }
      @include respond-until($screen-xs) {
        right: 0;
        bottom: 6rem;
      }

      @keyframes swipe {
        0% {
          height: 3rem;
          transform: translateY(0);
        }
        25% {
          height: 1rem;
          transform: translateY(-4rem);
        }
        75% {
          height: 3rem;
          transform: translateY(0);
        }
        100% {
          height: 3rem;
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
