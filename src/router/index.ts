import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "@/views/home/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: Home,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "./home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
