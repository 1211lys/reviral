import React from "react";
import ContentItems from "./common/ContentItems";

interface List {
  key: number;
  src: string;
  title: string;
  itemsPrice: number;
  point: number;
  maxCount: number;
  userCount: number;
  date: string;
  company: string;
}

interface Props {
  Data: List[];
}

export default function MainTotalList({ Data }: Props) {
  return (
    <div className="py-20 flex flex-col items-center justify-center w-full bg-bgBLue border-b-2 border-gray-200">
      <h1 className="font-bold text-2xl sm:text-3xl text-blue-500 mb-10">
        <span className="font-normal text-black  ">이런 </span>
        켐페인
        <span className="font-normal text-black "> 찾으셨나요 ?</span>
      </h1>
      <ContentItems Data={Data} />
    </div>
  );
}
