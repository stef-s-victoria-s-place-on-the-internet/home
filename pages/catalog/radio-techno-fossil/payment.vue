<template>
  <div class="wrapper">
    <canvas id="canvas"></canvas>
    <Form :publication="artist.dir" :artist="artist" />
    <resize-observer class="resizer" @notify="handleResize" />
  </div>
</template>

<script>
import Form from '~/components/publications/S1/payment/form'
import 'vue-resize/dist/vue-resize.css'
import { setMeta, publications } from '~/helpers'
const { sophieeline } = publications

export default {
  components: {
    Form,
  },
  data() {
    return {
      ...sophieeline,
      artist: sophieeline,
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      bodyAttrs: {
        class: this.dir,
      },
    }
  },
  mounted() {
    this.handleResize({width: 4000, height: 4000})
  },
  methods: {
    handleResize: function({ width, height}) {
      console.log('draw')
      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height

      context.fillStyle = 'rgba(17,69,38, 1)'
      this.drawBox(0, 0, width, height) // general background
      this.drawBox(0, 0, width, height)

      // boxes green
      for (var i = 0; i < 10; i++) {
        this.drawBox(
          this.getRandomInt(-200, width - 100),
          this.getRandomInt(-200, height - 100),
          this.getRandomInt(200, 300),
          this.getRandomInt(200, 600)
        )
      }
    },
    drawBox(x, y, width, height) {
      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')
      width = x + width
      height = y + height
      var density = (width * height) / 60
      for (var i = 0; i < density; i++) {
        var box_x = this.getRandomInt(x, width)
        var box_y = this.getRandomInt(y, height)
        var px_width = 1
        var px_height = 1
        context.fillRect(box_x, box_y, px_width, px_height)
      }
    },
    getRandomInt(min, max) {
      return Math.floor(min + Math.random() * (max - min))
    },
  },
}
</script>

<style lang="scss">
.sophieeline {
  --primary: #114526;
  --secondary: #fff;
  --bg-color: #fff;
  --font-color: #114526;
}

#canvas {
  position: fixed;
  top: 0;
}

.resizer {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
