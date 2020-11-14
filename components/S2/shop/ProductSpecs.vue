<template>
<section class="product-specs">
  <slot />
</section>
</template>

<script>
export default {
  name: 'ProductSpecs',
}
</script>

<style lang="scss" scoped>
.product {
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
</style>
