"use client";

import { create } from "zustand";
import Cookies from "js-cookie";
import { decodeJWT } from "@/utils/jwt";

interface AuthState {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  initializeAuth: () => void;
  setLogin: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

// JWT 디코딩 함수의 반환 타입을 정의

const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  userId: null,
  accessToken: null,
  refreshToken: null,

  initializeAuth: () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (accessToken === undefined) {
      return null;
    }
    const payload = decodeJWT(accessToken);

    set({
      isLogin: !!accessToken,
      userId: payload?.sub ?? null, // sub 값이 undefined이면 null로 처리
      accessToken: accessToken || null,
      refreshToken: refreshToken || null,
    });
  },

  setLogin: (accessToken, refreshToken) => {
    const payload = decodeJWT(accessToken);

    Cookies.set("accessToken", accessToken, { expires: 7 });
    Cookies.set("refreshToken", refreshToken, { expires: 7 });

    set({
      isLogin: true,
      userId: payload?.sub ?? null, // sub 값이 undefined이면 null로 처리
      accessToken,
      refreshToken,
    });
  },

  logout: () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    set({
      isLogin: false,
      userId: null,
      accessToken: null,
      refreshToken: null,
    });
  },
}));

export default useAuthStore;
