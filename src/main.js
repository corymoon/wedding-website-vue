import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueSmoothScroll from 'vue2-smooth-scroll'
import * as VueGoogleMaps from '@busability/vue2-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarker,
  faUser,
  faEnvelope,
  faAngleUp,
  faInfoCircle,
  faHeart,
  faWindowClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// components
import SectionTitle from './components/SectionTitle.vue'
import PageSection from './components/PageSection.vue'
import SectionContent from './components/SectionContent.vue'

// styles
import './assets/scss/main.scss'

library.add(faMapMarker, faUser, faEnvelope, faAngleUp, faInfoCircle, faHeart, faWindowClose)

Vue.use(Buefy, {
  defaultIconPack: 'fa',
})
Vue.use(VueSmoothScroll, {
  duration: 700,
})
Vue.use(VueGoogleMaps, {
  load: {key: 'AIzaSyDmIJiAHdtBAUBEV88iodb0b4UnM7uru94'},
  installComponents: true
})

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('section-title', SectionTitle)
Vue.component('page-section', PageSection)
Vue.component('section-content', SectionContent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
