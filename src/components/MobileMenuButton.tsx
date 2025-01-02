"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { MenuItem } from "@/types/common";
import MenuSvg from "../../public/assets/MenuSvg";

interface Props {
  NAV_LIST: MenuItem[];
  isMenuOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleClick: (key: number, to: string) => void;
  buttonRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  activeKey: number | null;
}

export default function MobileMenuButton({
  NAV_LIST,
  isMenuOpen,
  toggleMenu,
  menuRef,
  buttonRef,
  buttonRefs,
  activeKey,
  handleClick,
}: Props) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        toggleMenu(); // 메뉴 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu, menuRef, buttonRef]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="relative group sm:hidden"
      >
        <MenuSvg className="fill-current text-[#80A1EA] group-hover:text-blue-500" />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-3 bg-white shadow-lg p-2 rounded-xl border border-gray-300 z-50"
        >
          {NAV_LIST.map((item, index) => (
            <button
              key={item.key}
              className={`flex ${
                index !== NAV_LIST.length - 1 ? "mb-4" : ""
              } hover:text-blue-500 group`}
              onClick={() => {
                handleClick(item.key, item.to);
                toggleMenu();
              }}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
            >
              <div className="flex items-center gap-4 p-2">
                <Image
                  className={`transition-transform duration-700 ease-in-out transform group-hover:rotate-360`}
                  src={`${item.src}`}
                  width={24}
                  height={24}
                  alt="logo"
                />

                <div
                  className={`${
                    item.src === "" ? "pl-[24px] ml-4" : ""
                  } font-semibold text-sm ${
                    item.key === activeKey ? " text-blue-500" : " text-black"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
