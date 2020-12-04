<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive() : null }"
    @click="action"
    :title="title"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    action: {
      type: Function,
      required: true,
    },

    isActive: {
      type: Function,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-item {
  font-size: 1rem;
  padding: 0.75rem 1rem;
  background: $black;
  color: $white;
  justify-self: flex-end;
  appearance: none;
  border: none;
  border-radius: 0.375rem;
  opacity: 1;
  transition: opacity 0.15s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  & + .menu-item {
    margin-left: .3rem;
  }
}
</style>
