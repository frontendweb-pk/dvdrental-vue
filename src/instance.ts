import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  delete API.defaults.headers.common["Authorization"];
};

export const getAuthToken = () => {
  return API.defaults.headers.common["Authorization"];
};
