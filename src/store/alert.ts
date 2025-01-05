import type { Status } from "@/types";
import { defineStore } from "pinia";

export type AlertState = {
  message: string;
  type?: Status;
  visible?: boolean;
};
// Define the state
export const useAlert = defineStore("alert", {
  state: () =>
    ({
      message: "",
      type: "info",
      visible: false,
    } as AlertState),
  actions: {
    alertShow(param: AlertState) {
      this.message = param.message;
      this.type = param.type;
      this.visible = true;
    },
    alertHide() {
      this.type = "info";
      this.message = "";
      this.visible = false;
    },
  },
});
