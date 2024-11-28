export interface SignupResponse {
  status: number;
  code: string;
  message: string;

  data: {
    signUp: boolean;
    isDuplicated: boolean;
  };
  timestamp: string;
}

export interface SignupRequest {
  loginId: string;
  loginPw: string;
  username: string;
  gender: string;
  phoneNumber: string;
  address: string;
  nvId: string | null;
  cpId: string | null;
  isEvent: boolean;
}

export interface SigninRequest {
  loginId: string;
  password: string;
}

export interface SigninResponse {
  status: number;
  data: {
    jwt: {
      grantType: string;
      accessToken: string;
      refreshToken: string;
    };
  };
  timestamp: string;
}
