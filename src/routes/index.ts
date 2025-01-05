import { useAuth } from "@/store/auth";
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
    path: "/admin",
    alias: "/admin/dashboard",
    redirect: "/admin/dashboard",
    meta: { requiresAuth: true },
    component: () => import(/**  */ "@/modules/admin/Admin.vue"),
    children: [
      {
        path: "dashboard",
        component: () =>
          import(/**  */ "@/modules/admin/dashboard/Dashboard.vue"),
      },
      {
        path: "customer",
        component: () => import(/**  */ "@/modules/customer/Customer.vue"),
      },
    ],
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
  strict: true,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuth().isAuth;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      console.log("Not authenticated", from, to);
      next("/?redirect=" + encodeURIComponent(to.fullPath));
    } else {
      next();
    }
  } else {
    next();
  }
});
