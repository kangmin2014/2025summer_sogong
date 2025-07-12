import React from "react";
import "./EfficiencyTag.css";

export const EfficiencyTag = ({ tags }) => {
  return (
    <div className="efficiency-tag">
      {tags.map((tag, index) => (
        <div key={index} className="basic-efficiency-detail">
          <div className="text-wrapper">#{tag}</div>
        </div>
      ))}
    </div>
  );
};
