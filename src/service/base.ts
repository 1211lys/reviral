import axios from "axios";
import Cookies from "js-cookie";
import { resetTokenData } from "./auth";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const urlsNotRequiringToken = [
      "/login",
      "/signup",
      "/list",
      "/list/detail/",
    ];

    const currentUrl = config.url || "";

    if (urlsNotRequiringToken.some((url) => currentUrl.startsWith(url))) {
      delete config.headers.Authorization;
    } else {
      // 쿠키에서 토큰 가져오기
      const token = Cookies.get("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러 처리
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const accessToken = Cookies.get("accessToken");
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken || !accessToken) {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");

          return;
        }

        // resetTokenData로 토큰 갱신 요청
        const response = await resetTokenData({
          accessToken,
          refreshToken,
        });

        const newAccessToken = response.data.data.accessToken;
        const newRefreshToken = response.data.data.refreshToken;

        // 새 토큰 저장
        Cookies.set("accessToken", newAccessToken, { secure: true });
        Cookies.set("refreshToken", newRefreshToken, { secure: true });

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        // 갱신 실패 시 처리 (예: 로그아웃)
        console.error("Token refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
