import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
