import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Hello from "../views/Hello.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}