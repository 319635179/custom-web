import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Control from "@/views/control/index.vue";
import Home from "@/views/home/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/control",
    component: Control,
    name: "control",
  },
  {
    path: "/",
    component: Home,
    name: "home",
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "./" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const handleChangeRouter = (name: string, params?: any) => {
  router.push({
    name,
    params,
  });
};

export default router;
