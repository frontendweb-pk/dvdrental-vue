import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import(/**  */ "@/modules/auth/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import(/**  */ "@/modules/auth/login/Login.vue"),
      },
      {
        path: "signup",
        component: () => import(/**  */ "@/modules/auth/signup/Signup.vue"),
      },
    ],
  },
  {
    path: "/customer",
    component: () => import(/**  */ "@/modules/customer/Customer.vue"),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
  strict: true,
});
