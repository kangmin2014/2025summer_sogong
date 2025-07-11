import React from "react";
import "./MoreButtonBox.css";

export const MoreButtonBox = ({ onClick, className = "" }) => {
  return (
    <div className={`more-button-box ${className}`}>
      <button className="more-button" onClick={onClick}>
        <span className="text">더보기</span>
      </button>
    </div>
  );
};
