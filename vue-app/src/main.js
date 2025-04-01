import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import CoreUIVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import {iconsSet as icons} from '@/assets/icons'

axios.defaults.baseURL = 'http://localhost:3000'
const app = createApp(App)
app.use(createPinia()).use(router).use(CoreUIVue).provide('icons', icons).provide('$axios', axios).component('CIcon', CIcon).mount('#app')
