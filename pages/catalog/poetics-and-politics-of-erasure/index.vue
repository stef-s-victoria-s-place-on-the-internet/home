<template>
  <div class="plain-html">
    <span class="oa_window_border" id="border_top"></span>
    <span class="oa_window_border" id="border_right"></span>
    <span class="oa_window_border" id="border_bottom"></span>
    <span class="oa_window_border" id="border_left"></span>
    <!-- Canvas -->
    <canvas id="canvas" width="100%" height="100vh"></canvas>
    <!-- Logo -->
    <div class="oa_logo">
      <div class="oa_logo_color" id="oa_logo_p1">one acre</div>
      <div class="oa_logo_inner">
        <div class="oa_logo_color" id="oa_logo_p2">.online</div>
      </div>
    </div>

    <!-- Payment -->
    <div class="oa_payment">
      <a href="/payment/ingrid">purchase a copy</a>
    </div>
    <!-- Wrapper -->
    <div class="oa_wrapper">
      <!-- Mobile Header -->
      <div class="oa_mobile_header">
        <a href="/">oneacre.online</a>
        <img class="oa_plus" id="oa_h_plus" src="/images/ingrid/oa_plus.svg" />
      </div>
      <!-- Mobile Menu -->
      <div class="oa_mobile_menu">
        <ul>
          <li id="oa_notes">Notes</li>
          <li>
            <a href="/payment/ingrid">Buy this work</a>
          </li>
          <li id="modal_01">Newsletter</li>
        </ul>
      </div>
      <!-- Title -->
      <div class="oa_title_wrapper">
        <div class="oa_title_container">
          <img
            class="oa_title_img"
            src="/images/ingrid/poetics_and_politics_title.svg"
            alt=""
          />
        </div>
        <div class="oa_author">yun ingrid lee</div>
      </div>

      <!-- Content -->
      <div class="oa_content">
        <div class="oa_c_left">
          <erasure-content :visitors="visitors"></erasure-content>
        </div>

        <!-- Content - Footnotes -->
        <div class="oa_c_right">
          <div class="oa_f_title">
            <span>Notes</span>
            <img
              class="oa_plus"
              id="oa_f_plus"
              src="/images/ingrid/oa_plus_b.svg"
            />
          </div>
          <div class="oa_footnote" id="fe_01">
            <div class="oa_f_number">01</div>
            <div class="oa_f_entry">
              Namco<a
                class="oa_f_title"
                target="_blank"
                href="https://youtu.be/_TLUw1BwmC0?t=3m42s"
                >Katamari Damacy</a
              >(2004)
            </div>
          </div>
          <div class="oa_footnote" id="fe_02">
            <div class="oa_f_number">02</div>
            <div class="oa_f_entry">
              Mackay, Robin, and Armen Avanessian, eds.
              <span class="oa_f_title"
                >#ACCELERATE: The Accelerationist Reader.</span
              >Falmouth: Urbanomic; 2014. p.4
            </div>
          </div>
          <div class="oa_footnote" id="fe_03">
            <div class="oa_f_number">03</div>
            <div class="oa_f_entry">
              Kittler, Friedrich.
              <span class="oa_f_title">Gramophone, Film, Typewriter.</span>
              Standford: Standford University Press; 1999. p.210
            </div>
          </div>
          <div class="oa_footnote" id="fe_04">
            <div class="oa_f_number">04</div>
            <div class="oa_f_entry">
              For a brief overview, read
              <a
                target="_blank"
                href="https://petapixel.com/2015/09/19/heres-a-look-at-how-color-film-was-originally-biased-toward-white-people/"
                >PetaPixel’s coverage</a
              >
              on this subject
            </div>
          </div>
          <div class="oa_footnote" id="fe_05">
            <div class="oa_f_number">05</div>
            <div class="oa_f_entry">
              Of course algorithmic racial bias is not unique to whiteness and
              privileges different bodies depending on the country they are
              developed in.
            </div>
          </div>
          <div class="oa_footnote" id="fe_06">
            <div class="oa_f_number">06</div>
            <div class="oa_f_entry">
              Attali, Jacques<span class="oa_f_title"
                >Noise The Political Economy of Music.</span
              >
              Minnesota: Minnesota University Press; 2009. p.94
            </div>
          </div>
          <div class="oa_footnote" id="fe_07">
            <div class="oa_f_number">07</div>
            <div class="oa_f_entry">
              Maguire, Ryan,
              <span class="oa_f_title">The Ghost in The MP3</span>
              In:Proceedings ICMC|SMC|2014. Athens: 2014. p.243
            </div>
          </div>
          <div class="oa_footnote" id="fe_08">
            <div class="oa_f_number">08</div>
            <div class="oa_f_entry">
              <a target="_blank" href="https://www.wikipedia.org"
                >https://www.wikipedia.org</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_09">
            <div class="oa_f_number">09</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="https://sites.google.com/site/themetalibrary/library-genesis"
                >https://sites.google.com/site/themetalibrary/library-genesis</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_10">
            <div class="oa_f_number">10</div>
            <div class="oa_f_entry">
              <a target="_blank" href="http://aaaaarg.fail"
                >http://aaaaarg.fail</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_11">
            <div class="oa_f_number">11</div>
            <div class="oa_f_entry">
              <a target="_blank" href="https://www.jstor.org/"
                >https://www.jstor.org/</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_12">
            <div class="oa_f_number">12</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="https://medium.com/message/ferguson-is-also-a-net-neutrality-issue-6d2f3db51eb0"
                >https://medium.com/message/ferguson-is-also-a-net-neutrality-issue-6d2f3db51eb0</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_13">
            <div class="oa_f_number">13</div>
            <div class="oa_f_entry">
              Known as astroturfing<a
                target="_blank"
                href="https://www.theguardian.com/commentisfree/2012/feb/08/what-is-astroturfing"
                >https://www.theguardian.com/commentisfree/2012/feb/08/what-is-astroturfing</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_14">
            <div class="oa_f_number">14</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href=" http://www.telegraph.co.uk/technology/2017/12/13/facebook-russians-spent-just-73-pence-ads-brexit-campaign/"
              >
                http://www.telegraph.co.uk/technology/2017/12/13/facebook-russians-spent-just-73-pence-ads-brexit-campaign/</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_15">
            <div class="oa_f_number">15</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="https://www.wired.com/2016/11/filter-bubble-destroying-democracy/"
                >https://www.wired.com/2016/11/filter-bubble-destroying-democracy/</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_16">
            <div class="oa_f_number">16</div>
            <div class="oa_f_entry">
              Coined by Eli Pariser in his 2011 book
              <span class="oa_f_title">The Filter Bubble</span>. He explains it
              clearly in a TED talk:
              https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles
            </div>
          </div>
          <div class="oa_footnote" id="fe_17">
            <div class="oa_f_number">17</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="https://twitter.com/pinboard/status/744595961217835008?lang=en"
                >https://twitter.com/pinboard/status/744595961217835008?lang=en</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_18">
            <div class="oa_f_number">18</div>
            <div class="oa_f_entry">
              Chun W.<span class="oa_f_title">Crisis + Habit = Update</span>
              [Lecture] Sonic Acts Festival — The Noise Of Being. 25th February
              2017.
            </div>
          </div>
          <div class="oa_footnote" id="fe_19">
            <div class="oa_f_number">19</div>
            <div class="oa_f_entry">
              Halberstam, Judith.<span class="oa_f_title"
                >The Queer Art of Failure.</span
              >
              Durham: Duke University Press; 201.p.22
            </div>
          </div>
          <div class="oa_footnote" id="fe_20">
            <div class="oa_f_number">20</div>
            <div class="oa_f_entry">
              In reference to Reynolds’<span class="oa_f_title"
                >Rip it up and Start Again: Postpunk 1978-1984</span
              >(2005)
            </div>
          </div>
          <div class="oa_footnote" id="fe_21">
            <div class="oa_f_number">21</div>
            <div class="oa_f_entry">
              The term “creative destruction” as developed in economist Joseph
              Schumpeter’s<span class="oa_f_title"
                >Capitalism, Socialism and Democracy</span
              >(1942).
            </div>
          </div>
          <div class="oa_footnote" id="fe_22">
            <div class="oa_f_number">22</div>
            <div class="oa_f_entry">
              Christian Marclay,<a
                class="oa_f_title"
                target="_blank"
                href="http://taylorjessen.blogspot.nl/2016/11/christian-marclay-record-without-cover.html"
                >Record Without a Cover</a
              >(1985)
            </div>
          </div>
          <div class="oa_footnote" id="fe_23">
            <div class="oa_f_number">23</div>
            <div class="oa_f_entry">
              William Basinski,<a
                class="oa_f_title"
                target="_blank"
                href="https://www.youtube.com/watch?v=ObdZ8lhC0f0&t=2405s"
              >
                Disintegration Loops</a
              >(2002-2003)
            </div>
          </div>
          <div class="oa_footnote" id="fe_24">
            <div class="oa_f_number">24</div>
            <div class="oa_f_entry">
              Yasunao Tone,<a
                class="oa_f_title"
                target="_blank"
                href="https://www.youtube.com/watch?v=ElF5pb7sos8&list=PLOWpaVIvns4eQy1S7eRpyzrfthJ5cGA9K"
                >Solo for Wounded CD</a
              >(1997)
            </div>
          </div>
          <div class="oa_footnote" id="fe_25">
            <div class="oa_f_number">25</div>
            <div class="oa_f_entry">
              Ryan Maguire,<a
                class="oa_f_title"
                target="_blank"
                href="http://theghostinthemp3.com/"
                >The Ghost in The MP3</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_26">
            <div class="oa_f_number">26</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=iVyO9BaMvAQ"
                >https://www.youtube.com/watch?v=iVyO9BaMvAQ</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_27">
            <div class="oa_f_number">27</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href="http://theghostinthemp3.com/theghostinthemp3.html"
                >http://theghostinthemp3.com/theghostinthemp3.html</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_28">
            <div class="oa_f_number">28</div>
            <div class="oa_f_entry">
              Fuller, Matthew(eds)<span class="oa_f_title"
                >Software Studies: A Lexicon.</span
              >
              Cambridge: MIT Press; 2008
            </div>
          </div>
          <div class="oa_footnote" id="fe_29">
            <div class="oa_f_number">29</div>
            <div class="oa_f_entry">
              Acierto,Alejandro T<span class="oa_f_title"
                >Disrupting Legacies of Racialization: Mixed race subjects,
                glitch, noise, and the voice,</span
              >
              p.18. Avaliable from:<a
                target="_blank"
                href="http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice"
                >http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_30">
            <div class="oa_f_number">30</div>
            <div class="oa_f_entry">
              Alejandro T. Acierto<span class="oa_f_title"
                >Sounding Legacies</span
              >(2014)
            </div>
          </div>

          <div class="oa_footnote" id="fe_31">
            <div class="oa_f_number">31</div>
            <div class="oa_f_entry">
              Acierto,Alejandro T<span class="oa_f_title"
                >SDisrupting Legacies of Racialization: Mixed race subjects,
                glitch, noise, and the voice,</span
              >
              p.4. Avaliable from:<a
                target="_blank"
                href="http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice"
                >http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_32">
            <div class="oa_f_number">32</div>
            <div class="oa_f_entry">
              Acierto,Alejandro T<span class="oa_f_title"
                >SDisrupting Legacies of Racialization: Mixed race subjects,
                glitch, noise, and the voice,</span
              >
              p.6. Avaliable from:<a
                target="_blank"
                href="http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice"
                >http://www.academia.edu/9918809/Disrupting_Legacies_of_Racialization_Mixed_race_subjects_glitch_noise_and_the_voice</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_33">
            <div class="oa_f_number">33</div>
            <div class="oa_f_entry">
              <a
                target="_blank"
                href=" http://www.xiuwenyuan.com/zi/ziyuanimg/e9acbc.png"
              >
                http://www.xiuwenyuan.com/zi/ziyuanimg/e9acbc.png</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_34">
            <div class="oa_f_number">34</div>
            <div class="oa_f_entry">
              Joseph Davis,<a
                class="oa_f_title"
                target="_blank"
                href="http://www.mercerunion.org/exhibitions/yesterduh/"
                >Yesterduh</a
              >(2006)
            </div>
          </div>
          <div class="oa_footnote" id="fe_35">
            <div class="oa_f_number">35</div>
            <div class="oa_f_entry">
              The Beatles,<a
                class="oa_f_title"
                target="_blank"
                href="http://www.mercerunion.org/exhibitions/yesterduh/
  "
                >Yesterday</a
              >(1965)
            </div>
          </div>
          <div class="oa_footnote" id="fe_36">
            <div class="oa_f_number">36</div>
            <div class="oa_f_entry">
              Christine Schorkhuber and Alfred Grubbauer,<a
                class="oa_f_title"
                target="_blank"
                href="http://members.aon.at/croete/index2.htm"
                >Stille Post</a
              >(2008)
            </div>
          </div>
          <div class="oa_footnote" id="fe_37">
            <div class="oa_f_number">37</div>
            <div class="oa_f_entry">
              Sophie Calle,<a
                class="oa_f_title"
                target="_blank"
                href="https://www.perrotin.com/artists/Sophie_Calle/1/take-care-of-yourself-complete-set/12963"
                >Take Care of Yourself</a
              >(2017)
            </div>
          </div>
          <div class="oa_footnote" id="fe_38">
            <div class="oa_f_number">38</div>
            <div class="oa_f_entry">
              Betty Apple (Cheng Yi Ping),<a
                class="oa_f_title"
                target="_blank"
                href="https://vimeo.com/147563158"
              >
                超脫國歌 教學版 Cha twat gringo</a
              >(2014)
            </div>
          </div>
          <div class="oa_footnote" id="fe_39">
            <div class="oa_f_number">39</div>
            <div class="oa_f_entry">
              This particular bill was printed in commemoration of the 100th
              anniversary of the founding of the Republic of China by Kuo Min
              Tang leader Sun Yat-Sen. The accompanying soundtrack in this part
              of Betty Apple’s video is a remix of the centenary recording of
              the national anthem.
            </div>
          </div>
          <div class="oa_footnote" id="fe_40">
            <div class="oa_f_number">40</div>
            <div class="oa_f_entry">
              Oliver Laric<a
                class="oa_f_title"
                target="_blank"
                href=" https://www.youtube.com/watch?v=xf4xv6Pvcdc"
              >
                Versions</a
              >(2009)
            </div>
          </div>
          <div class="oa_footnote" id="fe_41">
            <div class="oa_f_number">41</div>
            <div class="oa_f_entry">
              Steyerl, Hito.<span class="oa_f_title"
                >A Tank On a Pedestal: Museums in an age of planetary civil
                war</span
              >E-flux. 2016. Avialable from:
              <a
                target="_blank"
                href="http://www.e-flux.com/journal/70/60543/a-tank-on-a-pedestal-museums-in-an-age-of-planetary-civil-war/"
                >http://www.e-flux.com/journal/70/60543/a-tank-on-a-pedestal-museums-in-an-age-of-planetary-civil-war/</a
              >
            </div>
          </div>
          <div class="oa_footnote" id="fe_42">
            <div class="oa_f_number">42</div>
            <div class="oa_f_entry">
              Kenyatta A.C. Hinkle,<a
                class="oa_f_title"
                target="_blank"
                href="http://www.kachstudio.com/the-uninvited-series"
                >The Uninvited</a
              >(2008-)
            </div>
          </div>
          <div class="oa_footnote" id="fe_43">
            <div class="oa_f_number">43</div>
            <div class="oa_f_entry">
              Athi-Patra Ruga,<a
                class="oa_f_title"
                target="_blank"
                href="https://www.whatiftheworld.com/exhibition/the-future-white-women-of-azania-saga/"
              >
                Future White Women of Azania</a
              >(2013)
            </div>
          </div>
          <div class="oa_footnote" id="fe_44">
            <div class="oa_f_number">44</div>
            <div class="oa_f_entry">
              Destiny Deacon,<a
                class="oa_f_title"
                target="_blank"
                href="https://nga.gov.au/Retake/retake_art2/fi/0000000f.htm/"
                >Eva Johnson, writer 1994</a
              >(2013)
            </div>
          </div>
          <div class="oa_footnote" id="fe_45">
            <div class="oa_f_number">45</div>
            <div class="oa_f_entry">
              The name Azania was originally given to a large stretch of
              Southeast Africa. Since Apartheid, Azania has been used by several
              black liberation groups to refer to South Africa. It is still a
              highly contentious name today.
            </div>
          </div>
          <div class="oa_footnote" id="fe_46">
            <div class="oa_f_number">46</div>
            <div class="oa_f_entry">
              M. Crossland,<a
                class="oa_f_title"
                target="_blank"
                href="https://upload.wikimedia.org/wikipedia/commons/e/ed/JM_Crossland_-_Portrait_of_Nannultera%2C_a_young_Poonindie_cricketer.jpg"
                >Portrait of Nannultera, a young Poonindie cricketer</a
              >(1854)
            </div>
          </div>
          <div class="oa_footnote" id="fe_47">
            <div class="oa_f_number">47</div>
            <div class="oa_f_entry">
              Marisa Williamson,<a
                class="oa_f_title"
                target="_blank"
                href="https://vimeo.com/63764134"
                >What Would Sally Do?</a
              >(2013)
            </div>
          </div>
          <div class="oa_footnote" id="fe_48">
            <div class="oa_f_number">48</div>
            <div class="oa_f_entry">
              Brown, Will.<span class="oa_f_title"
                >Marissa Williamson: ‘I want to make history alive in people’s
                worlds.’</span
              >
              Studio International. 13th March 2015
            </div>
          </div>
          <div class="oa_footnote" id="fe_49">
            <div class="oa_f_number">49</div>
            <div class="oa_f_entry">
              Marisa Williamson,<a
                class="oa_f_title"
                target="_blank"
                href="https://vimeo.com/118436925
  "
                >Sally and Monica’s Hot Tub Hang out</a
              >(2014)
            </div>
          </div>
          <div class="oa_footnote" id="fe_50">
            <div class="oa_f_number">50</div>
            <div class="oa_f_entry">
              Marisa Williamson,<a
                class="oa_f_title"
                target="_blank"
                href="https://vimeo.com/142077749"
                >Hemings and Hawings</a
              >(2015)
            </div>
          </div>
          <div class="oa_footnote" id="fe_51">
            <div class="oa_f_number">51</div>
            <div class="oa_f_entry">
              Jacolby Satterwhite,<a
                class="oa_f_title"
                target="_blank"
                href="https://vimeo.com/83727527"
                >Reifying Desire</a
              >(2011-2014)
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="oa_footer">
      <!-- Footer Title -->
      <div class="oa_footer_title">credits</div>
      <div class="oa_footer_wrapper">
        <!-- Footer Bio -->
        <p id="f_01">
          Made by
          <a href="http://www.stefkors.com">Stef Kors</a>,
          <a href="http://www.titusknegtel.nl">Titus Knegtel</a>,
          <a href="http://www.dkdkpl.com">Victoria Douka-Doukopoulou</a>
          with the kind support of the Creative Industries Fund NL. For the
          production of Poetics and Politics of Erasure, oneacre.online would
          like to thank: LhGWR gallery, George Knegtel, PublishingLab and Jake
          Faber.
        </p>
        <p id="f_02">
          For further contact:<br />
          <a href="mailto:hi@oneacre.online">hi@oneacre.online</a>
        </p>
        <!-- Footer Signup -->
        <div class="oa_footer_signup">Newsletter</div>
        <!-- Footer Social -->
        <div class="oa_footer_social">
          <div class="oa_social">
            <a target="_blank" href="https://www.facebook.com/oneacre.online">
              <img src="/images/oneacre/fb.svg" />
            </a>
          </div>
          <div class="oa_social">
            <a target="_blank" href="https://www.instagram.com/oneacre.online/">
              <img src="/images/oneacre/instagram.svg" />
            </a>
          </div>
          <div class="oa_social" id="oa_twitter">
            <a target="_blank" href="https://twitter.com/oneacre_online">
              <img src="/images/oneacre/twitter.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setMeta } from '~/helpers'

export default {
  data() {
    return {
      title: 'Poetics and Politics of Erasure',
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
      image: '/images/ingrid/oa_meta_img.jpg',
      visitors: 0
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      script: [
        {
          type: 'text/javascript',
          src: '/bower_components/webcomponentsjs/webcomponents-lite.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/oneacre/index.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/ingrid/script.js',
        },
      ],
      link: [
        {
          rel: 'import',
          href: '/bower_components/polymer/polymer.html',
        },
        {
          rel: 'import',
          href: '/elements/erasure-content/erasure-content.html',
        },
        {
          rel: 'import',
          href: '/elements/erasure-page-section/erasure-page-section.html',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/ingrid/style.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/oneacre/fonts.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/ingrid/style.css',
        },
      ],
    }
  },
  async asyncData({ $axios, error, params }) {
    try {
      const visitors = await $axios.$get('/ingrid/count') || 0
      console.log('visitors', visitors)
      return {
        visitors
      }
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style scoped></style>
