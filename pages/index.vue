<template>
  <main class="home-wrapper">
    <!-- <h1 class="starlight">Meep Meep</h1>
    <h1 class="merienda">Meep Meep</h1> -->
    <h1 class="parisienne">Meep Meep</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      exercitationem deleniti omnis soluta eum asperiores dicta suscipit odit
      ipsa, voluptatibus facere, quaerat expedita cum quod? Adipisci doloribus
      delectus distinctio qui? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Praesentium dolorum nostrum maxime rerum libero minima
      iure nemo similique repellendus reiciendis inventore, voluptatibus odit
      ipsum atque deleniti asperiores ut architecto quia.
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      child: {},
    }
  },
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  max-width: 60ch;
  margin: auto;
}

.starlight {
    font-family: 'Starlight', serif;
  font-weight: normal;
  font-size: 10em;
  line-height: .6em;
}

.merienda {
  font-family: 'Merienda', cursive;
  font-size: 3.8em;
  line-height: 0.7em;
  font-weight: 300;
}

.parisienne {
  font-family: 'Parisienne', cursive;
  font-size: 69px;
}
</style>
