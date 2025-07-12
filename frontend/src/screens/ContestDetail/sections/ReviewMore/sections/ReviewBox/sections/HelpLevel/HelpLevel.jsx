import React from "react";
import line from "../line.svg";
import "./HelpLevel.css";

const helpLabels = {
  "help-many": "많이 배움",
  "help-little": "조금 도움",
  "help-not": "도움 없음",
};

export const HelpLevel = ({ className = "" }) => {
  const label = helpLabels[className] || "";

  return (
    <div className={`help-container ${className}`}>
      <div className="help">실질적인 도움</div>
      <img className="line" alt="Line" src={line} />
      <div className="help-label">{label}</div>
    </div>
  );
};
