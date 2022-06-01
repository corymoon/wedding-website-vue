<template>
  <section class="hero hero-bg is-fullheight" id="top">
    <div class="hero-body" style="flex-direction: column; justify-content: center;">
      <img src="../assets/logo-lg.png" alt="Joni and Cory Logo">
      <a class="button is-primary is-rounded is-outlined is-large" href="#rsvp" v-smooth-scroll>
        <strong>RSVP</strong>
      </a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.hero-bg {
  background-image: url('../assets/hero.jpeg');
  background-size: cover;
}
</style>
