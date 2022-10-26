import { FC } from "react";

const LibraryIcon: FC = () => {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75,3H5.25A1.15,1.15,0,0,0,4,4V33H14V4A1.15,1.15,0,0,0,12.75,3Z"
        className="clr-i-solid clr-i-solid-path-1"
        fill="#65350F"
      ></path>
      <path
        d="M33.77,31.09l-6.94-18.3a1,1,0,0,0-1.29-.58L22,13.59V9a1,1,0,0,0-1-1H16V33h6V14.69L28.93,33Z"
        className="clr-i-solid clr-i-solid-path-2"
        fill={"#707070"}
      ></path>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" fill={"#bfff00"} />
    </svg>
  );
};

export { LibraryIcon };
