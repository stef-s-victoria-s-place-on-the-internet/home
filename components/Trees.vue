<i18n>
{
  "en": {
    "b1": "Stef has officially settled on his favorite tree, the beech tree. Although admittedly a tough decision, Stef’s really appreciates how leafy their leafs look, making the European beech tree #1 in Stef’s heart.",
    "b2": "Victoria graduated from an amateur bryologist to a birder during the quarantine. She doesn’t really want to talk to about it, but she feels comfortable disclosing that seedeaters [birds with long and narrow finches] lay closer to her heart than other form taxa.",
    "b3": "This year our household welcomed:",
    "b4": "(Land Shark, Dutch Muddog,) Nemo then nine-weeks now nine-months old Portuguese Waterdog, an occasionally ball fetcher with a soft spot for morning cuddles. Nemo has been been leading us in an exploration of the finest mud pools offered by The Hague and surrounding areas. And beta-testing all imaginable sleeping positions.",
    "b5": "and 10-year old “Pending Nickname” Fiat Sedici, reliable transporter of dogs, humans & couches to near-by parks. As well as the disproportionally large Christmas tree that is currently taking over our living room. "
  },
  "el": {
    "body": "A few days late  & few days early, we are sending this little card your way to wish you the warmest wishes we could come up with! May your hot chocolate never go cold on you and tight satisfying hugs from friends and loved soon be on their way!",
    "closing": "We hope 2021 treats us all better, because 2020 didn’t play nice at all."
  },
  "nl": {
    "body": "A few days late  & few days early, we are sending this little card your way to wish you the warmest wishes we could come up with! May your hot chocolate never go cold on you and tight satisfying hugs from friends and loved soon be on their way!",
    "closing": "We hope 2021 treats us all better, because 2020 didn’t play nice at all."
  }
}
</i18n>

<template>
  <div class="wrapper">
    <div :class="active">
      <p class="dropcap">{{ $t('b1') }}</p>
      <div class="sidebyside">
        <img src="~/assets/images/christmas-2020/2020-34.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-65.jpg" alt="" />
      </div>
      <intersect @enter="setEnter()">
        <p>{{ $t('b2') }}</p>
      </intersect>
      <img src="~/assets/images/christmas-2020/2020-6.jpg" alt="" />
      <p>{{ $t('b3') }}</p>
      <p>{{ $t('b4') }}</p>
      <div class="sidebyside">
        <img src="~/assets/images/christmas-2020/2020-2.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-17.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-47.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-5.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-18.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-41.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-45.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-49.jpg" alt="" />
        <img src="~/assets/images/christmas-2020/2020-50.jpg" alt="" />
      </div>
      <p>{{ $t('b5') }}</p>
        <img src="~/assets/images/christmas-2020/car-with-tree.png" alt="" />

    </div>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
  name: 'MvpWellies',
  components: { Intersect },
  data() {
    return {
      active: 'geeks',
    }
  },
  methods: {
    setEnter() {
      this.active = 'active geeks'
    },
    setLeave() {
      this.active = 'geeks'
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 60ch;
  margin: 10rem auto;
  position: relative;

  background: $black;
  display: block;
  padding: 2rem;
  /* border: 1px solid; */

  p {
    margin-top: 2rem;
  }

  .dropcap:first-letter {
    float: left;
    font-size: 6rem;
    line-height: 0.65;
    margin: 0.1em 0.2em 0.1em 0;
  }

  .closing {
    margin-top: 2rem;
  }

  .sidebyside {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;
  }

  img {
    width: 100%;
    margin-top: 2rem;
  }
}

.geeks {
  padding: 2rem;
  width: 100%;
}

.geeks::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 1px solid transparent;
}

.geeks.active::before {
  animation: animate 1.5s linear forwards;
}

@keyframes animate {
  0% {
    width: 0;
    height: 0;
    border-top-color: white;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  50% {
    width: 100%;
    height: 0;
    border-top-color: white;
    border-right-color: white;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  100% {
    width: 100%;
    height: 100%;
    border-top-color: white;
    border-right-color: white;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
}

.geeks::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 0;
  height: 0;
  background: transparent;
  border: 1px solid transparent;
}

.geeks.active::after {
  animation: animates 1.5s linear forwards;
}

@keyframes animates {
  0% {
    width: 0;
    height: 0;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: white;
  }

  50% {
    width: 0;
    height: 100%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: white;
    border-left-color: white;
  }

  100% {
    width: 100%;
    height: 100%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: white;
    border-left-color: white;
  }
}
</style>
