import React from "react";

export default ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      {children}
    </nav>
  );
};
