export interface CampaignResponse {
  status: 200;
  data: {
    myCampaigns: MyCampaignsData;
  };
  timestamp: string;
}

export interface MyCampaignsData {
  joinCount: number;
  progressCount: number;
  reviewCount: number;
  inspectCount: number;
  userInfo: UserInfo;
  myCampaigns: Campaign[];
}

export interface UserInfo {
  username: string;
  loginId: string;
  expectPoint: number;
  changeTotalPoint: number;
  userPoint: number;
}

export interface Campaign {
  campaignId: number;
  campaignStatus: CampaignStatus;
  registerDate: string;
  campaignImgUrl: string;
  campaignTitle: string;
}

export type CampaignStatus = "APPLY" | "PROGRESS" | "REVIEW" | "COMPLETE";
