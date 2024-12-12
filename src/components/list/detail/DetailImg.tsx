"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  campaignImgUrl: string;
}
export default function DetailImg({ campaignImgUrl }: Props) {
  const [imageSrc, setImageSrc] = useState(campaignImgUrl);

  const handleImageError = () => {
    setImageSrc("/images/logo.png");
  };

  return (
    <div className="md:min-w-[360px]">
      <Image
        width={510}
        height={510}
        src={imageSrc}
        alt="detailImg"
        onError={handleImageError}
      />
    </div>
  );
}
