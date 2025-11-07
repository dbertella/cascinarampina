import { FC, SVGProps } from "react";

export const Stroke: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 100 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 10 Q25 0, 50 10 T100 10" stroke="none" fill="currentColor" />
  </svg>
);
