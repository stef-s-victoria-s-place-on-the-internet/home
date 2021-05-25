<template>
  <div class="body">
    <main class="home-wrapper">
      <div class="redirection">
        <p class="first">We aren't here anymore</p>
        <p class="second">visit us at <nuxt-link to="13-D">13-D</nuxt-link></p>
      </div>
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
  background-color: $black;
  background-image: linear-gradient(
    140deg,
    #eadedb 0%,
    #bc70a4 50%,
    #bfd641 75%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .redirection {
    transition: ease-in-out 400ms;
    padding: 10rem 1rem;
    border-radius: 100%;
    position: relative;
    width: 20ch;


    > p {
      position: absolute;
      top: 40%;
    }

    .first {
      opacity: 1;
    }

    .second {
      opacity: 0;
    }

    &:hover {
      transform: rotate(720deg);
      transition: ease-in-out 500ms;
      .first {
        opacity: 0;
      }

      .second {
        opacity: 1;
      }
    }
  }
}
</style>
