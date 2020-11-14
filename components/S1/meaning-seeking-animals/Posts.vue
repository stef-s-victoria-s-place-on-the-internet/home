<template>
  <div class="ma_wrapper">
    <!-- Title -->
    <div class="ma_title">
      <h1>Meaning Seeking Animals</h1>
      <h2>Lisa van Casand</h2>
    </div>
    <div class="ma_background"></div>

    <!-- grid -->
    <div class="ma_container">
      <div
        class="ma_coordinate_wrapper"
        v-for="{ x, y } in coordinates"
        :key="x + '-' + y"
        v-bind:style="{
          left: x * post_width + 20 + 'px',
          top: y * post_height + 20 + 'px',
        }"
      >
        <div class="ma_coordinate" :id="'x' + x + '-y' + y">
          <p>{{ x }}, {{ y }}</p>
        </div>
      </div>
    </div>

    <!-- posts -->
    <div class="ma_container">
      <!-- post -->
      <div
        :v-if="posts"
        v-for="post in posts"
        :key="post._id"
        class="ma_post"
        :id="'x' + post.coordinates.x + '-y' + post.coordinates.y"
        v-bind:style="{
          left: post.coordinates.x * post_width + 'px',
          top: post.coordinates.y * post_height + 'px',
        }"
      >
        <span class="ma_position">X: {{ post.coordinates.x }}</span>
        <span class="ma_position">Y: {{ post.coordinates.y }}</span>
        <h3 class="balance-text">
          {{ post.title }}
        </h3>

        <pre class="ma_text">{{ post.content | parseContent }}
            <img v-if="post.image" :src="post.image" />
          </pre>

        <div class="ma_post_reference_inputs">
          <div class="source" :id="post.references">
            <span
              v-for="key in Object.keys(post.inputs)"
              :key="key"
              :class="key"
            >
              {{ post.inputs[key] }}
            </span>
          </div>
        </div>
        <cite class="ma_post_reference_preview"></cite>
        <div class="ma_select"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post_margin: 40,
      post_width: 540,
      post_height: 640,
      coordinates: [],
    }
  },
  props: {
    posts: {
      type: Array,
      required: false,
    },
  },
  created() {
    for (let x = 0; x < 50; x++) {
      for (let y = 0; y < 30; y++) {
        this.coordinates.push({ x, y })
      }
    }
  },
  methods: {},
  filters: {
    parseContent: (content) => {
      return content.trim()
    },
  },
}
</script>

<style>
.ma_text {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
</style>
