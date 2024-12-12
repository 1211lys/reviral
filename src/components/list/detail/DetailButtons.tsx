"use client";

import ToastMessage from "@/components/common/ToastMessage";
import useAuth from "@/hooks/useAuth";

import { PostCampaignEnrollData } from "@/service/list";
import { PostCampaignEnrollRequest } from "@/types/list";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

interface Props {
  campaignUrl: string;
  userId: string | null;
  enrollData: PostCampaignEnrollRequest;
  campaignId: number;
}

export default function DetailButtons({
  campaignUrl,
  userId,
  enrollData,
  campaignId,
}: Props) {
  const { accessToken, refreshToken } = useAuth();
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(campaignUrl)
      .then(() => {
        toast.success("링크가 복사되었습니다!");
      })
      .catch(() => {
        toast.error("링크 복사에 실패했습니다.");
      });
  };

  const handleCampaignEnroll = () => {
    const campaignOptionId = enrollData.campaignOptionId;
    const campaignSubOptionId = enrollData.campaignSubOptionId;

    PostCampaignEnrollData(
      {
        userId: Number(userId),
        campaignId,
        campaignOptionId,
        campaignSubOptionId,
      },
      accessToken,
      refreshToken
    )
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <ToastMessage />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white font-semibold border border-blue-500 w-full p-4 flex justify-center items-center gap-4 rounded-lg"
          onClick={handleCampaignEnroll}
        >
          <p className="font-semibold text-xl">참여 신청</p>
          <Image
            width={24}
            height={24}
            src="/images/application.png"
            alt="arrowImg"
          />
        </button>

        <button
          onClick={handleCopyLink}
          className="border border-blue-500 font-semibold w-full p-4 flex justify-center items-center gap-4 rounded-lg"
        >
          <Image width={24} height={24} src="/images/copy.png" alt="copyImg" />
          <p className="font-semibold text-xl">링크 복사</p>
        </button>
      </div>
    </div>
  );
}
