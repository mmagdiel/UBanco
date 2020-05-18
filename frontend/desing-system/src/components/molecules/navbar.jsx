import React from "react";

export default ({ children, close, toggleClose }) => {
  const handleClick = () => toggleClose(!close);
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      {children}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
