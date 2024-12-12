import { AxiosResponse } from "axios";
import api from "./base";
import {
  GetCampaignListRequest,
  GetCampaignListResponse,
  GetDetailCampaignItemsResponse,
  PostCampaignEnrollRequest,
  PostCampaignEnrollResponse,
} from "@/types/list";

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

export const getDetailCampaignItems = async (
  id: number
): Promise<AxiosResponse<GetDetailCampaignItemsResponse>> => {
  const response = await api.get(`campaign/${id}`);
  return response;
};

export const PostCampaignEnrollData = (
  param: PostCampaignEnrollRequest,
  accessToken: string | null,
  refreshToken: string | null
): Promise<AxiosResponse<PostCampaignEnrollResponse>> => {
  return api.post(`campaign/enroll`, param, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Refresh-Token": refreshToken, // 올바르게 작성된 키
    },
  });
};
