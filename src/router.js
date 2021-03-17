import { createRouter, createWebHistory } from "vue-router";
import { Landing, Test } from "./components/index";

const routes = [
  {
    path: "/",
    component: Landing,
    name: "home",
  },
  {
      path: '/test',
      component: Test,
      name: 'test'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
