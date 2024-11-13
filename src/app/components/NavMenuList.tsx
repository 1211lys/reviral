import React from "react";
import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";

const LIST = [
  { key: 0, title: "포인트", src: "/images/point.png" },
  { key: 1, title: "My 캠페인", src: "/images/campaign.png" },
  { key: 2, title: "로그인", src: "" },
];

export default function NavMenuList() {
  return (
    <div className="w-full flex justify-between gap-4 p-4 sm:w-screen sm:max-w-[1440px]">
      <div className="flex gap-4">
        <button className="w-[42px]">
          <Image src="/images/logo.png" width={42} height={42} alt={"logo"} />
        </button>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg text-red-500 ">리바이럴</h1>
          <h2 className="text-sm">세상의 모든 리뷰</h2>
        </div>
      </div>
      <MobileMenuButton LIST={LIST} />
      <div className="hidden sm:flex sm:gap-8">
        {LIST.map((item) => (
          <button key={item.key}>
            <div className="flex items-center gap-2">
              {item.src === "" ? (
                <></>
              ) : (
                <Image
                  src={`${item.src}`}
                  width={24}
                  height={24}
                  alt={"logo"}
                />
              )}
              <div className="font-semibold text-sm">{item.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
