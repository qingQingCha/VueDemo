/**
 * 入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import './filter' // 加载过滤器
import './mock/mockServer'
import loading from './common/imgs/loading.gif'

Vue.component(Button.name, Button)
Vue.use(VueLazyLoad, {
  loading
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
