import { AxiosResponse } from "axios";

import api from "./base";
import { SignupResponse } from "@/types/signup/signup";

export const GetCampaignData = (): Promise<AxiosResponse<SignupResponse>> =>
  api.get(`campaign`);
