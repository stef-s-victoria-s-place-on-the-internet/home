<template>
<div class="intro-logo">
  <div class="logo-content">
    <p>oneacre<span>.online</span></p>
    <figure>
      <!-- Logo Visual -->
    </figure>
    <p>.online</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'IntroLogo'
}
</script>

<style lang="scss" scoped>
.intro-logo {
    width: 100%;
    height: 100vh;
    background: $black;
    position: absolute;
    top: 0;
    @include flex-center;
    animation: fadeOut 1.25s;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
    pointer-events: none;
    z-index: 1;
    @include respond-until($screen-xs) {
        padding: 15vh 0;
        align-items: flex-end;
    }

    .logo-content {
        font-size: 6vw;
        font-family: $font-nova;
        color: $white;
        line-height: 1em;
        flex-direction: column;
        @include flex-center;
        @include respond-until($screen-lg) {
            font-size: 7.5vw;
        }
        @include respond-until($screen-md) {
            font-size: 9vw;
        }
        @include respond-until($screen-xs) {
            font-size: 11vw;
        }
        p {
            width: 100%;

            &:last-of-type {
                text-align: right;
            }
            span {
                opacity: 0;
            }
        }
        figure {
            width: 100%;
            padding-bottom: 20%;
            margin: 0.25rem 0 0.5rem;
            border: 2px solid;
            @include respond-until($screen-xs) {
                border: 1px solid;
            }
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
}
</style>
