"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function ListTitle() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  let text = "";
  let gradientClass = "";

  switch (category) {
    case "today":
      text = "오늘 오픈한 캠페인은?";
      gradientClass = "bg-gradationToday";
      break;
    case "deadline":
      text = "마감 임박인 캠페인은?";
      gradientClass = "bg-gradationDeadline";
      break;
    case "daily":
      text = "당일 구매인 캠페인은?";
      gradientClass = "bg-gradationDaily";
      break;
    case "time":
      text = "시간 구매인 캠페인은?";
      gradientClass = "bg-gradationTime";
      break;
    default:
      break;
  }

  return (
    <h1
      className={`${gradientClass} text-3xl text-center text-white font-bold py-20 w-full max-w-[1440px]`}
    >
      {text}
    </h1>
  );
}
