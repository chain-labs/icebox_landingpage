/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const StateCrosshair = ({ className }) => {
  return (
    <svg
      className={`state-crosshair ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_8_1210)">
        <path
          className="path"
          clipRule="evenodd"
          d="M9 7V0H7V7H0V9H7V16H9V9H16V7H9Z"
          fill="#363B3E"
          fillRule="evenodd"
        />
        <path
          className="path"
          d="M0 9.5H6.5V16V16.5H7H9H9.5V16V9.5H16H16.5V9V7V6.5H16H9.5V0V-0.5H9H7H6.5V0V6.5H0H-0.5V7V9V9.5H0Z"
          stroke="white"
          strokeOpacity="0.8"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="24"
          id="filter0_d_8_1210"
          width="24"
          x="-4"
          y="-3"
        >
          <feFlood className="fe_flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe_color_matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe_offset" dy="1" />
          <feGaussianBlur className="fe_gaussian_blur" stdDeviation="1.5" />
          <feColorMatrix
            className="fe_color_matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe_blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_1210" />
          <feBlend
            className="fe_blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_8_1210"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
