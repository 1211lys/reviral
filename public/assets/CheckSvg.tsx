import * as React from "react";

interface Props {
  className?: string;
}

const CheckSvg = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <clipPath id="master_svg0_21_16068">
        <rect x="0" y="0" width="24" height="24" rx="0" />
      </clipPath>
    </defs>
    <g>
      <g>
        <path
          d="M12,22C6.477,22,2,17.523,2,12C2,6.477,6.477,2,12,2C17.523,2,22,6.477,22,12C22,17.523,17.523,22,12,22ZM11.003,16L18.073,8.929L16.659,7.515L11.003,13.172L8.174,10.343L6.76,11.757L11.003,16Z"
          fill="currentColor"
          className={className}
        />
      </g>
    </g>
  </svg>
);

export default CheckSvg;
