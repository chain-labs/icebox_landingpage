/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TypeCheckedStateDefaultLabelFalse = ({ className }) => {
  return (
    <svg
      className={`type-checked-state-default-label-false ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 17 18"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_dd_8_458)">
        <rect className="rect" fill="#5E5ADB" height="16" rx="4" width="16" />
        <path
          className="path"
          d="M3.75 7.75L6.75 10.75L12.25 5.25"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="19"
          id="filter0_dd_8_458"
          width="18"
          x="-1"
          y="-1"
        >
          <feFlood className="fe_flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe_color_matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            className="fe_morphology"
            in="SourceAlpha"
            operator="dilate"
            radius="1"
            result="effect1_dropShadow_8_458"
          />
          <feOffset className="fe_offset" />
          <feColorMatrix
            className="fe_color_matrix"
            type="matrix"
            values="0 0 0 0 0.368627 0 0 0 0 0.352941 0 0 0 0 0.858824 0 0 0 1 0"
          />
          <feBlend className="fe_blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_458" />
          <feColorMatrix
            className="fe_color_matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe_offset" dy="1" />
          <feGaussianBlur className="fe_gaussian_blur" stdDeviation="0.5" />
          <feColorMatrix className="fe_color_matrix" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            className="fe_blend"
            in2="effect1_dropShadow_8_458"
            mode="normal"
            result="effect2_dropShadow_8_458"
          />
          <feBlend
            className="fe_blend"
            in="SourceGraphic"
            in2="effect2_dropShadow_8_458"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
