import * as React from "react";

interface Props {
  className?: string;
}

const BestCampaignSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="10.5"
    height="21"
    viewBox="0 0 10.5 21"
  >
    <g transform="matrix(0,-1,1,0,-21,21)">
      <path
        d="M10.5,31.5L0,21L21,21L10.5,31.5Z"
        fill="currentColor"
        className={className}
      />
    </g>
  </svg>
);

export default BestCampaignSvg;
