<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

$primary: black;

.button--green,
input {
  display: inline-block;
  text-decoration: none;
  border: none;
  padding: 2ch 2ch;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  font-size: 1rem;
  color: $primary;
}

.button--green {
  color: #fff;
  background-color: $primary;
}

input {
  border-bottom: 1px solid;
}

.button--green:hover {
}
</style>
