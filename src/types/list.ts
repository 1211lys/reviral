export interface GetCampaignListRequest {
  category: string | null;
  platform: string | null;
  status: string | null;
  page: number;
  size: number;
}

export interface GetCampaignListData {
  campaignId: number;
  campaignTitle: string;
  campaignStatus: string;
  campaignPlatform: string;
  campaignImgUrl: string;
  period: number;
  campaignPrice: number;
  campaignPoint: number;
  totalCount: number;
  joinCount: number;
}

export interface GetCampaignListResponse {
  status?: number;
  code?: string;
  message?: string;
  error: unknown;
  data: {
    campaigns: GetCampaignListData[];
  };
}
