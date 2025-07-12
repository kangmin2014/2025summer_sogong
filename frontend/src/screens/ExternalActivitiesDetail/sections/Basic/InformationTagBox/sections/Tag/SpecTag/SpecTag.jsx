import React from "react";
import "./SpecTag.css";

export const SpecTag = ({ tags = [] }) => {
  return (
    <div className="spec-tag">
      {tags.map((tag, index) => (
        <div key={index} className="basic-spec-detail">
          <div className="text-wrapper">#{tag}</div>
        </div>
      ))}
    </div>
  );
};
