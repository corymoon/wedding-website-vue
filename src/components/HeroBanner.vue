<template>
  <section class="hero hero-bg is-large" id="top">
    <div class="hero-body is-justify-content-center">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <img src="../assets/logo-lg.png" alt="Joni and Cory Logo" />
          <a class="button is-primary is-rounded is-outlined is-large" href="#rsvp" v-smooth-scroll>
            <strong>RSVP</strong>
          </a>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.hero.is-almost-fullheight {
  min-height: 80vh;
}

.hero-bg {
  background-image: url('../assets/hero/hero-sm.jpg');
  background-size: cover;
  background-position: center center;

  @include tablet {
    background-image: url('../assets/hero/hero-md.jpg');
  }

  @include desktop {
    background-image: url('../assets/hero/hero-lg.jpg');
  }

  @include widescreen {
    background-image: url('../assets/hero/hero-xl.jpg');
  }
}
</style>
