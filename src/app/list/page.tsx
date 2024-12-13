import ContentItems from "@/components/common/ContentItems";
import ListTitle from "@/components/list/ListTitle";

import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full justify-center my-10">
        <ListTitle />
      </div>
      <ContentItems
        categoryProps={null}
        platformProps={null}
        statusProps={null}
        sizeProps={15}
      />
    </div>
  );
}
