import * as React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={28} fill="none" viewBox="0 0 29 28" {...props}>
    <path
      opacity={0.8}
      d="M14.5.389a13.611 13.611 0 1 0 0 27.222 13.611 13.611 0 0 0 0-27.222Zm0 24.588a10.977 10.977 0 1 1 0-21.954 10.977 10.977 0 0 1 0 21.954Zm3.392-5.73-4.66-3.386a.663.663 0 0 1-.269-.532V6.316a.66.66 0 0 1 .66-.659h1.755a.661.661 0 0 1 .66.659v7.777l3.665 2.667a.657.657 0 0 1 .143.922l-1.032 1.421a.663.663 0 0 1-.922.143v.001Z"
      fill="#0E3150"
    />
  </svg>
);

export default SvgComponent;
