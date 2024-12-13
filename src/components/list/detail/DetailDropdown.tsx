"use client";

import useAuth from "@/hooks/useAuth";

import { CampaignDetail, PostCampaignEnrollRequest } from "@/types/list";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import DetailButtons from "./DetailButtons";

interface Props {
  data: CampaignDetail;
}

interface Options {
  optionTitle?: string;
  subOptionTitle?: string;
  subPrice?: string;
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
  const [filteredData, setFilteredData] = useState<Options>({
    optionTitle: "",
    subOptionTitle: "",
    subPrice: "",
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

      setFilteredData((prev) => ({
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

      setFilteredData((prev) => ({
        ...prev,
        subOptionTitle: `${subOption.campaignSubOptionTitle} (${priceDisplay})`,
        subPrice: priceDisplay,
      }));
    }
  };

  // title 값이 변경될 때 isSelected 상태를 false로 업데이트
  useEffect(() => {
    if (filteredData.optionTitle || filteredData.subOptionTitle) {
      setIsSelected({
        campaign: false,
        subCampaign: false,
      });
    }
  }, [filteredData]);
  const returnPoint =
    Number(data.campaignPoint) +
    Number(data.campaignPrice) +
    Number(filteredData.subPrice);

  return (
    <div className="flex flex-col gap-6 w-full mb-10">
      {/* 캠페인 선택 버튼 */}
      <button
        className="px-8 py-2 border border-gray-400 w-full text-left flex justify-between relative "
        onClick={() => handleSelected("campaign")}
      >
        {filteredData.optionTitle === "" ? (
          <p>캠페인 선택</p>
        ) : (
          <p>{filteredData.optionTitle}</p>
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
          disabled={filteredData.optionTitle !== "" ? false : true}
          onClick={() => handleSelected("subCampaign")}
        >
          {filteredData.subOptionTitle === "" ? (
            <p>캠페인 추가 선택</p>
          ) : (
            <p>{`${filteredData.subOptionTitle}`}</p>
          )}
          <Image
            width={24}
            height={24}
            src="/images/arrow.png"
            alt="arrowImg"
          />
          {isSelected.subCampaign && (
            <div className="absolute top-full bg-white w-[calc(100%+2px)] -left-[1px] border border-gray-400 ">
              {data.options.map((item) =>
                item.subOptions.map((subItem) =>
                  subItem.campaignSubOptionsId !== null ? (
                    <div
                      key={subItem.campaignSubOptionsId}
                      className="px-8 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      <p
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
                    </div>
                  ) : null
                )
              )}
            </div>
          )}
        </button>
      )}
      <div className="flex items-center justify-end gap-2 text-gray-600">
        <span className="border-r pr-2">예상 적립 포인트</span>
        {filteredData.optionTitle === "" ? (
          <span className="text-2xl text-orange-400 font-bold ">0P</span>
        ) : (
          <span className="text-2xl text-orange-400 font-bold ">
            {Number(returnPoint).toLocaleString()}P
          </span>
        )}
      </div>
      <DetailButtons
        campaignUrl={data.campaignUrl}
        userId={userId}
        enrollData={enrollData}
        campaignId={data.campaignId}
      />
    </div>
  );
}
