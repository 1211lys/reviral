import { AxiosResponse } from "axios";
import { apiWithAuth } from "./base";

import { CampaignResponse } from "@/types/campaign";

export const getCampaignData = async (
  username?: number
): Promise<AxiosResponse<CampaignResponse>> => {
  const response = await apiWithAuth.get(`campaign/users/${username}`);
  return response;
};
