<template>
  <div class="body">
    <main class="home-wrapper">
      <LanguageSwitcher />
      <Block1 />
      <Whishes />
      <Garland />
      <Whishes />
      <Goals2020 />
      <!-- <Loader /> -->
      <!-- <p>
        Best whishes from our home to yours, all the best in the new year
      </p>
      <h1>2020</h1>
      <h2>goals</h2>
      <h2>not much changed, we don't go out much anyway</h2>
      <h2>what a clusterfuck!</h2> -->

      <!-- Picture of the red banner -->


      <!-- <h2>2020  goals: not much has changed</h2> -->



    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      child: {},
    }
  },
}
</script>

<style lang="scss" scoped>
.body {
  background: url('~assets/images/christmas-2020/background-small.png') repeat;
  background-size: 300px;
  background-color: $black;
}

.home-wrapper {
background: url('http://c15117992.r92.cf2.rackcdn.com/lines.png') repeat-y center;
}

.starlight {
  font-family: 'Starlight', serif;
  font-weight: normal;
  font-size: 10em;
  line-height: 0.6em;
}

.merienda {
  font-family: 'Merienda', cursive;
  font-size: 3.8em;
  line-height: 0.7em;
  font-weight: 300;
}

.parisienne {
  font-family: 'Parisienne', cursive;
  font-size: 69px;
}
</style>
