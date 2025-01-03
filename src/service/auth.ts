import { AxiosResponse } from "axios";
import { apiWithoutAuth } from "./base";
import {
  ResetTokenRequest,
  ResetTokenResponse,
  SigninRequest,
  SigninResponse,
  SignupRequest,
  SignupResponse,
} from "@/types/signup";

// 토큰이 필요한 요청
export const resetTokenData = (
  param: ResetTokenRequest
): Promise<AxiosResponse<ResetTokenResponse>> =>
  apiWithoutAuth.post(`/users/reload`, param);

// 회원가입 요청 (토큰 필요 없음)
export const PostSignupData = (
  param: SignupRequest
): Promise<AxiosResponse<SignupResponse>> =>
  apiWithoutAuth.post(`/users/sign-up`, param);

// 아이디 중복 체크 (토큰 필요 없음)
export const GetAccountCheck = (param: {
  loginId: string;
}): Promise<AxiosResponse<SignupResponse>> =>
  apiWithoutAuth.get(`/users/id-check`, {
    params: {
      loginId: param.loginId,
    },
  });

// 로그인 요청 (토큰 필요 없음)
export const PostSigninData = (
  param: SigninRequest
): Promise<AxiosResponse<SigninResponse>> =>
  apiWithoutAuth.post(`/users/sign-in`, param);
