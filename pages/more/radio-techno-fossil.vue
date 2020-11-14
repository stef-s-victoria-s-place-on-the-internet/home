<template>
<div class="shop-wrapper">

  <!-- Add logo component -->
  <div class="logo">
    <LogoLetter />
    <span>oneacre.online</span>
  </div>

  <!-- Add navigation -->
  <div class="product">
    <h1>More by <span>Sophie Dyer</span></h1>
    <section class="product-description">
      <h4>Description</h4>
      <p>Since 2013, Concrete Flux 流泥 has been a platform for self-determined and unsolicited investigations into urban spaces across China. For Issue 5 we shift focus from the region to explore the possibilities of aesthetic journalism. The
        micro-issue inaugurates a new direction for the publishing project, towards a sustained investigation into experimental documentary practices that address new visualities and vocabularies. Around this theme, we have gathered dissatisfied
        journalists, amateur filmmakers, former student leaders, poets and community activists. The resulting articles are experiments in aesthetic journalism as media activism – through a restructuring of the “sensuous parameters of reality
        itself”. (Bulter, 2010)</p>
    </section>
    <section class="product-images">
      <h4>Images</h4>
      <div class="image-content">
        <figure>
          <!-- <img src="" alt=""> -->
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
        </figure>
        <figure>
          <!-- <img src="" alt=""> -->
        </figure>
      </div>
    </section>
    <section class="product-specs">
      <h4>Information</h4>
      <ul class="info-section">
        <li>
          <p>Title</p>
          <p>Concrete Flux: Issue 5 Aesthetic Journalism</p>
        </li>
        <li>
          <p>Size</p>
          <p>210 x 297 mm</p>
        </li>
        <li>
          <p>Languague</p>
          <p>Simplified Chinese/English</p>
        </li>
        <li>
          <p>Contributors</p>
          <p>Franco ‘Bifo’ Berardi, Alfredo Cramerotti, Ana Naomi de Sousa and Twist Qu</p>
        </li>
        <li>
          <p>Editors</p>
          <p>Sophie Dyer and Solveig Suess</p>
        </li>
        <li>
          <p>Special Editors</p>
          <p>Ifor Duncan and Yugong 宫羽</p>
        </li>
        <li>
          <p>Translation</p>
          <p>Ceres Shi 时苒析, Yugong 宫羽 and Jennifer Zhang 张萃</p>
        </li>
        <li>
          <p>Proofing</p>
          <p>Miranda Johnson, Nicola Locatelli and Kevin Xing 邢凯新</p>
        </li>
        <li>
          <p>Price</p>
          <p>€3 / £3 / 30元 + VAT + Shipping</p>
        </li>
        <li>
          <p>More info</p>
          <p><a href="http://concreteflux.com">Concrete Flux</a></p>
        </li>
        <li>
          <p>Image credit</p>
          <p>Concrete Flux 流泥 CC BY</p>
        </li>
      </ul>
    </section>
  </div>
</div>
</template>

<script>
import LogoLetter from '~/components/S2/identity/LogoLetter.vue'

export default {
  components: {
    LogoLetter,
  },
}
</script>

<style lang="scss" scoped>
.logo {
    width: 15rem;
    height: 0;
    position: sticky;
    top: 2rem;
    font-size: 3.25rem;
    font-family: $font-nova;
    line-height: 1em;
    padding-bottom: 100%;
    border: 1px solid;
    border-radius: 50%;
    background: $white;
    cursor: pointer;
    @include flex-center();
    @include respond-until($screen-lg) {
        width: 12.5rem;
    }
    @include respond-until($screen-sm) {
        width: 100%;
        height: auto;
        top: 0;
        border: 0;
        border-bottom: 1px solid;
        border-radius: 0;
        padding: 1rem 0 0.5rem;
    }
    @include respond-until($screen-xs) {
        font-size: 3rem;
        padding: 0.5rem 0;
    }

    .logo-o {
        width: 50%;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        @include respond-until($screen-sm) {
            display: none;
        }
    }

    span {
        @include respond-from($screen-sm) {
            display: none;
        }
    }
}
.shop-wrapper {
    width: 100%;
    max-width: 1600px;
    padding: 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: fit-content(15rem) fit-content(80rem);
    grid-gap: 4rem;
    align-items: flex-start;
    justify-content: center;
    @include respond-until($screen-lg) {
        grid-gap: 3rem;
    }
    @include respond-until($screen-sm) {
        padding-top: 0;
        grid-template-columns: 1fr;
    }
    @include respond-until($screen-xs) {
        padding: 0 1rem;
    }

    .product {
        display: grid;
        grid-auto-rows: auto;
        grid-gap: 6rem;
        padding-top: 1rem;
        border-top: 1px solid;
        @include respond-until($screen-sm) {
            border-top: 0;
            padding-top: 15vh;
            grid-gap: 4rem;
        }
        @include respond-until($screen-xs) {}
        h1 {
            width: 100%;
            font-size: 6rem;
            font-family: $font-nova;
            line-height: 1em;
            padding-bottom: 4rem;
            text-transform: lowercase;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            color: rgba($black,0.25);
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
        // Description
        &-description {
            font-size: 2rem;
            line-height: 1.25em;
            @include respond-until($screen-lg) {
                font-size: 1.75rem;
            }
            @include respond-until($screen-md) {
                font-size: 1.75rem;
            }
            @include respond-until($screen-xs) {
                font-size: 1.5rem;
                line-height: 1.375em;
            }
        }
        // Images
        &-images {

            .image-content {
                display: grid;
                grid-auto-rows: auto;
                grid-gap: 1rem;
            }
            figure {
                height: 0;
                width: 100%;
                margin: 0;
                padding-bottom: 56.25%;
                background: $grey;

                &:nth-of-type(even) {
                    justify-self: flex-end;
                }
            }
        }
        &-specs {
            .info-section {
                font-size: 1.375rem;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 0 1.5rem;
                list-style: none;
                padding: 0;
                margin: 0;
                align-items: flex-end;
                @include respond-until($screen-md) {
                    font-size: 1.25rem;
                }
                @include respond-until($screen-sm) {
                    grid-template-columns: 1fr;
                    grid-gap: 1.5rem;
                }

                li {
                    padding: 2rem 0 0.25rem;
                    border-bottom: 1px solid $grey;
                    @include respond-until($screen-sm) {
                        padding: 0 0 0.25rem;
                    }

                    p {
                        &:first-of-type {
                            color: rgba($black,0.5);
                        }
                    }
                }
            }
        }
    }
}
</style>
