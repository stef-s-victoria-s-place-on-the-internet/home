<template>
  <div class="wrapper">
    <div class="greetings">
      <img src="~/assets/images/christmas-2020/seasongreetings-crop.png" alt="" />
    </div>
      <h1>and... a happy</h1>
    <div class="newyear">
      <img src="~/assets/images/christmas-2020/newyear.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 80ch;
  margin: auto;
  padding: 10rem 0;
}
.newyear {

}

.greetings {

}

.greetings,
.newyear {
    margin: auto;
  padding: 1rem;
  border: 1px solid;
  position: relative;
  background-color: $black;
  img {
    margin: auto;
  }
}

img {
  width: 100%;
}

h1 {
  text-align: center;
  display: block;
  width: 100%;
  font-family: 'Merriweather';
  font-size: 3rem;
}
</style>
