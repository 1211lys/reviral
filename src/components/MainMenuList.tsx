"use client";

import React from "react";
import { MenuItem } from "@/types/common";
import { useNav } from "@/hooks/useNav";

interface Props {
  MAIN_MENU_LIST: MenuItem[];
}

export default function MainMenuList({ MAIN_MENU_LIST }: Props) {
  const { activeKey, handleClick, buttonRefs } = useNav(MAIN_MENU_LIST);

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
