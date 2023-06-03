import Vue from 'vue'
import App from './App.vue'
// import Vuelidate from 'vuelidate'; npm i vuelidate
import router from './router'
//import fontAwesome from 'fontawesome'
 import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';  npm i bootstrap-icons

// Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
