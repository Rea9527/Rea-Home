'use strict';

import './main.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Main from './main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

var router = new VueRouter({
  routes: routes
})

const app = new Vue({
  el: '#Rea-Home',
  router: router,
  render: h => h(Main)
});

