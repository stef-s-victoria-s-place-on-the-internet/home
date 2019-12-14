<template>
  <div class="container">
    <div>
      <component :is='this.contents' />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: null,
    }
  },
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  created() {
    const markdown = this.file
    this.contents = markdown.vue.component
  },
}
</script>
