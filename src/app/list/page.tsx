import Link from "next/link";

import React from "react";

export default function useListSlug() {
  return (
    <div>
      page
      <Link href={"/list?index=1"}>asdf</Link>
    </div>
  );
}
