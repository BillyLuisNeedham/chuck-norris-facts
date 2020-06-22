import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick }) => {
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
        case hovering && clicked:
        case clicked:
          return setClassName("button yellow-dark");
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
};
