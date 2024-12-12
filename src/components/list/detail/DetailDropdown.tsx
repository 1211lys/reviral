"use client";

import useAuth from "@/hooks/useAuth";

import { CampaignDetail, PostCampaignEnrollRequest } from "@/types/list";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DetailButtons from "./DetailButtons";

interface Props {
  data: CampaignDetail;
}

interface Title {
  optionTitle?: string;
  subOptionTitle?: string;
}

export default function DetailDropdown({ data }: Props) {
  const [isSelected, setIsSelected] = useState({
    campaign: false,
    subCampaign: false,
  });
  const [enrollData, setEnrollData] = useState<PostCampaignEnrollRequest>({
    campaignOptionId: null,
    campaignSubOptionId: null,
  });
  const [title, setTitle] = useState<Title>({
    optionTitle: "",
    subOptionTitle: "",
  });

  const { userId } = useAuth();
  console.log("User ID:", userId);

  const hasValidSubOptions = data.options.some((item) =>
    item.subOptions.some((subItem) => subItem.campaignSubOptionsId !== null)
  );

  // 캠페인 선택 또는 서브 캠페인 선택 상태 업데이트
  const handleSelected = (
    key: "campaign" | "subCampaign",
    option?: any,
    subOption?: any
  ) => {
    setIsSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    // 선택한 캠페인 옵션 및 서브 옵션 제목 업데이트
    if (key === "campaign" && option) {
      setEnrollData((prev) => ({
        ...prev,
        campaignOptionId: option.campaignOptionsId,
      }));

      setTitle((prev) => ({
        ...prev,
        optionTitle: option.optionTitle,
      }));
    }

    if (key === "subCampaign" && subOption) {
      setEnrollData((prev) => ({
        ...prev,
        campaignSubOptionId: subOption.campaignSubOptionsId,
      }));
      const priceDisplay =
        subOption.campaignAddPrice > 0
          ? `+${subOption.campaignAddPrice}`
          : `${subOption.campaignAddPrice}`;

      setTitle((prev) => ({
        ...prev,
        subOptionTitle: `${subOption.campaignSubOptionTitle} ${priceDisplay}`,
      }));
    }
  };

  // title 값이 변경될 때 isSelected 상태를 false로 업데이트
  useEffect(() => {
    if (title.optionTitle || title.subOptionTitle) {
      setIsSelected({
        campaign: false,
        subCampaign: false,
      });
    }
  }, [title]);

  return (
    <div className="flex flex-col gap-6 w-full mb-10">
      {/* 캠페인 선택 버튼 */}
      <button
        className="px-8 py-2 border border-gray-400 w-full text-left flex justify-between relative "
        onClick={() => handleSelected("campaign")}
      >
        {title.optionTitle === "" ? (
          <p>캠페인 선택</p>
        ) : (
          <p>{title.optionTitle}</p>
        )}
        <Image width={24} height={24} src="/images/arrow.png" alt="arrowImg" />
        {isSelected.campaign && (
          <div className="absolute top-full w-[calc(100%+2px)] -left-[1px] border border-gray-400 z-20 bg-white">
            {data.options.map((item) => (
              <div
                key={item.campaignOptionsId}
                className="px-8 py-2 hover:bg-blue-500 hover:text-white"
                onClick={() => handleSelected("campaign", item)}
              >
                <p>{item.optionTitle}</p>
              </div>
            ))}
          </div>
        )}
      </button>

      {/* 캠페인 추가 선택 버튼 */}
      {hasValidSubOptions && (
        <button
          className={`px-8 py-2 border border-gray-400 w-full text-left flex justify-between relative disabled:text-gray-400 disabled:border-gray-400`}
          disabled={title.optionTitle !== "" ? false : true}
          onClick={() => handleSelected("subCampaign")}
        >
          {title.subOptionTitle === "" ? (
            <p>캠페인 추가 선택</p>
          ) : (
            <p>{title.subOptionTitle}</p>
          )}
          <Image
            width={24}
            height={24}
            src="/images/arrow.png"
            alt="arrowImg"
          />
          {isSelected.subCampaign && (
            <div className="absolute top-full bg-white w-[calc(100%+2px)] -left-[1px] px-8 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white">
              {data.options.map((item) =>
                item.subOptions.map((subItem) =>
                  subItem.campaignSubOptionsId !== null ? (
                    <p
                      key={subItem.campaignSubOptionsId}
                      onClick={() =>
                        handleSelected("subCampaign", null, subItem)
                      }
                    >
                      {subItem.campaignSubOptionTitle} (
                      {subItem.campaignAddPrice !== null
                        ? subItem.campaignAddPrice > 0
                          ? `+${subItem.campaignAddPrice}`
                          : subItem.campaignAddPrice
                        : "가격 정보 없음"}
                      원)
                    </p>
                  ) : null
                )
              )}
            </div>
          )}
        </button>
      )}
      <DetailButtons
        campaignUrl={data.campaignUrl}
        userId={userId}
        enrollData={enrollData}
        campaignId={data.campaignId}
      />
    </div>
  );
}
