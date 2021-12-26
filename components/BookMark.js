import * as React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} fill="none" viewBox="={0 0 23 30}" {...props}>
    <path
      d="M0 30V2.813A2.812 2.812 0 0 1 2.813 0h16.875A2.812 2.812 0 0 1 22.5 2.813V30l-11.25-6.562L0 30Z"
      fill="#0E3150"
      fillOpacity={0.8}
    />
  </svg>
);

export default SvgComponent;
