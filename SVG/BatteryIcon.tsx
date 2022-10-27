import { FC } from "react";

const BatteryIcon: FC = () => {
  return (
    <svg
      width="512px"
      height="512px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="32"
        y="144"
        width="400"
        height="224"
        rx="45.7"
        ry="45.7"
        fill={"none"}
        stroke={"#000"}
        strokeLinecap={"square"}
        strokeWidth={"32px"}
        strokeMiterlimit={"10"}
      />
      <rect
        x="85.69"
        y="198.93"
        width="292.63"
        height="114.14"
        rx="4"
        ry="4"
        stroke={"#000"}
        strokeLinecap={"square"}
        strokeWidth={"32px"}
        strokeMiterlimit={"10"}
      />
      <line
        x1="480"
        y1="218.67"
        x2="480"
        y2="293.33"
        stroke={"#000"}
        strokeLinecap={"round"}
        strokeWidth={"32px"}
        strokeMiterlimit={"10"}
      />
    </svg>
  );
};

export { BatteryIcon };
