import React from "react";
import "./RewardTag.css";

export const RewardTag = ({ tags = [] }) => {
  return (
    <div className="reward-tag">
      {tags.map((tag, index) => (
        <div key={index} className="basic-reward-detail">
          <div className="text-wrapper">#{tag}</div>
        </div>
      ))}
    </div>
  );
};
