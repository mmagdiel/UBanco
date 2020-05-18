import React from "react";

export default ({ children }) => {
  return (
    <div className="navbar-collapse d-flex justify-content-end">
      <ul className="navbar-nav">
        {children.map((child) => {
          return <li className="nav-item">{child}</li>;
        })}
      </ul>
    </div>
  );
};
