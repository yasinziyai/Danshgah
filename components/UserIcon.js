import * as React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={40} fill="none" viewBox="0 0 35 40" {...props}>
    <path
      opacity={0.8}
      d="M17.5 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm7 2.5h-1.3a13.601 13.601 0 0 1-11.391 0H10.5A10.5 10.5 0 0 0 0 33v3.25A3.751 3.751 0 0 0 3.75 40h27.5A3.751 3.751 0 0 0 35 36.25V33a10.5 10.5 0 0 0-10.5-10.5Z"
      fill="#0E3150"
    />
  </svg>
);

export default SvgComponent;
