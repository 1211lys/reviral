"use client";

import React from "react";
import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";
import { MenuItem } from "@/types/common";
import { useRouter } from "next/navigation";
import { useNav } from "@/hooks/useNav";

interface Props {
  NAV_LIST: MenuItem[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export default function NavMenuList({
  NAV_LIST,
  isMenuOpen,
  toggleMenu,
  menuRef,
  buttonRef,
}: Props) {
  const router = useRouter();
  const { activeKey, handleClick, buttonRefs } = useNav(NAV_LIST);

  return (
    <div className="w-full flex justify-between gap-4 p-4 sm:w-screen sm:max-w-[1440px]">
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
            onClick={() => handleClick(item.key, item.to)}
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
                } ${
                  item.key === 0 ? "min-w-[20px]" : "min-w-[70px]"
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
