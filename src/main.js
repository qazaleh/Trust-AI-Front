import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import reveal from './directives/reveal'
import './styles/globals.css'

const app = createApp(App)

app.directive('reveal', reveal)

app
  .use(i18n)
  .use(router)
  .mount('#app')
