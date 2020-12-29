<i18n>
{
  "en": {
    "body": "A few days late  & few days early, we are sending this little card your way to wish you the warmest wishes we could come up with! May your hot chocolate never go cold on you and tight satisfying hugs from friends and loved soon be on their way!",
    "closing": "We hope 2021 treats us all better, because 2020 didn’t play nice at all."
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
      <p class="dropcap">{{ $t('body') }}</p>
      <intersect @enter="setEnter()">
        <p class="closing">{{ $t('closing') }}</p>
      </intersect>
    </div>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
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

  .dropcap:first-letter {
    float: left;
    font-size: 8rem;
    line-height: 0.65;
    margin: 0.1em 0.1em 0.2em 0;
  }

  .closing {
    margin-top: 2rem;
  }
}

.geeks {
  padding: 2rem;
  width: 100%;
  text-align: center;
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
