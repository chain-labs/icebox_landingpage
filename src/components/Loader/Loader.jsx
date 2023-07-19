/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Loader = ({ className, loader = "/img/loader-2.svg" }) => {
  return <img className={`loader ${className}`} alt="Loader" src={loader} />;
};

Loader.propTypes = {
  loader: PropTypes.string,
};
