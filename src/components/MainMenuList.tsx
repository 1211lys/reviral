"use client";

import { useNav } from "@/hooks/useNav";
import { MenuItem } from "@/types/common";
import React from "react";

export const MAIN_MENU_LIST: MenuItem[] = [
  { key: 0, title: "홈", to: "/" },
  { key: 1, title: "오늘 오픈", to: "/list?category=today" },
  { key: 2, title: "마감 임박", to: "/list?category=deadline" },
  { key: 3, title: "당일 구매", to: "/list?category=daily" },
  { key: 4, title: "시간 구매", to: "/list?category=time" },
];

export default function MainMenuList() {
  const { buttonRefs, activeKey, handleClick } = useNav(MAIN_MENU_LIST);
  return (
    <div className="overflow-x-auto flex gap-4 sm:justify-start px-4 py-2 touch-action-pan-x scrollbar-none">
      {MAIN_MENU_LIST.map((item, index) => (
        <button
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          className={`${
            item.key === activeKey
              ? "border-b-2 border-b-blue-500 text-blue-500"
              : "border-b-2 border-b-white text-black"
          } ${
            item.key === 0 ? "min-w-[20px]" : "min-w-[70px]"
          } mx-5 pb-2 hover:border-b-2 hover:border-b-blue-500 hover:text-blue-500 focus:outline-none`}
          key={item.key}
          onClick={() => handleClick(item.key, item.to)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
