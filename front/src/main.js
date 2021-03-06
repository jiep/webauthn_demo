import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


Vue.prototype.$http = axios;
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
