// Decode JWT token to extract the payload
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decodeJWT = (token: string): Record<string, any> | undefined => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload); // 일반적인 객체 반환
  } catch {
    return undefined; // 에러 발생 시 undefined 반환
  }
};

// Decode JWT token to extract the username
export const decodeUsername = (token: string): string | undefined => {
  const payload = decodeJWT(token);
  return payload?.username; // payload에서 username을 안전하게 추출
};
