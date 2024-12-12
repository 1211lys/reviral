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

// src/types/list.ts

export interface GetDetailCampaignItemsResponse {
  status: number;
  data: {
    campaign: Array<{
      campaignDetailsId: number;
      campaignTitle: string;
      campaignCategory: string;
      campaignUrl: string;
      campaignImgUrl: string;
      campaignPrice: number;
      campaignPoint: number;
      sellerRequest: string;
      totalCount: number;
      joinCount: number;
      options: Array<{
        campaignOptionsId: number;
        optionTitle: string;
        subOptions: Array<{
          campaignSubOptionsId: number | null;
          campaignAddPrice: number | null;
          campaignSubOptionTitle: string | null;
        }>;
      }>;
    }>;
  };
  timestamp: string;
}
