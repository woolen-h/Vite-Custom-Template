import React from "react";
import { PropTypes } from "prop-types";

export function Input({
  status = "default",
  placeholder = "",
  size = "small",
}) {
  const getStatusClass = () => {
    switch (status) {
      case "default":
        return "input-default";
      case "success":
        return "input-success";
      case "error":
        return "input-error";
      case "warning":
        return "input-warning";
      case "search":
        return "input-search";
      default:
        return "";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "input-small";
      case "large":
        return "input-large";
      default:
        return "";
    }
  };

  return (
    <input
      type="text"
      className={`input ${getStatusClass()} ${getSizeClass()}`}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  status: PropTypes.oneOf(["default", "success", "error", "warning", "search"]),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};

export default Input;

export function InputLabel({ type, placeholder = "", labelClass = "" }) {
  return (
    <label className={`label label-${labelClass}`}>
      <input
        type={type}
        className={`input input-${labelClass}`}
        placeholder={placeholder}
      />
    </label>
  );
}

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  labelClass: PropTypes.string,
};
