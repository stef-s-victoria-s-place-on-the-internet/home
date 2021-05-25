<template>
  <!-- grid areas called,they said I can call them my bitch now. -->
  <!-- ✦ cause I nailed them ✦  -->
  <!-- Victoria said, and I quote, on the third week of working on this two-day quick & dirty project -->

  <!-- General Credits:  -->

  <!-- Paper Animation + Like all of the Coding + Transperent Video Transcoding : Victoria -->
  <!-- Boring Stuff Coding + Art Suggestions + General Hype Man : Stef -->
  <!-- Executive Borker : Nemo -->
  <div id="card">
    <div id="image-right"></div>
    <div id="image-left"></div>
    <div id="header">
      <h2>Just dropping by to say we moved!</h2>
    </div>

    <div id="from">
      <p class="box">FROM</p>
      <p>Victoria, Stef & Nemo</p>
      <p>Teniersstraat 13C</p>
      <p>2526 NX The Hague</p>
      <p>The Netherlands</p>
    </div>

    <div id="video">
      <video autoplay loop muted playsinline>
        <source src="/video/vertical.mov" type='video/mp4; codecs="hvc1"' />
        <source src="/video/vertical.webm" type="video/webm" />
      </video>
    </div>

    <div id="to">
      <p class="box">TO</p>
      <p>Victoria, Stef & Nemo</p>
      <p>Teniersstraat 13D</p>
      <p>2526 NX The Hague</p>
      <p>The Netherlands</p>
    </div>

    <div id="footer">
      <h2>Looking forward to having you over sooon!</h2>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Gopher';
  src: url('~assets/fonts/Gopher-MediumItalic.woff2') format('woff2'),
    url('~assets/fonts/Gopher-MediumItalic.woff') format('woff'),
    url('~assets/fonts/Gopher-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

body {
  background-color: #2e2824;
  color: #d0a770;
  font-family: 'Gopher';
  margin: 0;
  padding: 0;
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
      'video'
      'to'
      'footer';
    grid-template-rows: 1fr 1fr 1fr 1fr;
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
  #image-right {
    display: grid;
    grid-area: br;
    margin: 0;
    background-image: url("/images/scallop.png");
    background-repeat: repeat-y;
    background-size: 3vw;
    filter: hue-rotate(70deg);
  }

  #image-left {
    display: grid;
    grid-area: bl;
    margin: 0;
    background-image: url("/images/scallop.png");
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
