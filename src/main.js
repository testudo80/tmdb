import { createApp } from 'vue';

// fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// specific icons
import {
  faMagnifyingGlass,
  faCompactDisc,
  faRocket,
  faDragon,
  faMask,
  faBurst,
  faPersonRunning,
  faMasksTheater,
  faSkull,
  faBoxArchive,
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

// add each imported icon to the library
library.add(
  faMagnifyingGlass,
  faCompactDisc,
  faRocket,
  faDragon,
  faMask,
  faBurst,
  faPersonRunning,
  faMasksTheater,
  faSkull,
  faBoxArchive,
  faRankingStar,
  faApple
);

// yhdistetään osat
import router from './router.js'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'

// luodaan applikaatio
const app = createApp(App)

// lisätään router
app.use(router)

// add font awesome icon component
app.component('font-awesome-icon', FontAwesomeIcon)
// base-card -> HTML-elementin nimi
// BaseCard -> komponentin nimi
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

// kiinnitetään applikaatio
app.mount('#app')
