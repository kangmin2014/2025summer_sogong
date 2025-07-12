import React from "react";
import "./TransparencyTag.css";

export const TransparencyTag = ({ tags = [] }) => {
  return (
    <div className="transparency-tag">
      {tags.map((tag, index) => (
        <div key={index} className="div-wrapper">
          <div className="text-wrapper">#{tag}</div>
        </div>
      ))}
    </div>
  );
};
