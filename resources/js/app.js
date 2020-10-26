require('./bootstrap');
window.Vue = require('vue');

Vue.component('vue-js', require('./Main.vue').default);

import './assets/css/reset.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Routes from './routes';

new Vue({
    el: '#app',
    router: Routes
});
