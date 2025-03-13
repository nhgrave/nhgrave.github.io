import { createApp } from 'vue'
import App from './App.vue'

import Scrollable from './plugins/scrollable'

createApp(App)
  .use(Scrollable)
  .mount('#app')
