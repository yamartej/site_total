import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ProductList from './components/ProductList.vue'




import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
window.$ = window.jQuery = require("jquery");

//import adminlte scripts
import "../node_modules/admin-lte/dist/js/adminlte.min.js"


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


import { faBars, 
  faDoorClosed, 
  faComment, 
  faSearch,
  faTimes,
  faBell, 
  faEnvelope,
  faUser,
  faFile, faExpandArrowsAlt, faThLarge} from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, 
  faBars, 
  faDoorClosed, 
  faComment, 
  faSearch,
  faTimes,
  faBell,
  faEnvelope,
  faUser, faFile, faExpandArrowsAlt,faThLarge)

const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true;
}

app.component('ProductList', ProductList) 
app.component('font-awesome-icon', FontAwesomeIcon)




app.use(router).use(store).use(VueSweetalert2).mount('#app')
