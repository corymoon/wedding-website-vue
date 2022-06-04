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
    <hero-banner id="top" />
    <save-the-date-section v-if="saveTheDate" />
    <intro-section :class="saveTheDate ? 'pt-6' : ''" />
    <our-story v-if="showStory" />
    <events-section v-if="showEvents" />
    <photo-carousel />
    <venue-section />
    <map-section />
    <map-display />
    <registry-section v-if="showRegistry" />
    <lodging-section v-if="showLodging" />
    <rsvp-section />
    <page-footer />
  </div>
</template>

<script>
import HeroBanner from './components/HeroBanner.vue'
import PageFooter from './components/PageFooter.vue'
import {
  IntroSection,
  OurStory,
  EventsSection,
  PhotoCarousel,
  VenueSection,
  MapSection,
  MapDisplay,
  LodgingSection,
  RegistrySection,
  RsvpSection,
  SaveTheDateSection,
} from './sections'

import { navItems } from './data/navItems'

import { showStory, showEvents, showLodging, showRegistry, saveTheDate } from './data/toggles'

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
    RegistrySection,
    RsvpSection,
    PageFooter,
    SaveTheDateSection,
  },
  data: function () {
    return {
      showStory,
      showEvents,
      showRegistry,
      showLodging,
      saveTheDate,
      showNavbar: true,
      lastScrollPosition: 0,
      navItems,
    }
  },
  computed: {
    visibleNavItems() {
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
