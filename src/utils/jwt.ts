interface JWTDecodedPayload {
  sub?: string; // sub는 string 또는 undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // 다른 프로퍼티들도 있을 수 있음
}

export const decodeJWT = (token: string | null): JWTDecodedPayload | null => {
  try {
    if (!token) return null; // token이 없으면 null 반환
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
    return null; // 에러 발생 시 null 반환
  }
};
