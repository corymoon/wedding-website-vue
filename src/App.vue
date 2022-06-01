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
            <a :class="action.primary ? 'button is-primary is-rounded' : 'button is-light is-rounded'"
              v-for="action in navActions" :key="action.label" :href="action.href" v-smooth-scroll>
              <strong>{{ action.label }}</strong>
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
      showStory: true,
      showNavbar: true,
      lastScrollPosition: 0,
      navItems: [
        {
          label: 'Our Story',
          href: '#story',
          display: false,
        },
        {
          label: 'Events',
          href: '#events',
          display: false,
        },
        {
          label: 'Photos',
          href: '#photos',
          display: true,
        },
        {
          label: 'Lodging',
          href: '#lodging',
          display: false,
        },
        {
          label: 'Oak Hill Farm',
          href: '#venue',
          display: true,
        },
      ],
      navActions: [
        {
          label: 'Venue',
          href: '#map',
          primary: false,
        },
        {
          label: 'RSVP',
          href: '#rsvp',
          primary: true,
        },
      ],
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

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
