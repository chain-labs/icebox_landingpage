/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ChevronLeft } from "../ChevronLeft";
import { ChevronRight } from "../ChevronRight";
import "./style.css";

export const Button = ({
  rightIcon = true,
  leftIcon = true,
  label = "Label",
  size,
  type,
  stateProp,
  iconButton,
  className,
  labelClassName,
  override = <ChevronLeft />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "normal",
    type: type || "primary",
    state: stateProp || "normal",
    iconButton: iconButton || "off",
  });

  return (
    <div
      className={`button ${state.state} ${state.iconButton} ${state.type} ${state.size} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {leftIcon && (
        <>
          <>
            {state.iconButton === "on" && <>{override}</>}

            {state.iconButton === "off" && <ChevronLeft />}
          </>
        </>
      )}

      {state.iconButton === "off" && (
        <>
          <div
            className={`label ${
              (state.state === "active" && state.type === "destructive") ||
              (state.state === "active" && state.type === "primary") ||
              state.state === "disabled" ||
              (state.state === "hover" && state.type === "destructive") ||
              (state.state === "hover" && state.type === "primary") ||
              state.state === "normal" ||
              (state.state === "pressed" && state.type === "destructive") ||
              (state.state === "pressed" && state.type === "primary")
                ? labelClassName
                : undefined
            }`}
          >
            {label}
          </div>
          <>{rightIcon && <ChevronRight />}</>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}

Button.propTypes = {
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["large", "normal"]),
  type: PropTypes.oneOf(["destructive", "danger", "secondary", "primary", "ghost"]),
  stateProp: PropTypes.oneOf(["active", "pressed", "normal", "hover", "disabled"]),
  iconButton: PropTypes.oneOf(["off", "on"]),
};
