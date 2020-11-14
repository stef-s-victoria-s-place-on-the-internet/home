<template>
<section class="product-images">
  <slot />
</section>
</template>

<script>
export default {
  name: 'ProductImages',
}
</script>

<style lang="scss" scoped>
.product {
    &-images {

        .image-content {
            display: grid;
            grid-auto-rows: auto;
            grid-gap: 1rem;
        }
        figure {
            width: 100%;
            margin: 0;
            background: $grey;

            &:nth-of-type(even) {
                justify-self: flex-end;
            }

            img {
                width: 100%;
                display: block;
            }
        }
    }
}
</style>
