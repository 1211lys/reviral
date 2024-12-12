import Image from "next/image";
import React from "react";

export default function DetailDropdown() {
  return (
    <div className="flex flex-col gap-6 w-full mb-10">
      <button className="px-8 py-2 border border-gray-400 w-full text-left flex justify-between">
        <p>캠페인 선택</p>
        <Image width={24} height={24} src="/images/arrow.png" alt="arrowImg" />
      </button>
      <button className="px-8 py-2 border border-gray-400 w-full text-left flex justify-between">
        <p>캠페인 추가 선택</p>
        <Image width={24} height={24} src="/images/arrow.png" alt="arrowImg" />
      </button>
    </div>
  );
}
