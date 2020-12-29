<template>
  <nuxt />
</template>

<style lang="scss">
@import './assets/scss/fonts.scss';

:root {
  --primary: #{$blue};
  --secondary: #{$grey};
  --bg-color: #{$white};
  --font-color: #{$black};
}

* {
  box-sizing: border-box;
}

html {
  font-size: 12px;
}

body {
  margin: 0;
  padding: 0;
  color: $white;
  font-family: 'Merriweather', serif;
  // Font Rendering
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $black;
  font-size: 1.7rem;
  line-height: 3rem;
}

h1,
h2,
h3,
h4 {
  font-size: 69px;
}

a {
  color: inherit;
  text-decoration: none;
}

figure {
  margin: 0;
}

img {
  display: block;
  width: 100%;
}

p {
  margin: 0;
}
</style>
