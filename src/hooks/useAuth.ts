import { PostSigninData } from "@/service/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// JWT 디코딩 함수
const decodeJWT = (token: string): { sub: string } | null => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

const useAuth = () => {
  const router = useRouter();

  // 로그인 상태 및 에러 관리
  const [isError, setIsError] = useState(false);
  const [loginData, setLoginData] = useState({ loginId: "", password: "" });

  // JWT 토큰 및 유저 ID 상태
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // 쿠키에서 토큰 가져오기
  useEffect(() => {
    const access = Cookies.get("accessToken") || null;
    const refresh = Cookies.get("refreshToken") || null;

    setAccessToken(access);
    setRefreshToken(refresh);
    setUserId(access ? decodeJWT(access)?.sub || null : null);
  }, []);

  // 로그인 함수
  const login = async () => {
    try {
      const { data } = await PostSigninData(loginData);
      const { accessToken, refreshToken } = data.data.jwt;

      // 쿠키에 토큰 저장
      Cookies.set("accessToken", accessToken, { expires: 7 });
      Cookies.set("refreshToken", refreshToken, { expires: 7 });

      // 상태 갱신
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUserId(decodeJWT(accessToken)?.sub || null);

      // 페이지 이동
      router.replace("/");
    } catch {
      setIsError(true);
    }
  };

  // 로그아웃 함수
  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    // 상태 초기화
    setAccessToken(null);
    setRefreshToken(null);
    setUserId(null);

    // 페이지 이동
    router.push("/");
  };

  // 로그인 입력 핸들러
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  return {
    accessToken,
    refreshToken,
    userId,
    isError,
    login,
    logout,
    handleLoginInputChange,
  };
};

export default useAuth;
