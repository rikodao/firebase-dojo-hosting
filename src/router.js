import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import * as firebase from "firebase";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { requiresAuth: true }
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !firebase.auth().currentUser) {
    alert('認証して下さい')
    next({ path: '/' });
  } else {
    next();
  }
});


export default router;