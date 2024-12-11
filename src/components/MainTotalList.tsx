import React from "react";
import ContentItems from "./common/ContentItems";

export default function MainTotalList() {
  return (
    <div className="py-20 flex flex-col items-center justify-center w-full bg-bgBLue">
      <h1 className="font-bold text-2xl sm:text-3xl text-blue-500 mb-10">
        <span className="font-normal text-black  ">이런 </span>
        켐페인
        <span className="font-normal text-black "> 찾으셨나요 ?</span>
      </h1>
      <ContentItems />
    </div>
  );
}
