"use client";

import React, { useRef, useState } from "react";
import NavMenuList from "../NavMenuList";
import MainMenuList from "../MainMenuList";
import { MAIN_MENU_LIST, NAV_LIST } from "@/types/constants/contants";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleMobileClick = (to: string) => {
    setIsMenuOpen(false);
    window.location.href = to;
  };

  return (
    <div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <NavMenuList
          NAV_LIST={NAV_LIST}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          menuRef={menuRef}
          buttonRef={buttonRef}
          onMobileItemClick={handleMobileClick}
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
