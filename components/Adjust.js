import * as React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
    <path
      opacity={0.8}
      d="M0 15a15 15 0 1 0 30 0 15 15 0 0 0-30 0Zm15 11.129V3.871a11.129 11.129 0 1 1 0 22.258Z"
      fill="#0E3150"
    />
  </svg>
);

export default SvgComponent;
