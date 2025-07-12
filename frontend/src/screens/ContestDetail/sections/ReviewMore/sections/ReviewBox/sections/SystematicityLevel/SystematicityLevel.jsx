import React from "react";
import line from "../line.svg";
import "./SystematicityLevel.css";

const labels = {
  "systematicity-systematic": "체계적",
  "systematicity-normal": "보통",
  "systematicity-disarray": "혼란",
};

export const SystematicityLevel = ({ className = "" }) => {
  const label = labels[className] || "";

  return (
    <div className={`systematicity-container ${className}`}>
      <div className="label-title">운영 체계성</div>
      <img className="line" alt="Line" src={line} />
      <div className="label-value">{label}</div>
    </div>
  );
};
