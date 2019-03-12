import Vue from 'vue';
import VueRouter from 'vue-router';
import Question from './components/Question';
import Result from './components/Result';

import App from './App.vue';

Vue.config.productionTip = false;

const routes = [
  { path: '/result', component: Result, name: 'Result', props: true },
  { path: '/', component: Question, name: 'Question', props: true }
];

const router = new VueRouter({ routes });

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
