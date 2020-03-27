import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import messages from './assets/i18n'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: store.state.locale,
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
