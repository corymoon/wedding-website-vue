<template>
  <section class="hero hero-bg is-fullheight" id="top">
    <div class="hero-body is-justify-content-center">
      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <img :src="logo" alt="Joni and Cory Logo" />
          <p class="has-text-white mb-6 is-size-5">October 8, 2023 | Apple River, IL</p>
          <a class="button wide-button is-rounded" href="#rsvp" v-smooth-scroll v-if="!isWeddingDay">
            RSVP
          </a>  
        </div>
      </div>


    </div>
    <!-- <div class="hero-foot">
      <div class="container has-text-centered">
        <a :href="scrollDownTo" class="button circle-button floating-arrow mb-6" v-smooth-scroll>
          <i class="fa fa-chevron-down"></i>
        </a>
      </div>
    </div> -->
  </section>
</template>

<script>
// import { saveTheDate } from '@/data/toggles';
  const logo = require('@/assets/logo-lg.png');
export default {
  data() {
    return {
      // saveTheDate,
      logo,
    }
  },
  computed: {
    // scrollDownTo() {
    //   if (this.saveTheDate) {
    //     return "#save-the-date";
    //   } else {
    //     return "#intro";
    //   }
    // }
  }
}
</script>

<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/mixins.sass";

.wide-button {
  $padding: 40px;
  padding-left: $padding  !important;
  padding-right: $padding  !important;
}

// .floating-arrow {
//   animation-name: floating-arrow;
//   animation-duration: 2s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out
// }

// @keyframes floating-arrow {
//   from {
//     transform: translate(-50%, 0)
//   }

//   65% {
//     transform: translate(-50%, 15px)
//   }

//   to {
//     transform: translate(-50%, 0)
//   }
// }

// .circle-button {
//   $size: 50px !important;
//   width: $size;
//   height: $size;
//   border-radius: 50% !important;

//   i {
//     line-height: $size;
//     vertical-align: middle !important;
//   }
// }

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
