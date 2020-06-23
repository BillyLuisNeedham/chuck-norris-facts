import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick, title, blue }) => {
  // true when mouse is hovering over button
  const [hovering, setHovering] = useState(false);

  // true when button is clicked, false when released
  const [clicked, setClicked] = useState(false);

  // class name for button, used to adapt styles
  const [className, setClassName] = useState("button");

  // handles setting the className
  useEffect(() => {
    const classNameHandler = () => {
      switch (true) {
        case hovering && clicked && blue:
          case clicked && blue:
          return setClassName("button clicked blue-dark");
        case hovering && blue:
          return setClassName("button blue-light")
        case blue:
          return setClassName("button blue")
        case hovering && clicked:
        case clicked:
          return setClassName("button clicked yellow-dark");
        case hovering:
          return setClassName("button yellow-light");
        default:
          return setClassName("button yellow");
      }
    };
    classNameHandler();
  }, [clicked, hovering]);

  return (
    <div
      title={title}
      className={className}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {label}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  blue: PropTypes.bool,
};
