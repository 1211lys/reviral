"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface ListItem {
  key: number;
  title: string;
  src: string;
}

interface Props {
  LIST: ListItem[];
}

export default function MobileMenuButton({ LIST }: Props) {
  const [isCheck, setIsCheck] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      <button ref={buttonRef} onClick={toggleMenu} className="relative">
        <Image
          className="text-red-500 sm:hidden"
          src="/Path.svg"
          alt="mb-menu-button"
          width={24}
          height={24}
          priority
        />
      </button>

      {isCheck && (
        <div
          ref={menuRef}
          className="absolute top-20 right-0 bg-white shadow-lg p-2"
        >
          {LIST.map((item) => (
            <div
              key={item.key}
              className="p-2 hover:bg-gray-200 cursor-pointer text-black"
              onClick={() => console.log(`${item} clicked`)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
