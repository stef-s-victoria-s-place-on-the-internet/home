<template>
  <div>
    <div class="wrapper">
      <div class="box"></div>
      <!-- <div class="marker timeline-trigger"></div>
      <div class="marker start-trigger"></div>
      <div class="marker end-trigger"></div> -->
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var sceneStart = 350
    var duration = 200
    var triggerOffset = 100
    var requestId = null

    TweenLite.set('.timeline-trigger', {
      top: sceneStart,
    })

    TweenLite.set('.start-trigger', {
      top: sceneStart,
    })

    TweenLite.set('.end-trigger', {
      top: sceneStart + duration,
    })

    TweenLite.set('.box', {
      top: sceneStart + duration / 2,
      left: '50%',
      scale: 0.5,
      xPercent: -50,
      yPercent: -50,
    })

    TweenLite.set('.wrapper', {
      height: sceneStart + duration,
    })

    var tl = new TimelineMax({ paused: true })
      .set('.progress', { className: '+=active' }, sceneStart)
      .to(
        '.box',
        duration,
        { rotation: 360, scale: 1, borderRadius: '50%' },
        sceneStart
      )
      .set('.progress', { className: '-=active' })

    window.addEventListener('scroll', requestUpdate)
    update()

    // Only update on animation frames
    function requestUpdate() {
      if (!requestId) {
        requestId = requestAnimationFrame(update)
      }
    }

    // Set timeline time to scrollTop
    function update() {
      tl.time(window.pageYOffset + triggerOffset)
      requestId = null
    }
  },
}
</script>

<style lang="scss" scoped>
.newyear {
  background-color: #393637;
}
.greetings {
  background: #c31e40;
}
.greetings,
.newyear {
  img {
    max-width: 800px;
    margin: auto;
  }
}


img {
  width: 100%;
}
.box {
  width: 20rem;
  height: 20rem;
}

.box {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: white;
  will-change: transform;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.marker {
  width: 100%;
  left: 0;
  pointer-events: none;
  user-select: none;
  z-index: 100;
  border-bottom: 1px solid;
}

.timeline-trigger {
  position: fixed;
  border-color: blue;
  z-index: 90;
}

.start-trigger {
  border-color: green;
  position: absolute;
}

.end-trigger {
  border-color: red;
  position: absolute;
}
</style>
