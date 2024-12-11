import { AxiosResponse } from "axios";
import api from "./base";
import { GetCampaignListRequest, GetCampaignListResponse } from "@/types/list";

export const GetCampaignList = (
  param: GetCampaignListRequest
): Promise<AxiosResponse<GetCampaignListResponse>> => {
  const queryParams = new URLSearchParams();

  if (param.category) queryParams.append("category", param.category);
  if (param.platform) queryParams.append("platform", param.platform);
  if (param.status) queryParams.append("status", param.status);
  queryParams.append("page", param.page.toString());
  queryParams.append("size", param.size.toString());

  return api.get(`campaign?${queryParams.toString()}`);
};
