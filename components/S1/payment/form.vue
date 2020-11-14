<template>
  <div class="oa_payment_wrapper" :id="publication">
    <div class="oa_p_label">order summary</div>
    <div class="oa_p_content">
      <div class="oa_mid">
        <span
          >As the publications produced by oneacre.online exist only temporarily
          on the website, oneacre.online offers the opportunity to preserve a
          copy of the publication. By acquiring a permanent private link, the
          publication remains accessible to you or whomever else you choose to
          share the link with, past the 3 months for which the work will be
          available at oneacre.online. The donation starting at 3 euros, will
          support the creation of further unprintable publications as well as
          the artists that fuel their content.</span
        >
        <form @submit.prevent="checkForm" method="post" class="oa_mid">
          <!-- Name -->
          <input
            class="oa_input"
            type="text"
            name="name"
            v-model="name"
            placeholder="Name"
            required="required"
          />
          <!-- Email -->
          <input
            class="oa_input"
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"
            required="required"
          />
          <!-- Ex Libris -->
          <input
            class="oa_input"
            type="exlibris"
            name="exlibris"
            v-model="exlibris"
            placeholder="Ex Libris - optional"
          />
          <!-- discountcode -->
          <input
            class="oa_input"
            type="discountcode"
            name="discountcode"
            v-model="discountcode"
            placeholder="Cipher - if applicable "
          />
          <input
            class="horizontal_slider"
            type="range"
            name="payment_amount"
            min="3"
            max="100"
            v-model="payment_amount"
            id="range_value"
          />
          <div id="show_value">
            Choose your price: € <span id="value">{{ payment_amount }}</span>
          </div>
          <input
            class="oa_input"
            type="hidden"
            name="publication"
            :value="publication"
          />
          <input
            class="oa_input"
            id="oa_submit"
            type="submit"
            value="Purchase"
          />
        </form>

        <div class="oa_small_font">
          <p>
            <br />
            Much like books, oneacre.online hopes that the acquired links will
            be borrowed, lend, and shared, perhaps forgotten at a friend’s inbox
            or messenger app to keep versions of the work alive and circulating
            when the publication will be no longer be available at
            oneacre.online.
          </p>
          <br />

          <p>
            Ex Libris: is usually a small print or decorative label pasted into
            a book, often on the inside front cover, to indicate its owner. Ex
            Libris follow a similar function at oneacre.online, where a word,
            sentence or phrase of your choice will be added in the url you
            purchase to designated that the link is part of your collection. ex.
            Ex Libris: possessive pronoun url containing Ex Libris:
            http://oneacre.online/publication-one-possessive-pronoun-48010513293185144
          </p>
          <br />

          <p>
            Cipher: magic word or code that gives a discount or a free copy.
            Probably somebody told you about it.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isUrl from 'is-url-superb'
import { getRedirectPublicationPath } from '~/helpers'

export default {
  props: {
    publication: {
      type: String,
      required: true,
    },
    artist: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      payment_amount: 99,
      name: 'test stef',
      discountcode: undefined,
      email: 'test@example.com',
      exlibris: undefined,
      path: getRedirectPublicationPath(),
    }
  },
  methods: {
    async checkForm() {
      const formData = {
        name: this.name,
        email: this.email,
        redirectUrl: this.path,
        exlibris: this.exlibris,
        payment_amount: this.payment_amount,
        publication: this.publication,
        discountcode: this.discountcode,
      }

      const redirect = await this.$axios.$post('/shop/catalog/submit', formData)
      // TODO: replace mollie testing API key

      // When we don't recieve an url we should handle the redirect ourselves
      if (!isUrl(redirect)) {
        return this.$router.push({ path: this.path, query: { id: redirect } })
      }

      window.location = redirect
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
  background-color: $bg-color;
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
