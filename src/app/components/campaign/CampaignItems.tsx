import React from "react";
import UserPointInfo from "../common/UserPointInfo";

// 상태에 따른 설명 및 스타일 정의
const STATUS_MAP: Record<number, { label: string; color: string }> = {
  0: {
    label: "참여 진행",
    color: "text-yellow-500",
  },
  1: {
    label: "캠페인 진행",
    color: "text-green-500",
  },
  2: {
    label: "후기 작성",
    color: "text-orange-500",
  },
  3: {
    label: "캠페인 검수",
    color: "text-red-500",
  },
  4: {
    label: "캠페인 완료",
    color: "text-blue-500",
  },
};

const LIST = [
  {
    key: 0,
    status: 0,
    timeLine: "21.12.31 23:59 신청",
    title: "여주 호박 고구마 밤 고구마 꿀 고구마 베니하루카 3kg 5kg 10kg",
  },
  {
    key: 1,
    status: 1,
    timeLine: "21.12.31 23:59 신청",
    title: "여주 호박 고구마 밤 고구마 꿀 고구마 베니하루카 3kg 5kg 10kg",
  },
  {
    key: 2,
    status: 2,
    timeLine: "21.12.31 23:59 신청",
    title: "여주 호박 고구마 밤 고구마 꿀 고구마 베니하루카 3kg 5kg 10kg",
  },
  {
    key: 3,
    status: 3,
    timeLine: "21.12.31 23:59 신청",
    title: "여주 호박 고구마 밤 고구마 꿀 고구마 베니하루카 3kg 5kg 10kg",
  },
  {
    key: 4,
    status: 4,
    timeLine: "21.12.31 23:59 신청",
    title: "여주 호박 고구마 밤 고구마 꿀 고구마 베니하루카 3kg 5kg 10kg",
  },
];

export default function CampaignItems() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1440px]">
      <div className="flex flex-col items-center justify-center px-2 sm:px-4 w-full lg:w-[70%]  ">
        {LIST.map((item) => {
          const statusInfo = STATUS_MAP[item.status];

          return (
            <div
              key={item.key}
              className="border rounded-lg p-2 sm:p-4 shadow-sm hover:shadow-md transition duration-200 max-w-[1240px] mt-8 last-of-type:mb-8 bg-white w-full"
            >
              <div className="font-bold">
                캠페인{" "}
                <span className={`${statusInfo.color}`}>
                  {statusInfo.label}
                </span>
              </div>
              <div className="text-sm text-gray-400">{item.timeLine}</div>
              <div className="text-lg font-semibold mt-2 truncate mb-4 sm:mb-8">
                {item.title}
              </div>

              <div className="flex justify-center">
                {Object.entries(STATUS_MAP).map(([key, { label }]) => (
                  <div key={key} className="w-full flex min-w-[70px]">
                    <div className="flex flex-col items-center justify-center w-full gap-2">
                      {item.status === Number(key) ? (
                        <div className="border-4 w-3 h-3 sm:w-4 sm:h-4 border-blue-500 rounded-full" />
                      ) : item.status > Number(key) ? (
                        <div className="border-2 w-2 h-2 sm:w-3 sm:h-3 border-blue-500 rounded-full" />
                      ) : (
                        <div className="border-2 w-2 h-2 sm:w-3 sm:h-3 border-gray-400 rounded-full" />
                      )}
                      <div
                        className={`text-sm sm:text-base w-12 max-w-24 sm:p-2 sm:w-full text-center break-keep sm:break-normal font-bold ${
                          item.key === Number(key)
                            ? "bg-blue-500 text-white rounded-md"
                            : item.key > Number(key)
                            ? "text-blue-500"
                            : "text-gray-400"
                        }`}
                      >
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full lg:max-w-[30%] m-auto lg:m-0 mt-8 flex justify-center lg:items-start">
        <UserPointInfo />
      </div>
    </div>
  );
}
