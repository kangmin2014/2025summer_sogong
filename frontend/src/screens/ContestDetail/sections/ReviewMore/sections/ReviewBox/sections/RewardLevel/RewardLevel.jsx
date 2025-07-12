import React from "react";
import line from "../line.svg";
import "./RewardLevel.css";

const rewardLabels = {
  "reward-accurate": "정확 지급",
  "reward-part": "부분 지급",
  "reward-not": "미지급",
};

export const RewardLevel = ({ className = "" }) => {
  const label = rewardLabels[className] || "";

  return (
    <div className={`reward-container ${className}`}>
      <div className="reward">보상 및 혜택</div>
      <img className="line" alt="Line" src={line} />
      <div className="reward-label">{label}</div>
    </div>
  );
};
