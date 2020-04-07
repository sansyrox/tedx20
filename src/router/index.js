import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Theme from "../views/Theme.vue";
import SpeakerForm from "../views/SpeakerForm.vue";
import pastspeakers from "../views/pastspeakers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    //import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Theme",
    name: "Theme",
    component: Theme
  },
  {
    path: "/SpeakerForm",
    name: "SpeakerForm",
    component: SpeakerForm
  },
  {
    path: "/pastspeakers",
    name: "pastspeakers",
    component: pastspeakers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
