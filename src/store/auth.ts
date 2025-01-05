import { API } from "@/instance";
import type { Staff } from "@/types";
import { defineStore } from "pinia";
import { useAlert } from "./alert";

// Define the state
export type AuthState = {
  loading: boolean;
  token: string;
  staff: Staff | null;
  isAuth: boolean;
  redirectTo?: string;
  // Define other properties here
};

let timer: ReturnType<typeof setTimeout>;
// Define a new store
export const useAuth = defineStore("auth", {
  state: () =>
    ({
      token: "",
      staff: {},
      isAuth: false,
      loading: false,
      redirectTo: "/",
    } as AuthState),

  getters: {
    // Define the getters here
  },
  actions: {
    async checkAuth() {
      // Get the token
      const token = localStorage.getItem("token");
      // Get the expiration date
      const expiresAt = localStorage.getItem("expiresAt");
      // Check if the token is expired
      if (token && expiresAt) {
        const now = new Date();
        const expirationDate = new Date(expiresAt);
        if (now < expirationDate) {
          // Set the state
          this.isAuth = true;
          this.token = token;
          // Get the staff
          const staff = localStorage.getItem("staff");
          if (staff) {
            this.staff = JSON.parse(staff);
          }
          // Redirect
        }
      } else {
        this.logout();
      }
    },

    autoLogout(time: number) {
      timer = setTimeout(() => {
        this.logout();
      }, time);
    },

    async login(body: { username: string; password: string }) {
      try {
        this.loading = true;
        // Call the API
        const response = await API.post("/staff/login", body);
        const { accessToken, expiresIn, staff } = response.data;
        // Save the token
        localStorage.setItem("token", accessToken);
        // Save the expiration date
        const now = new Date();
        const expiresAt = new Date(now.getTime() + expiresIn * 1000);
        localStorage.setItem("expiresAt", expiresAt.toISOString());
        // Save the staff
        localStorage.setItem("staff", JSON.stringify(staff));
        // Set the state
        // Redirect
      } catch (error) {
        console.log(error);
        // Show an alert
        useAlert().alertShow({
          message: (error as Error).message,
        });
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      // Clear the local storage
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("staff");
      // Set the state
      this.isAuth = false;
      // Redirect

      // Clear the timer
      clearTimeout(timer);
    },

    async signup() {},
  },
});
