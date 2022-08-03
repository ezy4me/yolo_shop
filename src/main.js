import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHeart, faBagShopping, faUser, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTelegram, faInstagram, faVk} from '@fortawesome/free-brands-svg-icons'
import '@/assets/layouts/index.scss'

library.add(faHeart, faSearch, faBagShopping, faUser, faTelegram, faInstagram, faVk);
createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');

