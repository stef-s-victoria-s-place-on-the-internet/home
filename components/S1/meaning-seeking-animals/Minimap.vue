<template>
  <div class="ma_minimap">
    <div class="minimap_wrap">
      <div id="minimap_screen"></div>
    </div>
    <MinimapSVG />
  </div>
</template>

<script>
import MinimapSVG from '~/components/S1/meaning-seeking-animals/MinimapSVG'

export default {
  components: {
    MinimapSVG
  }
}
</script>

<style>
</style>
