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
  color: $black;
  font-family: $font-univers;
  // Font Rendering
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bg-color;
}

h1,
h2,
h3,
h4 {
  font-weight: normal;
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
}

p {
  margin: 0;
}
</style>
