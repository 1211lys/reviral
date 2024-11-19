import React from "react";
import BestCampaignSvg from "../../../public/assets/BestCampaignSvg";

const BEST_LIST = [
  {
    key: 0,
    number: 1,
    title: "칠초 무릎담요 극세사 캠핑 비행기 블랭킷",
    company: "N",
  },
  {
    key: 1,
    number: 2,
    title:
      "칠초 무릎담요 극세사 캠핑 비행기 블랭킷,칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷",
    company: "C",
  },
  {
    key: 2,
    number: 3,
    title:
      "칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷",
    company: "C",
  },
  {
    key: 3,
    number: 4,
    title:
      "칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷",
    company: "C",
  },
  {
    key: 4,
    number: 5,
    title:
      "칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷칠초 무릎담요 극세사 캠핑 비행기 블랭킷",
    company: "C",
  },
];

export default function MainBestCampaign() {
  return (
    <div className="py-10 flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-2xl sm:text-3xl mb-10">베스트 켐페인</h1>
      {BEST_LIST.map((item) => (
        <button
          key={item.key}
          className="flex justify-between items-center w-full max-w-[1440px] px-4 sm:px-10 group mb-4 sm:mb-8"
        >
          <div className="max-w-[144px] min-w-[40px] font-bold text-2xl group-hover:text-blue-500">
            {item.number}
          </div>
          <div className="flex-grow flex items-center gap-1 overflow-hidden">
            {item.company === "N" ? (
              <div className="w-[20px] h-[20px] bg-green-400 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                N
              </div>
            ) : item.company === "C" ? (
              <div className="w-[20px] h-[20px] bg-red-500 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                C
              </div>
            ) : (
              <div className="w-[20px] h-[20px] bg-blue-400 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                E
              </div>
            )}
            <h1 className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left font-bold text-xl group-hover:text-blue-500">
              {item.title}
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
