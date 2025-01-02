import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userId = request.cookies.get("userId")?.value;

  // userId가 없으면 로그인 페이지로 리다이렉트
  if (!userId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 요청을 그대로 진행
  return NextResponse.next();
}

// middleware가 적용될 경로 설정 (캠페인 관련 경로만 적용)
export const config = {
  matcher: ["/campaign/:path*"],
};
