import ContentItems from "@/components/common/ContentItems";

import React, { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full justify-center my-10">
        <h1 className="bg-gradationListTitle text-3xl text-center text-white font-bold py-20 w-full max-w-[1440px]">
          오늘 오픈한 캠페인은?
        </h1>
      </div>

      <ContentItems />
    </div>
  );
}
