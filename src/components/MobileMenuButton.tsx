"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import MenuSvg from "../../public/assets/MenuSvg";
import { useNav } from "@/hooks/useNav";

interface Props {
  getNavList: () => {
    key: number;
    title: string;
    src: string;
    to: string;
  }[];
}

export default function MobileMenuButton({ getNavList }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonRefs, activeKey, handleClick } = useNav(getNavList());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, menuRef, buttonRef]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="relative group sm:hidden"
      >
        <MenuSvg className="fill-current text-[#80A1EA] group-hover:text-blue-500" />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-3 bg-white shadow-lg p-2 rounded-xl border border-gray-300 z-50"
        >
          {getNavList().map((item, index) => (
            <button
              key={item.key}
              className={`flex ${
                index !== getNavList().length - 1 ? "mb-4" : ""
              } hover:text-blue-500 group`}
              onClick={() => {
                handleClick(item.key, item.to);
                setIsMenuOpen((prev) => !prev);
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
