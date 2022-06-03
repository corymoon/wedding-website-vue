<template>
  <section class="hero hero-bg is-fullheight" id="top">
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

<style>
.hero-bg {
  background-image: url('../assets/hero.jpeg');
  background-size: cover;
  background-position: center center;
}
</style>
