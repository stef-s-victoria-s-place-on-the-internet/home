<template>
  <div class="plain-html">
    <span class="oa_window_border" id="border_top"></span>
    <span class="oa_window_border" id="border_right"></span>
    <span class="oa_window_border" id="border_bottom"></span>
    <span class="oa_window_border" id="border_left"></span>

    <canvas id="canvas"></canvas>
    <div class="oa_landing_wrapper">
      <span>oneacre.online</span>
      <div class="oa_introduction">
        <div class="introduction_text">
          <p>
            The publication tunes into our highly textured and complex radio
            environment by subjecting itself to the unpredictability,
            seasonality, solar circles of the ionosphere and the current
            location of the reader. The publication embeds itself by using real
            time ionospheric measurements to determine how much of the
            publication and how much of the environment arrives.
          </p>

          <p>
            This could potentially mean that at given moments parts of the
            publication are missing due to the atmospheric conditions. If
            interested please return at a later time or at a different location
            or use your mobile device to tune in more accurately.
          </p>

          <p>
            If you are automatically redirected to the default location, please
            active the location services in your systems settings.
          </p>
        </div>
        <div class="oa_i_buttons">
          <p>Allow us to use:</p>
          <div class="oa_i_locater" onclick="currentLocation()">
            current location
          </div>
          <div class="oa_i_locater" onclick="defaultLocation()">
            default location
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Header -->
    <div class="oa_mobile_header">
      <a href="/">oneacre.online</a>
      <img
        class="oa_plus"
        id="oa_h_plus"
        src="/images/sophieeline/oa_plus.svg"
      />
    </div>

    <div class="oa_mobile_menu">
      <ul>
        <li><a href="/payment/sophieeline">Purchase a copy</a></li>
        <li class="oa_preserve">Newsletter</li>
        <li><a href="" class="oa_footer_btn">Credits</a></li>
      </ul>
    </div>

    <!-- Logo -->
    <div class="oa_logo">
      <div class="oa_logo_color" id="oa_logo_p1">one acre</div>
      <div class="scrollRange">
        <div class="oa_logo_inner">
          <div class="oa_logo_color" id="oa_logo_p2">.online</div>
        </div>
      </div>
    </div>

    <div class="data">
      <div id="status"></div>
      <div id="data_point"></div>
    </div>
    <div class="oa_wrapper">
      <!-- Sophie -->
      <div class="oa_section" id="oa_eline">
        <div class="oa_content">
          <div class="oa_title">
            <div class="title">Radio</div>
            <div class="title">Techno</div>
            <div class="title">Fossil</div>
          </div>
          <h3>by Eline Benjaminsen & Sophie Dyer</h3>

          <p>
            <i
              >Human multitudes, gases, electrical forces were hurled into the
              open country, high-frequency currents coursed through the
              landscape, new constellations rose in the sky, aerial space and
              ocean depths thundered with propellers, and everywhere sacrificial
              shafts were dug in Mother Earth. This immense wooing of the cosmos
              was enacted for the first time on a planetary scale-that is, in
              the spirit of technology</i
            >
          </p>

          <p>
            Walter Benjamin, ‘To The Planetarium,’ One-way Street
            (Einbahnstraße)​, 1974
          </p>

          <h2>This is an image bourne on radio</h2>

          <p>
            A radio line-of-sight differs to that of visible light, and so to
            human vision. In the radio spectrum, where frequencies are lower and
            wavelengths larger, a wave will attenuate more slowly, travelling
            further and existing longer. Lower frequency radio clings to the
            Earth’s surface in so-called <i>ground waves</i>, while higher
            frequencies reach over the horizon, reflected and refracted by an
            electrically charged ionosphere.
          </p>

          <p>
            The vocabulary of radio traces the invisible contours of its
            spectral topographies. <i>Rain fade</i>, <i>Earth bulge</i> and
            <i>backscatter</i>. "Go <i>hill topping</i> when transmitting Very
            High Frequencies!"
          </p>

          <h2>Radio</h2>

          <p>
            I use radio to refer to both the device that contains an oscillator,
            modulator, and amplifier, as well as electromagnetic waves in the
            range of 0.2 Hz to 3000 GHz, corresponding to wavelengths of 100,000
            kilometres to under 1 millimetre. The word might sound antiquated
            but almost without exception all contemporary wireless technologies
            operate in radio spectra. From Earth Observation Satellite feeds
            that negotiate Super High Frequencies, to planetary-scale cellular
            networks, Wi-Fi hotspots, Bluetooth links, television remote
            controls, and microwave ovens.
          </p>

          <p>
            The media theorist Mark Hansen considered radio to be neither
            invention or discovery but a “cosmological revelation” of the
            Earth’s electromagnetic field. Following Hansen, we can imagine
            radio’s spectral presence as a kind of disclosure or cosmic
            utterance. Spectral because we sense its persistence yet it is never
            fully present.<span class="fn">1</span> And an utterance because to
            utter or to articulate means to join together, to form “alliances,
            affinities, and connections”. The argument I want to experiment with
            is that our world is joined, entangled, fully enmeshed with
            radio.<span class="fn">2</span> Indeed, it is becoming-radio.
          </p>

          <p>
            Radio waves blur physis and techne, celestial and terrestrial,
            ancient and contemporary, human and nonhuman.<span class="fn"
              >2</span
            >
            Staying with Hansen, radio possesses a “doublesness” as both human
            technology and cosmic technology. To describe our world-becoming
            radio, is to tell a complex, multiscalar and seemingly paradoxical
            story. A story in which human activity features, yet radio has a
            “dynamic of its own”<span class="fn">4</span> not subject to human
            control.
          </p>

          <p>
            Anyone who has transmitted radio, such as an amateur enthusiast like
            myself, knows that the act of transmission is a process of
            negotiation with a myriad of nonhuman actors. From the Earth’s
            curvature and conductive bedrock, to air humidity and the
            ionosphere’s electric composition—anthropogenic transmissions are
            frequently textured by radio of geomagnetic and cosmic origins.
          </p>

          <p>
            At 290 Kelvin, the thermal noise of the Earth commingles with the
            hiss of cosmic background radiation that peaks at 120.1 MHz. This is
            in chorus with the radio hum of celestial bodies, most notably
            Jupiter just below 40 MHz and our sun’s polyphonic bursts.
          </p>

          <p>
            These are the noises we hear during so-called <i>radio silence</i>.
            Hisses, hums and volatile outbursts on so-called empty channels.
          </p>

          <p>
            What do we learn if we tune into radio noise? In other words, tune
            into our highly textured and complex radio environment or milieu.
            Tune into what electronic music composer, Pauline Oliveros, called
            the “negative operant phenomena of the system”, in her description
            of the “whistles and white noise between [radio] stations”.<span
              class="fn"
              >5</span
            >
          </p>

          <p>
            Our radio milieu is composed of electromagnetic currents that form a
            wireless infrastructure conducting operations beyond our awareness,
            and on which contemporary life is contingent.<span class="fn"
              >6</span
            >
            Put differently, have developed an attachment to radio and this can
            be theorised as an ontological commitment. Or, to summon Gilles
            Deleuze, an “unnatural coupling”.<span class="fn">7</span> A cosmic
            alliance of multiple and diffuse bodies.
          </p>

          <p>
            Our commitment to radio binds us to an electromagnetic milieu that
            is increasingly “dense, codified and politicised.”<span class="fn"
              >8</span
            >
            The idea of a divisible radio spectrum is played out in the
            strata-like bars of frequencies, charts, and regional band plans.
            These almost entirely enclosed radio spectrum, leaving only an
            estimated 2% of useable frequencies open access.<span class="fn"
              >9</span
            >
            The vast majority are licensed, either allocated by governments or
            bought and sold at auctions. This is a politics of radio modulated
            by intergovernmental treaties, corporate monopolies, ionospheric
            conditions, and the radio-active cycles of our Sun.
          </p>

          <h2>Techno</h2>

          <p>
            As discussed, radio can be understood as both cosmic technology and
            human technology.
          </p>

          <p>
            A strategy for understanding how radio as technology acts on our
            world is to ground its spectral presence in a specific material
            history. I propose we return to Hansen and his speech on radio that
            I quoted earlier, which was made at a conference on the Anthropocene
            in 2015. Geologists, atmospheric scientists, philosophers, media
            theorists, architects and artists had gathered at the Haus der
            Kulteren der Welt (HKW) in Berlin to debate the proposition of a new
            geological epoch.
          </p>

          <p>
            Those in favour of the Anthropocene argue that the Holocene has
            ended, and we are in a new geological age. Depending on which
            boundary marker subscribed to the nascent epoch began as early as
            the 16th the century when the byproducts of fossil fuel combustion,
            namely inorganic carbon, can be first detected. Or as late as July
            16th 1945 at Alamogordo in New Mexico, when the first nuclear bomb
            was detonated.<span class="fn">10</span>
          </p>

          <p>
            Hansen’s provocation at HKW, was to propose radio as a
            “technological trigger” for the Anthropocene. His comments resonated
            with those of Buckminster Fuller, who, over a century earlier, had
            claimed that radio signals do more than stitch the world together:
            they make the world a world for the first time.<span class="fn"
              >11</span
            >
            As Fuller observed, radio does more than connect or image our world,
            it reorganises it.
          </p>

          <p>
            If so, how do we understand radio as having a material history? In
            other words, how do we account for radio waves in a geological epoch
            written in rock? In other words, in <i>deep time</i>.<span
              class="fn"
              >12</span
            >
            Aside from questions of materiality and immateriality, are the
            temporalities of radio and geology not irreconcilably different?
          </p>

          <p>
            First, we must understand the Anthropocene as simultaneously a
            planetary model, project and instrument. It opens a line-of-sight,
            which brings into view specific material histories, and occludes
            others. To the geologists that must ratify new epochs, time is
            rendered visible and divisible by “stratigraphic signals”. That is
            to say, petrified plants, animals and “sedimentary pathways”.<span
              class="fn"
              >13</span
            >
            These are found in “solid aggregate mineral deposits”, in other
            words, rock and fossil.
            <span class="fn">14</span>
          </p>

          <h2>Fossil</h2>

          <p>
            Radio waves draw up antennae, curve parabolic dishes, and coil
            wires. These are <i>technofossils</i>, evidence in the geologists’
            search for chronological markers of the Anthropocene. Radio noise as
            stratigraphic signal.
          </p>

          <p>
            In the tale I am narrating of a world <i>becoming-radio</i>, the
            technofossil renders visible the force of radio in things that are
            not radio. Both directly by accounting for the future geological
            traces of telecommunication infrastructure. As well as indirectly,
            via national constitutions, federal laws, and computer codes that
            shape and are shaped our environment.
          </p>

          <p>
            The architect Keller Easterling referred to our radio milieu as
            “C-band urbanism”. C-band is the microwave portion of the radio
            spectrum, initially allocated to satellites. Easterling likened
            electromagnetic radiation, and the first artificial satellites that
            harnessed it, to an “airborne infrastructure”, “dams on a microwave
            sea”.<span class="fn">15</span>
          </p>

          <p>
            In their recent work on the Anthropocene, French historians,
            Christophe Bonneuil and Jean-Baptiste Fressoz, conceived the Earth’s
            radio skein as a “second atmosphere”.<span class="fn">16</span>
            Atmosphere implies something to which we have a reflexive encounter
            through the vital and involuntary mechanisms of breathing. Read
            together with reports of climate change it conjures a just fear of
            environmental ensnarement.
          </p>

          <p>
            Yet neither description fully accounts for radio’s “doubleness” as
            cosmic and human technology. Bonneuil and Fressoz’s atmospheric
            language places emphasis on radio as natural phenomenon. While
            Easterling’s recourse to urbanism stresses its spatial dimension and
            prompts us to think of it as architectural material, I would argue
            the result is an undue emphasis on our radio milieu as manmade.
          </p>

          <p>
            At a seminar last summer, I asked, theorist of political aesthetics
            Esther Leslie to describe in her vocabulary the proliferation of
            radio in the Anthropocene. Her response was simple: “it is an
            intense agitation all around us”.<span class="fn">17</span>
          </p>

          <p>
            I think Leslie’s notion of radio as <i>agitation</i> is compelling
            because it belongs to a family of concepts that are able to move
            between different registers: technoscientific, legal, political and
            social. This is a multiple belonging, appropriate to a technology
            that is both cosmic and human.<span class="fn">18</span> For
            example, political and social definitions of agitate are similar. To
            <i>agitate</i>, is to arouse public interest in a concern, to
            trouble, or be troubled. In technoscientific language it means to
            stir-up, unsettle or disturb. Agitation is also a reference to the
            essence of radio something. Unlike sound waves that are mechanical,
            electromagnetic radio waves do not displace material—they excite it.
            In other words, they <i>agitate</i> it.
          </p>

          <h2>Postscript</h2>

          <i>
            <p>
              We peer at the small monitor on the handheld controller. It shows
              a large tower. Our gaze meets two outsized, cylindrical drums—the
              radio relays of financial traders.
            </p>

            <p>
              The image we are viewing is borne on the radio waves of Global
              Positioning satellites and tethered by to the ground at 2.4 GHz.
            </p>

            <p>The drone is lost.</p>

            <p>
              It pivots, searching for the signal of the ground transceiver.
            </p>

            <p>We glimpse, what we could not before.</p>

            <p>An impossible image.</p>

            <p>
              A topography that extends beyond the limited range of human
              sensation to the bulk of frequencies that compose the infra and
              ultra, super and sub. The spectral topography of our radio milieu.
            </p>

            <p>The drone’s movements expose an interference pattern.</p>

            <p>
              To the radio listener or television viewer interference is noise.
              Yet noise is an “unruly intrusion”, evidence of an “other”.<span
                class="fn"
                >19</span
              >
            </p>

            <p>
              Attuned to the hum and rush of electrometric waves <br />
              We sense them as they crack into existence, attenuate and vanish.
            </p>

            <p>
              The hum and rush of an Anthropocene borne on radio waves surrounds
              and engulfs us.<span class="fn">20</span>
            </p>
          </i>
        </div>
      </div>

      <!-- Divider -->
      <div class="oa_divider"></div>

      <!-- Eline -->
      <div class="oa_section" id="oa_sophie">
        <div class="oa_content">
          <p>
            <i
              >The image we are viewing is borne on the radio waves of Global
              Positioning satellites and tethered by to the ground at 2.4
              GHz.</i
            >
          </p>

          <p>
            <i>It is also an image of high-frequency trading.</i>
          </p>

          <p>
            <i
              >The drone’s movement expose the interference pattern of a no
              image.</i
            >
          </p>

          <!-- frame01 -->
          <div class="oa_image right frame01">
            <img src="/images/sophieeline/lostdrone1/frame_1.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_2.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_3.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_4.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_5.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_6.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_7.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_8.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_9.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_10.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_11.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_12.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_13.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_14.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_15.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_16.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_17.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_18.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_19.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_20.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_21.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_22.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_23.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_24.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_25.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_26.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_27.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_28.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_29.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_30.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_31.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_32.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_33.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_34.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_35.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_36.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_37.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_38.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_39.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_40.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_41.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_42.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_43.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_44.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_45.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_46.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_47.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_48.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_49.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_50.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_51.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_52.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_53.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_54.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_55.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_56.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_57.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_58.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_59.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_60.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_61.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_62.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_63.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone1/frame_64.jpg" alt="" />
          </div>

          <p>
            Thursday, 16:34:02 Heated air makes the asphalt dance on half vacant
            parking lots. Sun cuts into the lens. The many lines-of-sight of
            High Frequency Trading radio relays pass through Slough, they split
            and come together in this suburban town best known as the grey
            backdrop of the comedy series The Office. From the roof of the Royal
            Posts’ sorting station, to the neighbouring Holiday Inn Express;
            white teflon wrapped circles. We travel North-East, crossing brick
            row houses, train tracks and hay fields, to the top of a wing in
            Hillingdon Hospital. Continuing along steal and glass in the City of
            London, past medieval ruins in Kent. Lines rejoin at The White
            Cliffs of Dover, again splitting across the English Channel.
          </p>
          <!-- frame02 -->
          <div class="oa_image left frame02">
            <img src="/images/sophieeline/lostdrone2/frame_1.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_2.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_3.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_4.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_5.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_6.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_7.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_8.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_9.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_10.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_11.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_12.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_13.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_14.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_15.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_16.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_17.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_18.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_19.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_20.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_21.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_22.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_23.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_24.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_25.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_26.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_27.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_28.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_29.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_30.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_31.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_32.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_33.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_34.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_35.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_36.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_37.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_38.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_39.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_40.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_41.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_42.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_43.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_44.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_45.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_46.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_47.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_48.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_49.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_50.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_51.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_52.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_53.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_54.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_55.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_56.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_57.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_58.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_59.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_60.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_61.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_62.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_63.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_64.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_65.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_66.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_67.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_68.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_69.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_70.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_71.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_72.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_73.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_74.jpg" alt="" />
            <img src="/images/sophieeline/lostdrone2/frame_75.jpg" alt="" />
          </div>

          <p>
            Thursday, 16:34:02 The moist from the sea beneath makes the image
            blurred yet we make out the approaching French coastal line.
            Following transmissions to Calais, raggedy white fences topped with
            barbed wire surrounds seemingly unused lots of land. Further East
            the boarder walls run along lorry-filled highways. A fly hits the
            camera lens.
          </p>

          <p>
            Thursday, 16:34:03 Lammersdorf is a small place in Germany about
            half a kilometre from the border of Belgium. It’s categorised as
            that, not a city, or a town, a place: ‘plaats’. Local tourist
            attractions are an agricultural museum, a Catholic Church and a tele
            tower. The large antennas are hovering above the trees of this
            forested region, round and white, clinging to its upper section. Six
            of their flat-stretched rubber faces point in a North-Eastern
            direction, the rest, another five look South-East. From here it
            shouldn’t be more than a couple of jumps and microseconds before the
            final destination; a data centre in the outskirts of Frankfurt.
            There are lazy hums of harvesters working fields nearby, and a
            continuous whizz from the road. A farm house dwarfed by the large
            metal construction.
          </p>

          <!-- frame04 -->
          <div class="oa_image right frame04">
            <img src="/images/sophieeline/frame01/frame1.jpg" />
            <img src="/images/sophieeline/frame01/frame2.jpg" />
            <img src="/images/sophieeline/frame01/frame3.jpg" />
            <img src="/images/sophieeline/frame01/frame4.jpg" />
            <img src="/images/sophieeline/frame01/frame5.jpg" />
            <img src="/images/sophieeline/frame01/frame6.jpg" />
            <img src="/images/sophieeline/frame01/frame7.jpg" />
            <img src="/images/sophieeline/frame01/frame8.jpg" />
            <img src="/images/sophieeline/frame01/frame9.jpg" />
            <img src="/images/sophieeline/frame01/frame10.jpg" />
            <img src="/images/sophieeline/frame01/frame11.jpg" />
            <img src="/images/sophieeline/frame01/frame12.jpg" />
            <img src="/images/sophieeline/frame01/frame13.jpg" />
            <img src="/images/sophieeline/frame01/frame14.jpg" />
            <img src="/images/sophieeline/frame01/frame15.jpg" />
            <img src="/images/sophieeline/frame01/frame16.jpg" />
          </div>

          <p>
            In 25 minutes the transmissions passing by the drone, in a 10 mm
            radius, will be cut off. Tomorrow they will continue to fly through
            these German woods, to a data center in the outskirts of Frankfurt,
            back across a hilltop overlooking the old coal factory in Liege,
            then through the French countryside again across the Straight of
            Dover, back and forth endlessly, between 9 and 5.
          </p>

          <p>
            There’s wooden hunting huts with tall legs and overgrown grasslands.
            We pass a small river and are on the way towards an endlessly
            forested horizon when the drone slows down until it comes to a
            complete halt. Its’ signal lost, it pivots, searching for the ground
            receiver. Stopping again, before pivoting another 20 seconds,
            slowing down, orienting. Shifting direction slightly, it picks up
            speed and returns to the tele tower.
          </p>
        </div>
      </div>
    </div>
    <!-- Newsletter -->
    <!-- Buttons -->
    <div class="oa_buttons">
      <!-- Purchase -->
      <a href="/payment/sophieeline">
        <div class="oa_button">Purchase a copy</div>
      </a>
      <a href="" class="oa_preserve">
        <div class="oa_button">Newsletter</div>
      </a>
      <a href="" class="oa_footer_btn">
        <div class="oa_button">Credits</div>
      </a>
    </div>

    <div class="oa_modal_wrapper">
      <div class="oa_modal">
        <div class="oa_modal_title">oneacre.online</div>
        <div class="oa_modal_content">
          <p>We will send you links</p>

          <p>If you sign up for our newsletter</p>
          <!-- Begin MailChimp Signup Form -->
          <form
            action="//online.us14.list-manage.com/subscribe/post?u=9473977eedf1a7da237b22b89&amp;id=85337ef85c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <!-- <label for="mce-EMAIL">Email Address</label> -->
                <input
                  type="email"
                  onfocus="this.value=''"
                  value="Email Address"
                  name="EMAIL"
                  placeholder="hi@oneacre.online"
                  class="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>

              <!-- do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_9473977eedf1a7da237b22b89_85337ef85c"
                  tabindex="-1"
                  value=""
                />
              </div>

              <input
                type="submit"
                value="↵"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footnotes -->

    <div class="oa_footnotes_btn">footnotes</div>
    <div class="oa_footnotes">
      <div class="oa_footnotes_header">Footnotes</div>

      <p>
        [1] McCormack, D. P. ‘Remotely Sensing Affective Afterlives: The
        Spectral Geographies of Material Remains’, Annals of the Association of
        American Geographers, 2010 Jul; 100(3): 640–654
      </p>

      <p>
        [2] Haraway, D. ‘The Promises of Monsters’ in Hustak, N and Myers, N.
        Involutionary Momentum. 2012; 23(3): 105
      </p>

      <p>[3] Sheikh, S. On violence: A Posthuman Glossary, 2017</p>

      <p>
        [4] The idea of agency (the power to act) being delimited by the scale
        is taken from an article by the geologist Haff, P. in the Anthropocene
        Review, 2014; 1(2): 126–136, ‘Humans and technology in the
        Anthropocene’: Six rules’ “(1) the rule of inaccessibility, that large
        components of the technosphere cannot directly influence the behavior of
        their human parts; (2) the rule of impotence, that most humans cannot
        significantly influence the behavior of large technological systems; (3)
        the rule of control, that a human cannot control a technological system
        that expresses a larger number of behaviors than he himself; (4) the
        rule of reciprocity, that a human can interact directly only with
        systems his own size […]”
      </p>

      <p>
        [5] Kahn, D. Earth Sound Earth Signal: Energies and Earth Magnitude in
        the Arts. Berkeley: University of California Press, 2013. p. 126
      </p>

      <p>
        [6] Hansen, M. ‘Triggers: Introducing the Technosphere’. 100 Jahre
        Gegenwart. Haus der Kulturen der Welt: Berlin, 2015
      </p>

      <p>
        [7] Deleuze, G, Guattari F. A Thousand Plateaus: Capitalism and
        Schitzophrenia. London: Athlone, 1988
      </p>

      <p>
        [8] P135 Easterling, K. Enduring Innocence. Cambridge: MIT Press, 2005
      </p>

      <p>
        [9] Bloom, P. Skype interview with Peter Bloom, Co-Founder of
        Rhizomatica. 18 June 2017. Skype. “My very approximate calculation is
        that globally, around 2% of usable spectrum is unlicensed. So for 98%
        you need a license to access it.“
      </p>

      <p>
        [10] See the articles: ‘Did the Anthropocene Begin in 1950 or 50,000
        Years Ago?’ and When did the Anthropocene begin? A mid-twentieth century
        boundary level is stratigraphically optimal
      </p>

      <p>
        [11] Wigely, Mark. Buckminster Fuller Inc. Architecture in the age of
        radio. Lars Müller Publishers: Zurich, 2015
      </p>

      <p>
        [12] Deep time is the idea of geologic time. The idea was developed in
        the Eighteenth Century by by Scottish geologist James Hutton.
      </p>

      <p>
        [13] ‘sedimentary pathways’ was a term used by Jan Zalasiewicz at the
        Technosphere Round Table at the Architecture Association in London on 4
        March 2017
      </p>

      <p>
        [14] Oldfield, Frank. ‘Can the Magnetic Signatures from Inorganic Fly
        Ash Be Used to Mark the Onset of the Anthropocene?’ Anthropocene Review
        2.1, 2014: 3–13
      </p>

      <p>
        [15] p. 142 Easterling, Keller. Enduring Innocence. Cambridge: MIT
        Press, 2005
      </p>

      <p>
        [16] Fressoz, J., and Bonneuil C. Shock of the Anthropocene: The Earth,
        History and Us. London: Verso, 2017
      </p>

      <p>
        [17] Ester, L. Technsophere Roundtable. Centre for Research
        Architecture, University of London: N.p., 2017
      </p>

      <p>
        [18] Engelmann, S. Conversation with Sasha Engelmann at Goldsmiths
        College in London, 7 Dec. 2017
      </p>

      <p>[19] Kahn, D. 1999. Sound, Water, Meat. p. 22</p>

      <p>
        [20] Dyer, S. and Engelmann, E. Lore of the radio fossil, Text and sound
        installation. London, 2017
      </p>
    </div>

    <!-- Footer -->
    <div class="oa_footer_overlay"></div>
    <div class="oa_footer_wrapper">
      <img
        id="oa_f_close"
        src="/images/sophieeline/close_white.svg"
        alt="Close"
      />
      <div class="oa_footer">
        <div class="oa_f_credits">
          <p class="oa_f_header">Credits</p>

          <p>Written by Sophie Dyer and Eline Benjaminsen.</p>

          <p>
            Made by Stef Kors, Titus Knegtel, Victoria Douka-Doukopoulou with
            the kind support of the Creative Industries Fund NL and Stroom Den
            Haag. For the production of RADIO, TECHNO, FOSSIL, oneacre.online
            would like to thank: Duistere Bardo, Docus van der Made, Witte de
            With Center for Contemporary Art, The Reading Room, Paul Purgas and
            Empyset, Sonic Acts, Sasha Engelmann and Daniele Guerrini & Matthias
            Girardi.
          </p>
        </div>
        <div class="oa_f_social">
          <div class="oa_f_newsletter oa_preserve">Newsletter</div>
          <div class="oa_f_newsletter">
            <a href="mailto:hi@oneacre.online">contact us</a>
          </div>
          <div class="oa_f_buttons">
            <a href="https://www.facebook.com/oneacre.online"
              ><img src="/images/oneacre/fb.svg" alt="Facebook"
            /></a>
            <a href="https://www.instagram.com/oneacre.online/"
              ><img src="/images/oneacre/instagram.svg" alt="Instagram"
            /></a>
            <a href="https://twitter.com/oneacre_online"
              ><img src="/images/oneacre/twitter.svg" alt="Twitter"
            /></a>
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
      title: 'Radio Techno Fossil',
      description:
        'oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works.',
      image: '/images/sophieeline/oa_meta_img.jpg',
    }
  },
  head() {
    return {
      title: this.title,
      meta: setMeta(this.title, this.description, this.image),
      script: [
        {
          type: 'text/javascript',
          src: '/scripts/sophieeline/moment.min.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/oneacre/logo.js',
        },
        {
          type: 'text/javascript',
          src: '/scripts/sophieeline/script.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/fonts.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/logo.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/style.css',
        },
        {
          rel: 'stylesheet',
          href: '/styles/works/sophieeline/payment.css',
        },
        {
          rel: 'icon',
          href: '/favicon_green.ico',
          type: 'image/x-icon'
        },
      ],
    }
  },
}
</script>

<style scoped></style>
