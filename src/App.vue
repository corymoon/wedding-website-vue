<template>
  <div id="app">
    <b-navbar fixed-top class="is-primary" :class="{ 'transparent-nav': showNavbar }">
      <template #brand>
        <b-navbar-item href="#top" v-smooth-scroll>
          <img src="./assets/logo.png" alt="Joni and Cory Wedding Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item v-for="item in visibleNavItems" :key="item.label" :href="item.href" v-smooth-scroll>
          {{ item.label }}
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-rounded" href="#rsvp" v-smooth-scroll>
              <strong>RSVP</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <HeroBanner id="top" />
    <IntroSection />
    <OurStory v-if="showStory" />
    <EventsSection />
    <PhotoCarousel />
    <VenueSection />
    <MapSection />
    <MapDisplay />
    <LodgingSection />
    <RsvpSection />
    <PageFooter />
  </div>
</template>

<script>
import HeroBanner from './components/HeroBanner.vue'
import IntroSection from './sections/IntroSection.vue'
import OurStory from './sections/OurStory.vue'
import EventsSection from './sections/EventsSection.vue'
import PhotoCarousel from './sections/PhotoCarousel.vue'
import VenueSection from './sections/VenueSection.vue'
import MapSection from './sections/MapSection.vue'
import MapDisplay from './sections/MapDisplay.vue'
import LodgingSection from './sections/LodgingSection.vue'
import RsvpSection from './sections/RsvpSection.vue'
import PageFooter from './components/PageFooter.vue'

import { navItems } from './data/navItems'
import navActions from './data/navActions.json'

import { showStory } from './data/toggles'

export default {
  name: 'App',
  components: {
    HeroBanner,
    IntroSection,
    OurStory,
    EventsSection,
    PhotoCarousel,
    VenueSection,
    MapSection,
    MapDisplay,
    LodgingSection,
    RsvpSection,
    PageFooter,
  },
  data: function () {
    return {
      showStory,
      showNavbar: true,
      lastScrollPosition: 0,
      navItems,
      navActions,
    }
  },
  computed: {
    visibleNavItems: function () {
      var items = [];
      this.navItems.forEach(function (item) {
        if (item.display) {
          items.push(item);
        }
      });
      return items;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style lang="scss">
.navbar {
  transition: all 900ms ease;
}

.transparent-nav {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
