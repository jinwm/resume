import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useResize } from './assets/js/reszie';

useResize();

const app = createApp(App);
app.use(router);
app.mount('#app');

