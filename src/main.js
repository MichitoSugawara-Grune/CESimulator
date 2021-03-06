import Vue from 'vue'
// import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Vue.use(Vuetify);
new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')