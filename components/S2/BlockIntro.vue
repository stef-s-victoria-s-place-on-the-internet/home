<template>
<div class="intro-wrapper">
  <!-- Logo -->
  <!-- <intro-logo /> -->

  <div class="intro-text">
    <slot />
  </div>
</div>
</template>

<script>
// TODO: Add users current time
import IntroLogo from '~/components/S2/identity/IntroLogo.vue'
import LogoDither from '~/components/S2/identity/DitherSVG.vue'

export default {
  name: 'BlockIntro',

  components: {
    IntroLogo,
    LogoDither,
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');

.intro-wrapper {
    position: relative;
    padding: 6rem 2rem 0;
    color: $pub-color;
    @include flex-center;
    flex-direction: column;
    @include respond-until($screen-sm) {
        padding: 10rem 2rem 0;
    }
    @include respond-until($screen-xs) {
        padding: 8rem 1.25rem 0;
    }

    .intro-text {
        width: 100%;
        max-width: 90rem;
        display: grid;
        grid-gap: 1.25rem;
        grid-template-rows: repeat(2, fit-content(1rem));
        align-content: flex-start;
        position: relative;
        padding: 4rem 2rem 10rem;
        border-top: 1px solid rgba($pub-color,0.2);
        border-bottom: 1px solid rgba($pub-color,0.2);
        @include respond-until($screen-md) {
            grid-gap: 1rem;
            padding: 4rem 1.5rem 8rem;
        }
        @include respond-until($screen-sm) {
            align-content: flex-start;
            border-top: 0;
            padding: 0 0 6rem;
        }

        p {
            width: 100%;
            max-width: 50rem;
            font-size: 1.75rem;
            line-height: 1.2em;
            font-family: $font-univers;
            letter-spacing: 0.25px;
            opacity: 0;
            animation: fadeIn 2.5s ease;
            animation-fill-mode: forwards;
            @for $i from 1 through 8 {
                &:nth-of-type(#{$i}) {
                    animation-delay: calc(1 * #{$i}s - 0.75s);
                }
            }
            @include respond-until($screen-sm) {
                width: calc(100% - 3rem);
                font-size: 1.5rem;
            }
            @include respond-until($screen-xs) {
                font-size: 1.25rem;
            }

            &.jp {
                line-height: 1.375em;
                color: rgba($pub-color,0.2);
                &:not(:last-of-type) {
                    padding-bottom: 6rem;
                    @include respond-until($screen-md) {
                        padding-bottom: 4rem;
                    }
                }
            }

            &.r {
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

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        // &:after {
        //     content: '';
        //     display: block;
        //     background: $pub-color;
        //     width: 1px;
        //     height: 3rem;
        //     position: sticky;
        //     top: 0;
        //     right: 4rem;
        //     animation: swipe 3s infinite ease;
        //     @include respond-until($screen-lg) {
        //         right: 2rem;
        //     }
        //     @include respond-until($screen-sm) {
        //         right: 1rem;
        //     }
        //     @include respond-until($screen-xs) {
        //         right: 0;
        //         bottom: 6rem;
        //     }
        //
        //     @keyframes swipe {
        //         0% {
        //             height: 3rem;
        //             transform: translateY(0);
        //         }
        //         25% {
        //             height: 1rem;
        //             transform: translateY(-4rem);
        //         }
        //         75% {
        //             height: 3rem;
        //             transform: translateY(0);
        //         }
        //         100% {
        //             height: 3rem;
        //             transform: translateY(0);
        //         }
        //     }
        // }
    }
}
</style>
