import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueClickAway from 'vue3-click-away';
import DisableAutocomplete from 'vue-disable-autocomplete';
// import VueCookies from 'vue3-cookies';
import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://localhost:3000/api';

const app = createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(DisableAutocomplete)
  // .use(VueCookies)
  .use(VueClickAway);

app.mixin({
  created() {
    // console.log(this.$router.currentRoute.value.name);
    // eslint-disable-next-line max-len
    // if (this.$cookies.isKey('user') && this.$router.currentRoute.value.name !== 'Registrer' && this.$router.currentRoute.value.name !== 'Inicio_sesion') {
    if (this.$store.getters.getIsNotLogged && this.$router.currentRoute.value.name !== 'Registrer') {
      // console.log(this.user);
      this.$router.push({ name: 'Inicio_sesion' });
    }
  },
  methods: {
    // toggleModal(value) {
    //   this.$refs.modal.toggleModal(value);
    // },
  },
});

app.mount('#app');
