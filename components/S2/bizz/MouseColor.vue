<template>
  <div class="color" v-on:mousemove="updateCoordinates" v-bind:style="style">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      window: {
        x: 0,
        y: 0,
      },
      mouse: {
        x: 0,
        y: 0,
      },
      style: {
        backgroundColor: 'hsl(15, 54%, 85%)',
      },
    }
  },
  methods: {
    updateCoordinates() {
      this.mouse.x = event.clientX
      this.mouse.y = event.clientY
      this.window.x = window.innerHeight
      this.window.y = window.innerWidth

      const percentX =  (360 / this.window.x ) * this.mouse.x
      const percentY =  (100 / this.window.y ) * this.mouse.y

      this.style.backgroundColor = `hsl(${percentX}, ${percentY}%, ${85}%)`
    },
  },
}
</script>
