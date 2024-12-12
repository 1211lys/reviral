import axios from "axios";
import Cookies from "js-cookie";

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
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
