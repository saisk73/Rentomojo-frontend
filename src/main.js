import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueHeadful from 'vue-headful';


import Navbar from './components/common/Navbar'
Vue.component('Navbar', Navbar)

Vue.component('vue-headful', vueHeadful);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
