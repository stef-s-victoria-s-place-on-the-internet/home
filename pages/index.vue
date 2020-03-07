<template>
  <div class="container">
    <div class="explainer">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        repudiandae quam, similique eligendi voluptatum repellat autem
        veritatis, non nisi eveniet aperiam eius nihil, quia a harum ipsum
        quidem sequi! Est. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quas reprehenderit animi est cum nostrum eligendi porro magnam
        nisi, ipsa excepturi quis recusandae, eos rerum atque exercitationem.
        Quod iste magnam sint? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit, obcaecati aperiam error minima earum qui
        eveniet harum, iste atque, accusantium adipisci tempora iusto tempore
        repellendus voluptate quis! Inventore, iste ducimus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum expedita
        at similique, quidem fugiat sequi sit voluptas nobis quo id natus a
        laboriosam eligendi officiis ipsum dolore aliquam! Laudantium, quae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi,
        similique, sapiente quo aspernatur aliquam asperiores quis, ex ipsam
        quibusdam veniam quod. Omnis, enim excepturi ipsum harum numquam sequi
        sint.
      </p>
    </div>
    <div class="substrate">
      <div
        class="layer"
        v-bind:style="{ top: index * 7 + 'vh', zIndex: layers.length - index }"
        v-for="(layer, index) in layers"
        :key="layer"
      >
        {{ Math.round(scroll.vector)+ '%' }}
      </div>
    </div>
  </div>
</template>

<script>
import { scrollPercentage } from "~/helpers";

export default {
  components: {},
  data() {
    return {
      testing: 'this is my testing',
      layers: [
        { title: 'Foo', author: 'Foo', date: 'Foo', link: 'Foo' },
        { title: 'Foo', author: 'Foo', date: 'Foo', link: 'Foo' },
        { title: 'Foo', author: 'Foo', date: 'Foo', link: 'Foo' },
        { title: 'Foo', author: 'Foo', date: 'Foo', link: 'Foo' },
        { title: 'Bar', author: 'Bar', date: 'Bar', link: 'Bar' }
      ],
      scroll: {
        vector: 0,
        y: 0
      }
    }
  },
  mounted() {
    this.handleScroll()
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.scroll.vector = scrollPercentage()
    }
  }
}
</script>

<style lang="scss">
.container {}

.explainer {
  margin: 20vh auto;
  max-width: 900px;
}

.substrate {
  position: relative;
  margin: 0 auto;
  width: 20vw;

  .layer {
    border: 2px solid;
    border-radius: 10px;
    width: 20vw;
    height: 20vw;
    transform: rotate(35deg) skew(-40deg, -10deg);
    position: absolute;
    left: 0;
    right: 0;
    background: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
}
</style>
