"use client";

import React, { useEffect, useState } from "react";
import BestCampaignSvg from "../../public/assets/BestCampaignSvg";
import { GetCampaignList } from "@/service/list";
import { GetCampaignListResponse } from "@/types/list";
import { useRouter } from "next/navigation";

export default function MainBestCampaign() {
  const router = useRouter();
  const [bestData, setBestData] = useState<GetCampaignListResponse>();

  useEffect(() => {
    GetCampaignList({
      category: "best",
      platform: null,
      status: null,
      page: 0,
      size: 5,
    })
      .then(({ data }) => {
        setBestData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(bestData);

  return (
    <div className="py-10 flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-2xl sm:text-3xl mb-10">베스트 켐페인</h1>
      {bestData?.data.campaigns.map((item, index) => (
        <button
          key={item.campaignId}
          onClick={() => router.push(`/list/detail/${item.campaignId}`)}
          className="flex justify-between items-center w-full max-w-[1440px] px-4 sm:px-10 group mb-4 sm:mb-8"
        >
          <div className="max-w-[144px] min-w-[40px] font-bold text-2xl group-hover:text-blue-500">
            {index + 1}
          </div>
          <div className="flex-grow flex items-center gap-1 overflow-hidden">
            {item.campaignPlatform === "NAVER" ? (
              <div className="w-[20px] h-[20px] bg-green-400 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                N
              </div>
            ) : item.campaignPlatform === "COUPANG" ? (
              <div className="w-[20px] h-[20px] bg-red-500 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                C
              </div>
            ) : (
              <div className="w-[20px] h-[20px] bg-blue-400 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                E
              </div>
            )}
            <h1 className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left font-bold text-xl group-hover:text-blue-500">
              {item.campaignTitle}
            </h1>
          </div>
          <div className="max-w-[144px] min-w-[40px] flex-shrink-0 text-right flex items-center justify-center">
            <BestCampaignSvg className="fill-current text-[#000] group-hover:text-blue-500 " />
          </div>
        </button>
      ))}
    </div>
  );
}
