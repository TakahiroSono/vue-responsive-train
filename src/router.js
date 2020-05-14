import Vue from 'vue';
import VueRouter from 'vue-router';
import Responsive from './page/Responsive.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Responsive}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
