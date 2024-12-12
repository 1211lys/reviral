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

export interface CampaignSubOption {
  campaignSubOptionsId: number | null;
  campaignAddPrice: number | null;
  campaignSubOptionTitle: string | null;
}

export interface CampaignOption {
  campaignOptionsId: number;
  optionTitle: string;
  subOptions: CampaignSubOption[];
}

export interface CampaignDetail {
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
  options: CampaignOption[];
}

export interface GetDetailCampaignItemsData {
  campaign: CampaignDetail;
}

export interface GetDetailCampaignItemsResponse {
  status: number;
  data: GetDetailCampaignItemsData;
  timestamp: string;
}
