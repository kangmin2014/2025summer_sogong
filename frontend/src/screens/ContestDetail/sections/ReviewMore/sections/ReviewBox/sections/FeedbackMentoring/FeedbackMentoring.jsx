import React from "react";
import line from "../line.svg";
import "./FeedbackMentoring.css";

const feedbackLabels = {
  "feedback-regularly": "정기적인 피드백",
  "feedback-simple": "간단한 코멘트",
  "feedback-not": "없음",
};

export const FeedbackMentoring = ({ className = "" }) => {
  const label = feedbackLabels[className] || "";

  return (
    <div className={`feedback-container ${className}`}>
      <div className="feedback">피드백 및 멘토링</div>
      <img className="line" alt="Line" src={line} />
      <div className="feedback-label">{label}</div>
    </div>
  );
};
