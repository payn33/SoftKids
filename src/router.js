import { createRouter, createWebHistory } from "vue-router";
import { Landing,  } from "./components/index";

const routes = [
  {
    path: "/",
    component: Landing,
    name: "home",
  },
  // {
  //   path: "/login",
  //   component: Register,
  //   name: "auth"
  // }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
