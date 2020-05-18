import React from "react";

export default ({ label, fn }) => {
  const handleClick = (e) => {
    e.preventDefault();
    fn(e);
  };
  return (
    <button className="btn btn-primary" type="submit" onClick={handleClick}>
      {label}
    </button>
  );
};
