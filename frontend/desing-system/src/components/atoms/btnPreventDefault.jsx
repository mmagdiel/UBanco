import React from "react";

export default ({ label, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
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
