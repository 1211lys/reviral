"use client";

import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;

  setLogin: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogin: typeof window !== "undefined" && !!Cookies.get("accessToken"),
  accessToken:
    typeof window !== "undefined" ? Cookies.get("accessToken") || null : null,
  refreshToken:
    typeof window !== "undefined" ? Cookies.get("refreshToken") || null : null,

  setLogin: (accessToken, refreshToken) => {
    Cookies.set("accessToken", accessToken, { expires: 7 });
    Cookies.set("refreshToken", refreshToken, { expires: 7 });

    set({
      isLogin: true,
      accessToken,
      refreshToken,
    });
  },

  logout: () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    set({
      isLogin: false,
      accessToken: null,
      refreshToken: null,
    });
  },
}));

export default useAuthStore;
