"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Cookies from "js-cookie";

// export const logout = () => {
//   const router = useRouter();
//   if (typeof window !== "undefined") {
//     Cookies.remove("token");
//     localStorage.removeItem("token")
//   }
// };

export const performLogout = () => {
  if (typeof window !== "undefined") {
    Cookies.remove("token");
    localStorage.removeItem("token");
    localStorage.removeItem("createAdStep");
    window.location.href = "/auth/login";
  }
};

export const useLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      Cookies.remove("token");
      localStorage.removeItem("token");
      localStorage.removeItem("createAdStep");

      // Redirect to login page after logout
      router.push("/auth/login");
    }
  }, [router]);

  return logout;
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("token");
  }
  return null;
};

const isAuthenticated = () => {
  const token = getToken();
  if (token) {
    return true;
  }
};

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      performLogout();
      router.push("/auth/login");
    }
  }, [router]);

  return isAuthenticated();
};
