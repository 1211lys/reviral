"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import MenuSvg from "../../../public/assets/MenuSvg";
import { useRouter } from "next/navigation";

interface ListItem {
  key: number;
  title: string;
  src: string;
  to: string;
}

interface Props {
  LIST: ListItem[];
}

export default function MobileMenuButton({ LIST }: Props) {
  const [isCheck, setIsCheck] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleClick = (to: string) => {
    router.push(to);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCheck(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsCheck((prev) => !prev);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="relative group sm:hidden"
      >
        <MenuSvg className="fill-current text-[#80A1EA] group-hover:text-blue-500" />
      </button>

      {isCheck && (
        <div
          ref={menuRef}
          className="absolute top-20 right-3 bg-white shadow-lg p-2 rounded-xl border border-gray-300 z-50"
        >
          {LIST.map((item, index) => (
            <button
              key={item.key}
              className={`flex ${
                index !== LIST.length - 1 ? "mb-4" : ""
              } hover:text-blue-500`}
              onClick={() => handleClick(item.to)}
            >
              <div className="flex items-center gap-4 p-2">
                {item.src === "" ? null : (
                  <Image
                    src={`${item.src}`}
                    width={24}
                    height={24}
                    alt="logo"
                  />
                )}
                <div
                  className={`${
                    item.src === "" ? "pl-[24px] ml-4" : ""
                  } font-semibold text-sm`}
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
