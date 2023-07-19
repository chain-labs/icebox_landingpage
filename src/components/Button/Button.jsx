/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ChevronLeft8 } from "../../icons/ChevronLeft8";
import { ChevronRight12 } from "../../icons/ChevronRight12";
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
        <ChevronLeft8
          className="instance-node"
          color={
            state.size === "normal" && state.state === "normal" && ["ghost", "secondary"].includes(state.type)
              ? "#666D80"
              : (state.size === "large" && state.state === "normal" && state.type === "ghost") ||
                (state.size === "large" && state.state === "normal" && state.type === "secondary") ||
                (state.state === "active" && state.type === "ghost") ||
                (state.state === "active" && state.type === "secondary")
              ? "#36394A"
              : (state.state === "hover" && state.type === "ghost") ||
                (state.state === "hover" && state.type === "secondary") ||
                (state.state === "pressed" && state.type === "ghost") ||
                (state.state === "pressed" && state.type === "secondary")
              ? "#0D0D12"
              : state.state === "disabled"
              ? "#A4ACB9"
              : state.type === "danger" && ["active", "normal"].includes(state.state)
              ? "#DF1C41"
              : state.type === "danger" && ["hover", "pressed"].includes(state.state)
              ? "#96132C"
              : "white"
          }
        />
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
          <>
            {rightIcon && (
              <ChevronRight12
                className="instance-node"
                color={
                  state.size === "normal" && state.state === "normal" && ["ghost", "secondary"].includes(state.type)
                    ? "#666D80"
                    : (state.size === "large" && state.state === "normal" && state.type === "ghost") ||
                      (state.size === "large" && state.state === "normal" && state.type === "secondary") ||
                      (state.state === "active" && state.type === "ghost") ||
                      (state.state === "active" && state.type === "secondary")
                    ? "#36394A"
                    : (state.state === "hover" && state.type === "ghost") ||
                      (state.state === "hover" && state.type === "secondary") ||
                      (state.state === "pressed" && state.type === "ghost") ||
                      (state.state === "pressed" && state.type === "secondary")
                    ? "#0D0D12"
                    : state.state === "disabled"
                    ? "#A4ACB9"
                    : state.type === "danger" && ["active", "normal"].includes(state.state)
                    ? "#DF1C41"
                    : state.type === "danger" && ["hover", "pressed"].includes(state.state)
                    ? "#96132C"
                    : "white"
                }
              />
            )}
          </>
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
