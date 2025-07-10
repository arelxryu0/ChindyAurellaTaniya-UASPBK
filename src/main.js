import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

// Buat instance Vue
const app = createApp(App);

// Gunakan Pinia dan Router
app.use(createPinia());
app.use(router);

// Mount aplikasi ke elemen #app
app.mount('#app');
