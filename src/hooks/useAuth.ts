import { useState, useEffect } from "react";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  userId: string | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    userId: null, // userId 초기값 설정
  });

  const getCookie = (cookieName: string): string | null => {
    const cookies = document.cookie
      .split("; ")
      .reduce((acc: Record<string, string>, current) => {
        const [key, value] = current.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});

    return cookies[cookieName] || null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(
      value
    )};expires=${date.toUTCString()};path=/`;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  };

  const decodeJWT = (token: string): Record<string, any> | null => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    let userId = null;
    if (accessToken) {
      const decoded = decodeJWT(accessToken);
      userId = decoded?.sub || null;
    }

    setAuthState({
      accessToken,
      refreshToken,
      isAuthenticated: !!accessToken && !!refreshToken,
      userId, // userId 상태 설정
    });
  }, []);

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    setAuthState({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      userId: null, // 로그아웃 시 userId 초기화
    });
  };

  return { ...authState, logout, setCookie };
};

export default useAuth;
