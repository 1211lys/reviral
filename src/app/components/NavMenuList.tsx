"use client";

import React from "react";
import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";
import { useRouter } from "next/navigation";
import { MenuItem } from "@/types/common";

interface Props {
  NAV_LIST: MenuItem[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onMobileItemClick: (to: string) => void;
}

export default function NavMenuList({
  NAV_LIST,
  isMenuOpen,
  toggleMenu,
  menuRef,
  buttonRef,
  onMobileItemClick,
}: Props) {
  const router = useRouter();

  const handleClick = (to: string) => {
    router.push(to);
  };

  return (
    <div className="w-full flex justify-between gap-4 p-4 sm:w-screen sm:max-w-[1440px]">
      <div className="flex gap-4">
        <button className="w-[42px]">
          <Image src="/images/logo.png" width={42} height={42} alt={"logo"} />
        </button>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg text-blue-500 ">리바이럴</h1>
          <h2 className="text-sm">세상의 모든 리뷰</h2>
        </div>
      </div>
      <MobileMenuButton
        NAV_LIST={NAV_LIST}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        menuRef={menuRef}
        buttonRef={buttonRef}
        onMobileItemClick={onMobileItemClick}
      />
      <div className="hidden sm:flex sm:gap-8">
        {NAV_LIST.map((item) => (
          <button
            key={item.key}
            className="hover:text-blue-500 group"
            onClick={() => handleClick(item.to)}
          >
            <div className="flex items-center gap-2">
              <Image
                className={`transition-transform duration-700 ease-in-out transform group-hover:rotate-360`}
                src={`${item.src}`}
                width={24}
                height={24}
                alt={"logo"}
              />
              <div className="font-semibold text-sm">{item.title}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
