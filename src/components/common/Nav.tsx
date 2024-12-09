"use client";

import React, { useRef, useState } from "react";
import NavMenuList from "../NavMenuList";
import MainMenuList from "../MainMenuList";
import { MAIN_MENU_LIST } from "@/types/constants/contants";
import useAuth from "@/hooks/useAuth";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const NAV_LIST = [
    { key: 0, title: "포인트", src: "/images/point.png", to: "/point" },
    {
      key: 1,
      title: "My 캠페인",
      src: "/images/campaign.png",
      to: "/campaign",
    },
    isAuthenticated
      ? { key: 2, title: "로그아웃", src: "/images/login.png", to: "/" }
      : { key: 3, title: "로그인", src: "/images/login.png", to: "/login" },
  ];

  const handleNavMenuStatus = (key: number, to: string) => {
    if (key === 2 && isAuthenticated) {
      logout();
      window.location.href = to;
    } else if (to) {
      window.location.href = to;
    }
  };

  return (
    <div className="w-full border-b-2 border-gray-200">
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <NavMenuList
          NAV_LIST={NAV_LIST}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          menuRef={menuRef}
          buttonRef={buttonRef}
          handleNavMenuStatus={handleNavMenuStatus}
        />
      </div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <div className="flex items-start w-full max-w-[1440px]">
          <MainMenuList MAIN_MENU_LIST={MAIN_MENU_LIST} />
        </div>
      </div>
    </div>
  );
}
