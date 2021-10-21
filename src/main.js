import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClickAway from 'vue3-click-away'
import DisableAutocomplete from 'vue-disable-autocomplete'
// import VueCookies from 'vue3-cookies';
import App from './App.vue'
import router from './router'
import store from './store'


axios.defaults.baseURL = 'http://localhost:3000/api'

const app = createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(DisableAutocomplete)
  // .use(VueCookies)
  .use(VueClickAway)


router.beforeEach((to, from, next) => {
  // validando que no se encuentre en inicio o registro
  
  let datoNext = ''
  // console.log(to.path)
  if (to.path !== '/login' && to.path !== '/register') {
    // ahora se valida si el usuario esta logueado
    
    if (store.getters.getIsNotLogged){
      datoNext = '/login';
    } else {
      datoNext = true;
    }
  } else {
    datoNext = ''
  }
  // console.log('dato: ',datoNext);
  if (datoNext){
    next(datoNext);
  } else {
    next()
  }
    
});

app.mixin({
  computed: {
    userData() {
      return store.state.userData;
    }
  },
  watch: {
    userData (changed) {
      // console.log(changed !== {});
      // console.log( store.getters.getIsNotLogged, changed);
      
      if (!store.getters.getIsNotLogged) {
        router.push({ name: 'Home' })
      } else {
        console.log('aqui')
        router.push({ name: 'Login'})
      }
    }
  },
  methods: {
    // toggleModal(value) {
    //   this.$refs.modal.toggleModal(value);
    // },
  }
})

app.mount('#app')
