'use strict';

import './main.css'
import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = {
	'/': 'index',
	'/index': 'index'
}

const app = new Vue({
  el: '#Rea-Home',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})