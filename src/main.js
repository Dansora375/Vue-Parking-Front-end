import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueClickAway from 'vue3-click-away';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://192.168.39.170:3000/api';

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(VueClickAway)
  .mount('#app');
