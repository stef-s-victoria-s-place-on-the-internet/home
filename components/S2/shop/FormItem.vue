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
  name: 'Form',
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
  grid-template-columns: 1fr;

  input {
    min-height: 1.5rem;
  }
}
</style>
