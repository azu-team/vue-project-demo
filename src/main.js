// 导入样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/element.scss'

import Vue from 'vue'
import App from './App.vue'
import httpRequest from './utils/http.js' 
import ElementUi from 'element-ui'
import router from './router'
import store from './store'
//引入其他插件
import './utils'

httpRequest.config(Vue)


Vue.use(ElementUi)
Vue.prototype.$HTTP = httpRequest




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
