<template>
  <div class="form-item">
    <label v-if="label" :for="label">{{ label }}:</label>
    <input
      v-if="value !== undefined"
      :type="type"
      :name="label"
      v-bind:value="value"
      v-on:input="$emit('update:value', $event.target.value)"
      required
    />
    <slot />
  </div>
</template>

<script>
import * as _ from 'lodash'
// https://vue-select.org/

export default {
  name: 'FormItem',
  props: {
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      validator(type) {
        return ['text', 'email'].includes(type)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.form-item {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 0.25rem;
    font-size: 1.375rem;

    label {
        font-size: 1.25rem;
        color: rgba($black,0.4);

        &:first-letter {
            text-transform: uppercase;
        }
    }

    div,
    input {
        font-size: 1.375rem;
        font-family: $font-univers;
        line-height: 1em;
        min-height: 2.5rem;
        border: 1px solid $grey;
        border-radius: 0.5rem;
        padding: 0.875rem 1rem 0.5rem;
    }

    &.country {
        .v-select {
            padding: 0;
            border: 0;
        }
    }

    // NODE MODULE OVERRIDE
    // .vs__dropdown-toggle {
    //     border: 1px solid $grey;
    //     border-radius: 0.5rem;
    //     padding: 0.25rem 0.5rem;
    // }
}
</style>
