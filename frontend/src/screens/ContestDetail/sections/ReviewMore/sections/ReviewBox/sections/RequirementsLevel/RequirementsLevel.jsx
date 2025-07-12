import React from "react";
import line from "../line.svg";
import "./RequirementsLevel.css";

const requirementLabels = {
  "requirements-many": "많았음",
  "requirements-little": "조금 있음",
  "requirements-not": "없었음",
};

export const RequirementsLevel = ({ className = "" }) => {
  const label = requirementLabels[className] || "";

  return (
    <div className={`requirements-container ${className}`}>
      <div className="requirements">예상 외 요구사항</div>
      <img className="line" alt="Line" src={line} />
      <div className="requirements-label">{label}</div>
    </div>
  );
};
