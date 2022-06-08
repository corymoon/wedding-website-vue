import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueSmoothScroll from "vue2-smooth-scroll";
import * as VueGoogleMaps from "@busability/vue2-google-maps";
import dayjs from "dayjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarker,
  faUser,
  faEnvelope,
  faAngleUp,
  faInfoCircle,
  faHeart,
  faWindowClose,
  faMapMarkerAlt,
  faGlobe,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// components
import SectionTitle from "./components/SectionTitle.vue";
import PageSection from "./components/PageSection.vue";
import SectionContent from "./components/SectionContent.vue";
import EventCard from "./components/EventCard.vue";

// styles
import "./assets/scss/main.scss";

// google api
import { mapsAPIkey } from "../maps";

// data
import { lodging } from "@/data/lodging";

library.add(
  faMapMarker,
  faUser,
  faEnvelope,
  faAngleUp,
  faInfoCircle,
  faHeart,
  faWindowClose,
  faMapMarkerAlt,
  faGlobe,
  faDrumstickBite
);

Vue.use(Buefy, {
  defaultIconPack: "fa",
});
Vue.use(VueSmoothScroll, {
  duration: 700,
});
Vue.use(VueGoogleMaps, {
  load: { key: mapsAPIkey },
  installComponents: true,
});

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("section-title", SectionTitle);
Vue.component("page-section", PageSection);
Vue.component("section-content", SectionContent);
Vue.component("event-card", EventCard);

Vue.mixin({
  computed: {
    isWeddingDay() {
      // const weddingString = "June 5, 2022";
      const weddingString = "October 8, 2023";
      return (
        new Date(weddingString).getDate() == new Date().getDate() &&
        new Date(weddingString).getMonth() == new Date().getMonth() &&
        new Date(weddingString).getFullYear() == new Date().getFullYear()
      );
    },
    numHotels() {
      return lodging.length == 1 ? "" : this.numberToWords(lodging.length);
    },
    locationText() {
      return lodging.length == 1 ? "location" : "locations";
    },
  },
  methods: {
    numberToWords(value) {
      var converter = require("number-to-words");
      return converter.toWords(value);
    },
    dateHeader(date) {
      return dayjs(date).format("MMMM D, YYYY");
    },
    timelineTime(date) {
      return dayjs(date).format("h:mm A");
    },
    showToastMessage(type, message) {
      this.$buefy.toast.open({
        duration: 7000,
        message: message,
        position: "is-bottom",
        type: type,
        pauseOnHover: true
      });
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
