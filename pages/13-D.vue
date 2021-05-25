<i18n>
{
  "en": {
    "li1": "Just dropping by to say we moved!",
    "li2": "FROM",
    "li3": "Victoria, Stef & Nemo",
    "li4": "Teniersstraat 13C",
    "li5": "2526 NX The Hague",
    "li6": "The Netherlands",
    "li7": "TO",
    "li8": "Victoria, Stef & Nemo",
    "li9": "Teniersstraat 13D",
    "li10": "2526 NX The Hague",
    "li11": "The Netherlands",
    "li12": "Looking forward to having you over sooon!"
  },
  "el": {
    "li1": "Ήρθαμε να σας πούμε πως μετακομίσαμε!",
    "li2": "ΑΠΟ",
    "li3": "Βικτώρια, Στέφ και Νειμο",
    "li4": "Teniersstraat 13C",
    "li5": "2526NX Χάγη ",
    "li6": "Ολλανδία",
    "li7": "ΠΡΟΣ",
    "li8": "Βικτώρια, Στέφ και Νειμο",
    "li9": "Teniersstraat 13D",
    "li10": "2526NX Χάγη ",
    "li11": "Ολλανδία",
    "li12": "Τώρα που έχουμε και αυλή, να περάσετε να σας κεράσουμε καφέ και στροοπβαφελ!"
  },
  "nl": {
    "li1": "Wij hebben een nieuw stekkie!",
    "li2": "VAN",
    "li3": "Victoria, Stef & Nemo",
    "li4": "Teniersstraat 13C",
    "li5": "2526 NX The Hague",
    "li6": "The Netherlands",
    "li7": "NAAR",
    "li8": "Victoria, Stef & Nemo",
    "li9": "Teniersstraat 13D",
    "li10": "2526 NX The Hague",
    "li11": "The Netherlands",
    "li12": "We kijken er naar uit om een huis tour te doen!"
  }
}
</i18n>

<template>
  <div class="content">
    <div class="lang">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale"
        :to="switchLocalePath(locale)"
        >{{ locale }}</nuxt-link
      >
    </div>

    <div id="card">
      <div id="image-right"></div>
      <div id="image-left"></div>
      <div id="header">
        <h2>{{ $t('li1') }}</h2>
      </div>

      <div id="from">
        <p class="box">{{ $t('li2') }}</p>
        <p>{{ $t('li3') }}</p>
        <p>{{ $t('li4') }}</p>
        <p>{{ $t('li5') }}</p>
        <p>{{ $t('li6') }}</p>
      </div>

      <div id="video">
        <video autoplay loop muted playsinline>
          <source src="/video/vertical.mov" type='video/mp4; codecs="hvc1"' />
          <source src="/video/vertical.webm" type="video/webm" />
        </video>
      </div>

      <div id="to">
        <p class="box">{{ $t('li7') }}</p>
        <p>{{ $t('li8') }}</p>
        <p>{{ $t('li9') }}</p>
        <p>{{ $t('li10') }}</p>
        <p>{{ $t('li11') }}</p>
      </div>

      <div id="footer">
        <h2>{{ $t('li12') }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: '13D',
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://www.stefsandvictoriasplaceontheinternet.nl/postcard_stamp.jpg',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://www.stefsandvictoriasplaceontheinternet.nl/postcard_stamp.jpg',
        },
      ],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    console.log(
      `%cgrid areas called,they said I can call them my bitch now.
✦ cause I nailed them ✦
Victoria said, and I quote, on the third week of working on this two-day quick & dirty project

General Credits:

Paper Animation + Like all of the Coding + Transperent Video Transcoding : Victoria
Boring Stuff Coding + Art Suggestions + General Hype Man : Stef
Executive Borker : Nemo`,
      'color: #ae463f ; font-weight: bold ; ' +
        'font-size: 20px ;' +
        'font-family: sans-serif ;'
    )
    console.log(
      `%cFootnotes:
Note on Poststamp: The whistling kettle [Het fluitketeltje ] Stamp Printing Plate 895.  Illustrated by Wim Bijmoer for the Annie M.G. Schmidt series of Kinderzegels 1967 ( literally translated to Children's Postage Stamps are stamps of which the surcharge, of the postal price,  is donated to children-related charities)

More one Kinderzegels: https://nl.wikipedia.org/wiki/Kinderpostzegel
More on the Annie M.G. Schmidt series of Kinderzegels : https://www.postzegelblog.nl/2016/09/25/kinderpostzegels-2016-1999/
More on Wim Bijmoer: https://nl.wikipedia.org/wiki/Wim_Bijmoer`,
      'color: #8aabd9 ; font-weight: bold ; ' +
        'font-size: 16px ;' +
        'font-family: sans-serif ;'
    )
  },
}
</script>
