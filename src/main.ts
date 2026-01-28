import { createApp } from 'vue'
import App from './App.vue'  // ← Заглавная 'A'!
import router from './router/index'  // без .js

const app = createApp(App)
app.use(router)
app.mount('#app')
