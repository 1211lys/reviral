import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 토큰이 필요한 요청용 Axios 인스턴스
export const apiWithAuth = axios.create({
  baseURL: API_BASE_URL,
});

// 토큰이 필요 없는 요청용 Axios 인스턴스
export const apiWithoutAuth = axios.create({
  baseURL: API_BASE_URL,
});

// `apiWithAuth` 요청 시 토큰 추가
apiWithAuth.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// `apiWithAuth` 401 에러 처리
apiWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          return Promise.reject(error);
        }

        // 새 토큰 갱신 요청
        const response = await apiWithoutAuth.post("/users/reload", {
          refreshToken,
        });

        const newAccessToken = response.data.data.accessToken;
        Cookies.set("accessToken", newAccessToken, { secure: true });

        // 새 토큰으로 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiWithAuth(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
