import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full border-t-2 border-gray-200">
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 sm:justify-around p-10 max-w-[1440px]">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" width={42} height={42} alt="logo" />
          <div>
            <h1 className="font-bold text-lg text-blue-500 ">리바이럴</h1>
            <h2 className="text-sm">세상의 모든 리뷰</h2>
          </div>
        </div>
        <div className="text-sm">
          <p>리바이럴 대표 전충우, 서울특별시 중랑구 공릉로12가길 15</p>
          <p>사업등록번호 : 450-27-01900</p>
        </div>
      </div>
    </div>
  );
}
