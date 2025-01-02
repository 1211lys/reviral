import { AxiosResponse } from "axios";
import api from "./base";
import { CampaignResponse } from "@/types/campaign";

export const getCampaignData = async (
  username?: number,
  accessToken?: string
): Promise<AxiosResponse<CampaignResponse>> => {
  const response = await api.get(`campaign/users/${username}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
