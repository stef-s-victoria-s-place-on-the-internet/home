<template>
  <div class="13D">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: '13D',
}
</script>
<style lang="scss">
.lang {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: grid;
  grid-template-columns: 1.5rem;
  grid-template-rows: 1.5rem 1.5rem 1.5rem;
  gap: 0.4rem;
  z-index: 999;

  a {
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    border-radius: 100%;
    display: block;
    text-align: center;
    padding: 0.2rem;

    &.nuxt-link-active {
      background-color: #a33a42;
    }
  }
}

* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Gopher';
  src: url('~assets/fonts/Gopher-MediumItalic.woff2') format('woff2'),
    url('~assets/fonts/Gopher-MediumItalic.woff') format('woff'),
    url('~assets/fonts/Gopher-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Gecko';
  src: url('~assets/fonts/Gecko.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

html {
  margin: 0;
  padding: 0;
}

body {
  background-color: #2e2824;
  color: #d0a770;
  font-family: 'Gopher';
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

body #lang-el {
  font-family: 'Gecko';
  font-weight: 400;
  letter-spacing: 0.097em;
  font-size: 23px;

  .lang a {
    align-self: center;
  }
}

video {
  width: 100%;
  height: 99vh;
}

p {
  margin: 0;
  text-align: center;
}

.box {
  border: 1px solid;
  text-align: center;
  margin-bottom: 0.5rem;
  background-color: #d0a770;
  color: #2e2824;
}

#header {
  grid-area: header;
  text-align: center;
  align-self: start;
}

#from {
  grid-area: from;
  justify-self: center;
  align-self: end;
  animation: shake 10s infinite;
}

#video {
  grid-area: header / from / footer / to;
  object-fit: scale-down;
  z-index: -1;
}

#to {
  grid-area: to;
  text-align: left;
  justify-self: center;
  align-self: end;
  animation: shake 10s infinite;
}

#footer {
  grid-area: footer;
  text-align: center;
  align-self: end;
}

#card {
  margin: 0;
  display: grid;
  width: 100%;
  height: 99vh;
  grid-template-areas:
    'header header header header header header'
    'from from from to to to'
    'footer footer footer footer footer footer';
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .lang {
    grid-area: lang;
    grid-template-rows: 1.5rem;
    grid-template-columns: 1.5rem 1.5rem 1.5rem;
    position: relative;
    justify-self: center;
    padding: 0;
    margin: 0;
  }

  video {
    width: 100%;
    height: 100%;
  }

  #card {
    margin: 0;
    display: grid;
    width: 100%;
    height: 99vh;
    grid-template-areas:
      'lang'
      'header'
      'video'
      'to'
      'footer';
    grid-template-rows: 0.5fr 1fr 1fr 1fr 1fr;
  }

  #header {
    align-self: end;
  }

  #from {
    display: none;
  }

  #video {
    grid-area: video;
    object-fit: scale-down;
    z-index: -1;
  }

  #to {
    grid-area: to;
    align-self: center;
  }

  #footer {
    align-self: start;
  }

  #image-right {
    display: none;
  }

  #image-left {
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  video {
    width: 100%;
    height: 100%;
  }

  #card {
    margin: 0;
    display: grid;
    width: 100%;
    height: 99vh;
    grid-template-areas:
      'header'
      'from'
      'video'
      'to'
      'footer';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

  #header {
    align-self: end;
  }

  #from {
    grid-area: from;
    align-self: center;
  }

  #video {
    grid-area: video;
    object-fit: scale-down;
    z-index: -1;
  }

  #to {
    grid-area: to;
    text-align: left;
    align-self: center;
  }

  #footer {
    align-self: start;
  }

  #image-right {
    display: none;
  }

  #image-left {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .lang {
    left: 3rem;
  }
  #image-right {
    display: grid;
    grid-area: br;
    margin: 0;
    background-image: url('/images/scallop.png');
    background-repeat: repeat-y;
    background-size: 3vw;
    filter: hue-rotate(70deg);
  }

  #image-left {
    display: grid;
    grid-area: bl;
    margin: 0;
    background-image: url('/images/scallop.png');
    background-repeat: repeat-y;
    background-size: 3vw;
    filter: hue-rotate(70deg);
    transform: scaleX(-1);
  }

  video {
    width: 100%;
    height: 60vh;
  }

  #card {
    margin: 0;
    display: grid;
    width: 100%;
    height: 99vh;
    grid-template-areas:
      'br header bl'
      'br from bl'
      'br video bl'
      'br to bl'
      'br footer bl';
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
  #header {
    align-self: start;
  }

  #from {
    grid-area: from;
    justify-self: center;
  }

  #video {
    grid-area: video;
    object-fit: scale-down;
    z-index: -1;
  }

  #to {
    grid-area: to;
    text-align: left;
  }

  #footer {
    align-self: end;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .lang {
    left: 1rem;
  }
  video {
    width: 100%;
    height: 99vh;
  }

  #header {
    grid-area: header;
    text-align: center;
    align-self: start;
  }

  #from {
    grid-area: from;
    justify-self: left;
    align-self: end;
    animation: shake 10s infinite;
  }

  #video {
    grid-area: header / from / footer / to;
    object-fit: scale-down;
    z-index: -1;
  }

  #to {
    grid-area: to;
    text-align: left;
    justify-self: right;
    align-self: end;
    animation: shake 10s infinite;
  }

  #footer {
    grid-area: footer;
    align-self: end;
  }

  #card {
    margin: 0;
    display: grid;
    width: 100%;
    height: 99vh;
    grid-template-areas:
      'header header header header header header'
      '. from from to to .'
      'footer footer footer footer footer footer';
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  #image-right {
    display: none;
  }

  #image-left {
    display: none;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */

@media only screen and (min-width: 1200px) {
  video {
    width: 100%;
    height: 99vh;
  }

  #header {
    grid-area: header;
    text-align: center;
    align-self: start;
  }

  #from {
    grid-area: from;
    justify-self: left;

    align-self: end;
    animation: shake 10s infinite;
  }

  #video {
    grid-area: header / from / footer / to;
    object-fit: scale-down;
    z-index: -1;
  }

  #to {
    grid-area: to;
    text-align: left;
    justify-self: right;
    align-self: end;
    animation: shake 10s infinite;
  }

  #footer {
    grid-area: footer;
    text-align: center;
    align-self: end;
  }

  #card {
    margin: 0;
    display: grid;
    width: 100%;
    height: 99vh;
    grid-template-areas:
      'header header header header header header'
      '. from from to to .'
      'footer footer footer footer footer footer';
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  }

  #image-right {
    display: none;
  }

  #image-left {
    display: none;
  }
}
</style>
