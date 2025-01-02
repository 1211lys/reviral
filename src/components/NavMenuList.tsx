"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MobileMenuButton from "./MobileMenuButton";
import { MenuItem } from "@/types/common";
import { useNav } from "@/hooks/useNav";

import { useEffect, useState } from "react";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  initialUserId?: string;
}

export default function NavMenuList({
  isMenuOpen,
  toggleMenu,
  menuRef,
  buttonRef,
  initialUserId,
}: Props): React.JSX.Element {
  const [userId, setUserId] = useState(initialUserId);
  const router = useRouter();

  const NAV_LIST: MenuItem[] = [
    { key: 1, title: "포인트", src: "/images/point.png", to: "/point" },
    {
      key: 2,
      title: "My 캠페인",
      src: "/images/campaign.png",
      to: userId ? `/campaign/${userId}` : "/login",
    },
    userId
      ? { key: 3, title: "로그아웃", src: "/images/login.png", to: "logout" }
      : { key: 4, title: "로그인", src: "/images/login.png", to: "/login" },
  ];

  const { activeKey, handleClick, buttonRefs } = useNav(NAV_LIST);

  useEffect(() => {
    setUserId(initialUserId);
  }, [initialUserId, userId, setUserId]);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setUserId(undefined);
  };

  return (
    <div className="w-full flex justify-between gap-4 p-4 sm:w-screen sm:max-w-[1440px]">
      {/* 로고 */}
      <button className="flex gap-4" onClick={() => router.push("/")}>
        <div className="w-[42px]">
          <Image src="/images/logo.png" width={42} height={42} alt={"logo"} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg text-blue-500 ">리바이럴</h1>
          <h2 className="text-sm">세상의 모든 리뷰</h2>
        </div>
      </button>
      <MobileMenuButton
        NAV_LIST={NAV_LIST}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuRef={menuRef}
        buttonRef={buttonRef}
        handleClick={handleClick}
        buttonRefs={buttonRefs}
        activeKey={activeKey}
      />
      <div className="hidden sm:flex sm:gap-8">
        {NAV_LIST.map((item, index) => (
          <button
            key={item.key}
            className={`group`}
            onClick={() => {
              if (item.to === "logout") {
                handleLogout();
              } else {
                router.push(item.to);
              }
            }}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                className={`transition-transform duration-700 ease-in-out transform group-hover:rotate-360`}
                src={`${item.src}`}
                width={24}
                height={24}
                alt={"logo"}
              />
              <div
                className={`font-semibold text-sm ${
                  item.key === activeKey ? " text-blue-500" : " text-black"
                }  hover:text-blue-500 `}
              >
                {item.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
