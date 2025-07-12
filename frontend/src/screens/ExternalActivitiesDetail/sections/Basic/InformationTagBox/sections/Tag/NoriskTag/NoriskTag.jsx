import React from "react";
import "./NoriskTag.css";

export const NoriskTag = ({ tags }) => {
  return (
    <div className="norisk-tag">
      {tags.map((tag, index) => (
        <div key={index} className="norisk-detail">
          <div className="text-wrapper">#{tag}</div>
        </div>
      ))}
    </div>
  );
};
