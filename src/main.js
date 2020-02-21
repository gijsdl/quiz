import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import resultaten from "./components/resultaten";
import quiz from "./components/quiz";
import resultaatDetails from "./components/resultaatDetails";
import NewQuestion from "./components/NewQuestion";
import questions from "./components/questions";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: quiz},
    {path: '/history', component: resultaten},
    {path: '/history/details/:id', component: resultaatDetails},
    {path: '/questions', component: questions},
    {path: '/add-question', component: NewQuestion},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
