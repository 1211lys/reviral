"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const LIST = [
  { key: 0, title: "홈", to: "/" },
  { key: 1, title: "오늘 오픈", to: "/open" },
  { key: 2, title: "마감 임박", to: "/imminent" },
  { key: 3, title: "당일 구매", to: "/day" },
  { key: 4, title: "시간 구매", to: "/time" },
];

export default function MainMenuList() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeItem = LIST.find((item) => item.to === pathname);
    if (activeItem) {
      setActiveKey(activeItem.key);
    }
  }, [pathname]);

  const handleClick = (key: number, to: string) => {
    setActiveKey(key);
    router.push(to);

    const button = buttonRefs.current[key];
    if (button) {
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="overflow-x-auto flex gap-4 sm:justify-start px-4 py-2 touch-action-pan-x scrollbar-none">
      {LIST.map((item, index) => (
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
