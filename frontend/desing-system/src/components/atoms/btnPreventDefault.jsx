import React from "react";

export default ({ label, onClick, value }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(value);
  };
  return (
    <button
      className="btn btn-primary mx-3"
      type="submit"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
