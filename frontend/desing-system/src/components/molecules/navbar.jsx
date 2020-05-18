import React from "react";

export default ({ children, close, toggleClose }) => {
  const handleClick = () => toggleClose(!close);
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      {children}
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#navbarSupportedContent"
        ariaControls="navbarSupportedContent"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
        onClick={handleClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
