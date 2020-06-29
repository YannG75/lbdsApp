import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import axios from 'axios';

Vue.use(Ionic);
Vue.prototype.$axios = axios
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');