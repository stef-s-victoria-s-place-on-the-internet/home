<template>
  <div class="plain-html">
    <span class="oa_window_border" id="border_top"></span>
    <span class="oa_window_border" id="border_right"></span>
    <span class="oa_window_border" id="border_bottom"></span>
    <span class="oa_window_border" id="border_left"></span>

    <!-- Mobile Notification -->
    <div class="ma_mobile">
      <div class="ma_notification">
        <h5>oneacre.online</h5>
        <img src="/images/lisa/msa_title.svg" alt="" />
        <p>
          Meaning Seeking Animals is not optimised for mobile browsers. Enter
          your email below to send yourself a reminder and/or signup for our
          newsletter.
        </p>

        <form class="ma_notification-form" action="/subscribe" method="post">
          <input
            class="ma_notification-form-input"
            type="email"
            name="email"
            placeholder="Email"
            required="required"
          />
          <input
            type="submit"
            value="Send reminder"
            name="subscribe"
            class="ma_notification-form-button"
          />
          <input
            class="ma_notification-form-checkmark"
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="true"
          />
          <label class="ma_notification-form-checkmark-label" for="newsletter"
            >Signup for our Newsletter</label
          >
        </form>
      </div>
    </div>
    <!-- Overlay -->
    <div class="sma_overlay">
      <h4>oneacre.online</h4>
      <div class="sma_content">
        <h1>Meaning Seeking Animals</h1>
        <h2>Lisa van Casand</h2>
        <button type="button" class="sma_start" name="button">Begin</button>
        <div class="sma_loader loaded">
          <div class="sma_bar" id="b_01"></div>
          <div class="sma_bar" id="b_02"></div>
          <div class="sma_bar" id="b_03"></div>
          <div class="sma_bar" id="b_04"></div>
        </div>
      </div>
    </div>

    <!-- Minimap -->
    <Minimap />

    <!-- Walks Interface -->
    <div class="ma_walks">
      <div class="w_selector w_hidden">
        <span class="oa_button" id="ma_walks">A walk with</span>
        <div class="oa_button w_button" id="walk_01">
          <p class="w_author">Marit Mihklepp</p>
        </div>
        <div class="oa_button w_button" id="walk_02">
          <p class="w_author">Jacob Knegtel</p>
        </div>
        <div class="oa_button w_button" id="walk_03">
          <p class="w_author">Aleid de Jong</p>
        </div>
      </div>
      <!-- player_hidden -->
      <div class="w_player player_hidden">
        <audio id="my-audio">
          <source id="audioSource" src="" type="audio/mpeg" />
          <!-- place fallback here as <audio> supporting browsers will ignore it -->
          <a href="audiofile.mp3">audiofile.mp3</a>
        </audio>

        <div id="controls">
          <span id="loading">loading</span>
          <div id="play" style="display: none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 18 24"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M18 12L0 24V0"
                class="play-pause-icon"
                id="playPause"
              />
            </svg>
          </div>
          <div id="pause" style="display: none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="20"
              viewBox="0 0 18 24"
            >
              <rect fill="#000" width="20" height="20" class="x3-y0"></rect>
            </svg>
          </div>
        </div>
        <div id="time"></div>
        <div id="progress">
          <div id="bar"></div>
        </div>
      </div>
    </div>

    <Posts :posts="posts" />

    	<div class="ma_container_oa">
<!-- Logo Container-->
<div class="logo_container">
		<!-- Logo -->
	<div class="oa_logo">
		<div class="oa_logo_color" id="oa_logo_p1">one acre</div>
		<div class="scrollRange">
			<div class="oa_logo_inner">
				<div class="oa_logo_color" id="oa_logo_p2">.online</div>
			</div>
		</div>
	</div>
<!-- Payment button -->
	<a href="/payment/lisa" class="oa_button" id="payment">
		<span>Purchase a copy</span>
	</a>
</div>

		<!-- Newsletter -->
    <!--  Menu -->
<div class="oa_mobile_header">
	<span>oneacre.online</span>
	<img id="m_menu" src="/images/lisa/oa_plus.svg" alt="">
</div>

<div class="oa_menu hidden">
	<div class="oa_credits">
		<!-- <% if (typeof name === 'string' && name) {  %> -->
			<div class="notice">
				<!-- <p>You are viewing this work because <%= name %> preserved the link on <%= date %></p> -->
			</div>
		<!-- <% } %> -->
		<section>
			<h2>Credits</h2>
			<p>A publication by <a href="https://lisavancasand.nl/">Lisa van Casand</a></p>
			<p>For the production of Meaning Seeking Animals oneacre.online would like to thank: Lucas van der Velden & Sonic Acts, Aleid de Jong, Jacob Knegtel, Marit Mihklepp, Neon & Landa and Stedelijk Museum Amsterdam.</p>
			<p>Made by Stef Kors, Titus Knegtel, Victoria Douka-Doukopoulou with the kind support of the Creative Industries Fund NL and Stroom Den Haag.</p>
		</section>
		<section>
			<h2>About</h2>
			<p><a href="https://oneacre.online">oneacre.online</a> is an experimental publishing & distribution project that utilises an online platform to seed unprintable text-based works by emerging artists. The project explores the possibilities of hyper-publishing in a series of four commissioned publications.</p>
			<p>Thematically <a href="https://oneacre.online">oneacre.online</a> first four commissioned publications by all female art practitioners, place themselves in the online world of constant updates and refresh buttons that, as theorist Wendy Chun observes, “exist at the bleeding edge of obsolescence. We thus forever try to catch up, updating to remain the same”. The publications use the omnidirectional online terrain and actions that are native to it — such as refreshing, instantly available to edit, easily erasable, highlighting, copy-pasting and non linear navigation — to explore and critically evaluate visions and versions of power systems by tracing the politics of technological infrastructures. Hidden in places as traditional as archives, as often used as smart phone applications, omnipresent and inescapable as the financial market and as quiet and evasive as the transfer of information in narrative structures.
			</p>
		</section>
	</div>
	 <!-- Buttons -->
	<section class="oa_buttons">
		<div class="fade_out">
			<span></span>
		</div>
		<nav>
			<a href="/payment/lisa" class="oa_button" id="m_payment">
				<span>Purchase a copy</span>
			</a>
			<a target="_blank" href="http://eepurl.com/c6jtkv" class="oa_button">
				<span>Newsletter</span>
			</a>
			<a href="mailto:hi@oneacre.online" class="oa_button">
				<span>Contact us</span>
			</a>
			<a target="_blank" href="https://facebook.com/oneacre.online" class="oa_button icon icon_facebook">
			</a>
			<a target="_blank" href="https://instagram.com/oneacre.online" class="oa_button icon icon_instagram">
			</a>
			<a target="_blank" href="https://twitter.com/oneacre_online" class="oa_button icon icon_twitter">
			</a>
		</nav>
	</section>
</div>

	</div>
  </div>
</template>

<script>
import { setMeta } from '~/helpers'
import Minimap from '~/components/meaning-seeking-animals/Minimap'
import Posts from '~/components/meaning-seeking-animals/Posts'

export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('/lisa')
    return { posts }
  },
  components: {
    Minimap,
    Posts,
  },
  data() {
    return {
      title: 'Meaning Seeking Animals',
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
      image: '/images/lisa/oa_meta_img.jpg',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      script: [
        {
          type: 'text/javascript',
          src: '/scripts/oneacre/logo.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/script.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/audio_player.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/lisa/vancouver_script.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/styles/works/lisa/compile.css',
        },
        {
          rel: 'icon',
          href: '/favicon_black.ico',
          type: 'image/x-icon',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
