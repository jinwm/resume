import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useResize } from './js/reszie';
import { dblClick } from './js/directive';

useResize();

const app = createApp(App);
app.use(router);

dblClick(app);

app.mount('#app');

