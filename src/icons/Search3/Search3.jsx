/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search3 = ({ color = "#94A3B8", className }) => {
  return (
    <svg
      className={`search-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.6985 16.0417L13.5735 12.9167M4.61519 9.16667C4.61519 6.29018 6.94704 3.95833 9.82352 3.95833C12.7 3.95833 15.0319 6.29018 15.0319 9.16667C15.0319 12.0431 12.7 14.375 9.82352 14.375C6.94704 14.375 4.61519 12.0431 4.61519 9.16667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Search3.propTypes = {
  color: PropTypes.string,
};
