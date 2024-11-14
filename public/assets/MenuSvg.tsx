// SvgComponent.tsx
import * as React from "react";

interface Props {
  className?: string;
}

const SvgComponent = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="18"
    height="16"
    viewBox="0 0 18 16"
    className={className}
  >
    <g>
      <path d="M0,0L18,0L18,2L0,2L0,0ZM0,7L18,7L18,9L0,9L0,7ZM0,14L18,14L18,16L0,16L0,14Z" />
    </g>
  </svg>
);

export default SvgComponent;
