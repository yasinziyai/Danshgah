import * as React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={31} fill="none" viewBox="0 0 32 31" {...props}>
    <path
      opacity={0.8}
      d="m30.134 10.905-8.578-1.249L17.723 1.9a1.882 1.882 0 0 0-3.37 0l-3.834 7.756-8.577 1.248a1.875 1.875 0 0 0-1.039 3.2l6.2 6.035-1.464 8.523a1.88 1.88 0 0 0 1.852 2.194c.304 0 .603-.076.871-.22l7.672-4.024 7.672 4.025a1.876 1.876 0 0 0 2.728-1.974l-1.467-8.525 6.206-6.034a1.875 1.875 0 0 0-1.039-3.2v.001Zm-7.133 7.219-1.067 1.032.251 1.458 1.149 6.648-5.984-3.14-1.316-.688V4.849l2.99 6.052.655 1.326 1.465.213 6.693.974-4.836 4.71Z"
      fill="#0E3150"
    />
  </svg>
);

export default SvgComponent;