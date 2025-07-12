import React from "react";
import line from "../line.svg";
import "./ActivityIntensity.css";

const intensityLabels = {
  "activity-intensity-hard": "바쁘다",
  "activity-intensity-normal": "보통",
  "activity-intensity-relaxed": "여유로움",
};

export const ActivityIntensity = ({ className = "" }) => {
  const label = intensityLabels[className] || "";

  return (
    <div className={`activity-intensity ${className}`}>
      <div className="text-wrapper">활동 강도</div>
      <img className="line" alt="Line" src={line} />
      <div className="intensity-label">{label}</div>
    </div>
  );
};
