import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/auth/refresh"];

const TOKEN_LIFESPAN = {
  accessToken: 2 * 60 * 60, // 2시간
  refreshToken: 14 * 24 * 60 * 60, // 2주
};

// Helper 함수: 쿠키 설정
const setCookie = (
  response: NextResponse,
  name: string,
  value: string,
  maxAge: number
) => {
  response.cookies.set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge,
  });
};

// Helper 함수: accessToken 갱신
const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) throw new Error("Token refresh failed");

    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

// Helper 함수: 신규 토큰 발급
const getToken = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "testID" }),
      }
    );

    if (!response.ok) throw new Error("유효한 아이디가 아님");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching new token:", error);
    return null;
  }
};

export const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  if (publicPaths.some((publicPath) => path.includes(publicPath))) {
    return NextResponse.next();
  }

  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    const refreshToken = request.cookies.get("refreshToken")?.value;

    // accessToken이 없고 refreshToken이 있을 때
    if (!accessToken && refreshToken) {
      const newAccessToken = await refreshAccessToken(refreshToken);

      if (newAccessToken) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("Authorization", `Bearer ${newAccessToken}`);

        const response = NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });

        setCookie(
          response,
          "accessToken",
          newAccessToken,
          TOKEN_LIFESPAN.accessToken
        );

        return response;
      }
    }

    // 둘 다 없을 때 새 토큰 발급
    if (!refreshToken) {
      const tokens = await getToken();

      if (tokens) {
        const { accessToken: at, refreshToken: rt } = tokens;

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("Authorization", `Bearer ${at}`);

        const response = NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });

        setCookie(response, "accessToken", at, TOKEN_LIFESPAN.accessToken);
        setCookie(response, "refreshToken", rt, TOKEN_LIFESPAN.refreshToken);

        return response;
      }
    }

    // accessToken 유효할 때
    if (accessToken) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("Authorization", `Bearer ${accessToken}`);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
