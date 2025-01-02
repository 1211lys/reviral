"use client";

import React, { useRef, useState } from "react";
import NavMenuList from "../NavMenuList";
import MainMenuList from "../MainMenuList";
import { MAIN_MENU_LIST } from "@/types/contants";

interface Props {
  userId?: string;
}

export default function Nav({ userId }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  console.log("nav", userId);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="w-full border-b-2 border-gray-200">
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <NavMenuList
          initialUserId={userId}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          menuRef={menuRef}
          buttonRef={buttonRef}
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
