import { AxiosResponse } from "axios";

import api from "./base";
import {
  ResetTokenRequest,
  ResetTokenResponse,
  SigninRequest,
  SigninResponse,
  SignupRequest,
  SignupResponse,
} from "@/types/signup";

export const resetTokenData = (
  param: ResetTokenRequest
): Promise<AxiosResponse<ResetTokenResponse>> =>
  api.post(`users/reload`, param);

export const PostSignupData = (
  param: SignupRequest
): Promise<AxiosResponse<SignupResponse>> => api.post(`users/sign-up`, param);

export const GetAccountCheck = (param: {
  loginId: string;
}): Promise<AxiosResponse<SignupResponse>> =>
  api.get(`users/id-check`, {
    params: {
      loginId: param.loginId,
    },
  });

export const PostSigninData = (
  param: SigninRequest
): Promise<AxiosResponse<SigninResponse>> => api.post(`users/sign-in`, param);
