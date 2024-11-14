"use client";

import React, { useState } from "react";

const LIST = [
  { key: 0, title: "홈" },
  { key: 1, title: "오늘 오픈" },
  { key: 2, title: "마감 임박" },
  { key: 3, title: "당일 구매" },
  { key: 4, title: "시간 구매" },
];

export default function MainMenuList() {
  const [activeKey, setActiveKey] = useState(0);

  const handleClick = (key: number) => {
    setActiveKey(key);
  };

  return (
    <div className="overflow-x-auto flex gap-4 sm:justify-start px-4 py-2 touch-action-pan-x scrollbar-none ">
      {LIST.map((item) => (
        <button
          className={`${
            item.key === activeKey
              ? "border-b-2 border-b-blue-500 text-blue-500"
              : "border-b-2 border-b-white text-black"
          } ${
            item.key === 0 ? "min-w-[20px]" : "min-w-[70px]"
          } mx-5 pb-2 hover:border-b-2 hover:border-b-blue-500 hover:text-blue-500 focus:outline-none`}
          key={item.key}
          onClick={() => handleClick(item.key)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
