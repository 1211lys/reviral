import React from "react";
import ContentItems from "./common/ContentItems";

export default function MainCampaign() {
  return (
    <div className="py-10 flex flex-col items-center justify-center w-full ">
      <h1 className="font-bold text-3xl text-red-500 mb-5">
        마감 임박
        <span className="font-normal text-black text-3xl ">
          {" "}
          켐페인 놓치지 마세요!
        </span>
      </h1>
      <div className="w-full max-w-[1440px] flex justify-end">
        <button className="text-gray-500 hover:text-blue-400 mr-10 mb-10">
          전체 보기 {">"}
        </button>
      </div>
      <ContentItems />
    </div>
  );
}
