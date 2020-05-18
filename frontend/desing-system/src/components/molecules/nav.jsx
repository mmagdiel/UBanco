import React from "react";
import classNames from "classnames";

export default ({ children, close }) => {
  return (
    <div className={classNames("navbar-collapse collapse", { show: close })}>
      <ul className="navbar-nav ml-auto">
        {children.map((child) => {
          return <li className="nav-item">{child}</li>;
        })}
      </ul>
    </div>
  );
};
