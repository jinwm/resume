import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { dblClick } from './js/directive';
import { useResize } from './js/utils';

useResize();

const app = createApp(App);
app.use(router);

dblClick(app);

app.mount('#app');

