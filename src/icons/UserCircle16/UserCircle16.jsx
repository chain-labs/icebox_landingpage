/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UserCircle16 = ({ color = "#F97316", className }) => {
  return (
    <svg
      className={`user-circle-16 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.79836 11.3334C5.56267 10.4167 6.71324 9.83335 8.00006 9.83335C9.28687 9.83335 10.4374 10.4167 11.2018 11.3334M12.8334 8.00002C12.8334 10.6694 10.6694 12.8334 8.00002 12.8334C5.33064 12.8334 3.16669 10.6694 3.16669 8.00002C3.16669 5.33064 5.33064 3.16669 8.00002 3.16669C10.6694 3.16669 12.8334 5.33064 12.8334 8.00002ZM9.50002 6.66669C9.50002 7.49511 8.82845 8.16669 8.00002 8.16669C7.17159 8.16669 6.50002 7.49511 6.50002 6.66669C6.50002 5.83826 7.17159 5.16669 8.00002 5.16669C8.82845 5.16669 9.50002 5.83826 9.50002 6.66669Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

UserCircle16.propTypes = {
  color: PropTypes.string,
};
