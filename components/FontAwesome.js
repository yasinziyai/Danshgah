import * as React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={31} fill="none" viewBox="0 0 27 31" {...props}>
    <path
      opacity={0.8}
      d="M26.367 21.727c0 .42-.36.6-.78.78a13.82 13.82 0 0 1-5.4 1.38c-2.7 0-3.96-1.68-7.2-1.68-2.355.108-4.663.7-6.78 1.74-.12.06-.24.06-.36.12v4.56a1.967 1.967 0 0 1-1.98 2.04 2.025 2.025 0 0 1-2.04-2.04V6.667a3.35 3.35 0 1 1 5.4-2.64 3.187 3.187 0 0 1-1.32 2.64v1.86a17.86 17.86 0 0 1 6.72-1.68c3.822 0 5.722 1.62 7.44 1.62 2.28 0 4.8-1.62 5.4-1.62a.865.865 0 0 1 .9.78v14.1Z"
      fill="#0E3150"
    />
  </svg>
);

export default SvgComponent;
