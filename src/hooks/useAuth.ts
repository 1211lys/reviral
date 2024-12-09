import { useState, useEffect } from "react";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });

  // 쿠키에서 특정 쿠키 값을 읽는 함수
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

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    setAuthState({
      accessToken,
      refreshToken,
      isAuthenticated: !!accessToken && !!refreshToken,
    });
  }, []);

  // 로그아웃 함수
  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    setAuthState({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
  };

  return { ...authState, logout, setCookie };
};

export default useAuth;
