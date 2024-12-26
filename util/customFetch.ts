import axios from "axios";
import Cookies from "js-cookie";
import { performLogout, useLogout } from "./Auth";
import toast from "react-hot-toast";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const customFetch = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

customFetch.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const tokenString = Cookies.get("token");
      if (tokenString) {
        try {
          const token = JSON.parse(tokenString);
          if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
          }
        } catch (e) {
          // console.error("Error parsing token from sessionStorage", e);
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customFetch.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      error.response.data.message === "Token is revoked" 
    ) {
      Cookies.remove("token");
      performLogout();
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);
