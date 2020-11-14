<template>
  <div class="oa_payment_wrapper" :id="publication">
    <div class="oa_p_label">payment complete</div>
    <div class="oa_p_content">
      <span
        >You have completed your payment. <br /><br />
        We have sent email confirmation to:
        <span class="emphasis">{{ customer.email }}</span> with your personal
        link. Your personal link is:
        <span class="emphasis">
          <NuxtLink :to="getUrl()">
            {{ getUrl() }}
          </NuxtLink> </span
        >. <br /><br />
        Please feel free to share your link with friends, family and the
        internet. Thank you for supporting
        <span class="emphasis"
          ><a href="https:www.oneacre.online">oneacre.online</a></span
        >
        and
        <span class="emphasis">{{ artist.name }}</span
        >.</span
      >
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import isUrl from 'is-url-superb'
import { getPublicationRoute } from '~/helpers'

export default {
  props: {
    publication: {
      type: String,
      required: true,
    },
    customer: {
      type: Object,
      required: true,
    },
    artist: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPublicationId() {
      const { url } = _.values(this.customer.works).pop()
      return `?id=${url}`
    },
    getBaseUrl() {
      return getPublicationRoute(this.publication)
    },
    getUrl(host = false) {
      const url = this.getBaseUrl() + this.getPublicationId(this.customer)
      if (host) {
        return window.location.origin + url
      }

      return url
    },
  },
}
</script>

<style lang="scss" scoped>
.oa_payment_wrapper {
  width: 100%;
  max-width: 800px;
  border: 1px solid $font-color;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 24px;
  font-family: 'NEXTBook-Regular', sans-serif;
  text-align: center;
  margin: 50px auto;
  color: $font-color;
  background-color: $bg-color;
  position: relative;
}

.oa_payment_wrapper a {
  color: $primary;
  font-weight: bold;
}

.oa_p_label {
  padding: 15px;
  border-bottom: 1px solid $font-color;
}

.oa_p_content {
  padding: 30px 30px 35px 30px;
  font-size: 19px;
  font-family: 'NEXTBook-Regular', serif;
  line-height: 1.35em;
  text-align: left;
}

.oa_p_content::after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

.oa_left {
  width: 50%;
  padding-right: 30px;
  float: left;
}

.oa_left img {
  width: 100%;
  display: block;
}

.oa_right {
  width: 50%;
  float: right;
  padding-left: 30px;
  border-left: 1px solid $primary;
}

.oa_mid {
  width: 100%;
  margin: 0 auto;
}

.oa_small_font {
  font-size: 14px;
  line-height: 18px;
}

.oa_p_content form {
  margin: 0;
}

.oa_p_content .oa_input {
  width: 100%;
  padding: 5px 10px;
  margin-top: 20px;
  font-family: 'Alverata-Regular', sans-serif;
  height: 30px;
  font-size: 16px;
  color: $font-color;
  border: 1px solid $font-color;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.oa_p_content .oa_input:placeholder {
  color: rgba(25, 25, 25, 0.4);
}

.oa_p_content #oa_submit {
  border: 1px solid $primary;
  background-color: $primary;
  color: $bg-color;
  height: 35px;
  cursor: pointer;
  -webkit-transition: 0.15s;
  transition: 0.15s;
  line-height: 1.1em;
  -webkit-box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);
}

.oa_p_content #oa_submit:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.horizontal_slider {
  margin: 20px 0 15px 0;
  background-color: $font-color;
  color: $bg-color;
  padding: 10px 0;
  width: 100%;
  outline: none;
}

.horizontal_slider:focus {
  outline: none;
}

.horizontal_slider[type='range']::-moz-focus-outer {
  border: 0;
}

.horizontal_slider[type='range'] {
  -webkit-appearance: none;
  /* Hides the slider so that custom slider can be made */
  width: 100%;
  /* Specific width is required for Firefox. */
  background: transparent;
  /* Otherwise $bg-color in Chrome */
  outline: none;
}

.horizontal_slider[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid $font-color;
  height: 25px;
  width: 36px;
  background: $bg-color;
  border-radius: 0px;
  cursor: pointer;
  margin-top: -14px;
  /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  outline: none;
}

/* All the same stuff for Firefox */
.horizontal_slider[type='range']::-moz-range-thumb {
  border: 1px solid $font-color;
  height: 25px;
  width: 36px;
  border-radius: 0px;
  background: $bg-color;
  cursor: pointer;
  outline: none;
}

/* All the same stuff for IE */
.horizontal_slider[type='range']::-ms-thumb {
  border: 1px solid $font-color;
  height: 25px;
  width: 36px;
  border-radius: 0px;
  background: $bg-color;
  cursor: pointer;
  outline: none;
}

.horizontal_slider[type='range']:focus {
  outline: none;
  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

.horizontal_slider[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: $font-color;
  outline: none;
}

.horizontal_slider[type='range']::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: $font-color;
  outline: none;
}

.horizontal_slider[type='range']::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
  outline: none;
}

@media only screen and (max-width: 768px) {
  body {
    padding: 0px;
  }

  .oa_payment_wrapper {
    margin-top: 0px;
    font-size: 24px;
  }

  .oa_p_content {
    font-size: 16px;
    line-height: 1.45em;
    padding: 20px 15px;
  }

  .oa_left {
    float: none;
    text-align: center;
    position: relative;
    display: table;
    margin: auto;
    margin-bottom: 40px;
  }

  .oa_left img {
    max-width: 350px;
  }

  .oa_right {
    float: none;
    max-width: none;
    padding-left: 0px;
    border-left: 0px;
  }

  .oa_p_content::after {
    clear: none;
    height: auto;
  }
}
</style>
