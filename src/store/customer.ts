import { defineStore } from "pinia";
import type { Customer } from "@/types";
import { API } from "@/instance";

// END POINT URL
const API_END_POINT = "/customer";

export interface CustomerState {
  loading: boolean;
  customers: Customer[];
}

// define a store
export const useCustomer = defineStore("customer", {
  state: () =>
    ({
      loading: false,
      customers: [],
    } as CustomerState),
  getters: {},
  actions: {
    async fetchCustomers() {
      this.loading = true;
      const response = await API(API_END_POINT);
      console.log(response);
      this.customers = response.data;
      this.loading = false;
    },
    async addCustomer(customer: Customer) {
      this.loading = true;
      const response = await fetch(API_END_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      this.customers = await response.json();
      this.loading = false;
    },
    async updateCustomer(customer: Customer) {
      this.loading = true;
      const response = await fetch(`${API_END_POINT}/${customer.customer_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      });
      this.customers = await response.json();
      this.loading = false;
    },
    async deleteCustomer(customer: Customer) {
      this.loading = true;
      const response = await fetch(`${API_END_POINT}/${customer.customer_id}`, {
        method: "DELETE",
      });
      this.customers = await response.json();
      this.loading = false;
    },
  },
});
