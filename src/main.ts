import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/arya-green/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

createApp(App).use(PrimeVue).use(router).mount('#app');
