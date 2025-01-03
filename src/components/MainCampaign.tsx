"use client";

import React from "react";
import ContentItems from "./common/ContentItems";
import { useRouter } from "next/navigation";

export default function MainCampaign() {
  const router = useRouter();

  return (
    <div className="py-10 flex flex-col items-center justify-center w-full ">
      <h1 className="font-bold text-2xl sm:text-3xl text-red-500 mb-5">
        마감 임박
        <span className="font-normal text-2xl text-black sm:text-3xl ">
          {" "}
          켐페인 놓치지 마세요!
        </span>
      </h1>
      <div className="w-full max-w-[1440px] flex justify-end">
        <button
          className="text-gray-500 hover:text-blue-400 mr-10 mb-10"
          onClick={() => router.push("/list?category=deadline")}
        >
          전체 보기 {">"}
        </button>
      </div>

      <ContentItems
        categoryProps={"deadline"}
        platformProps={null}
        statusProps={null}
        sizeProps={5}
      />
    </div>
  );
}
