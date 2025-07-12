import React from "react";
import "./ShortTermDday.css"; // CSS 통합

export const ShortTermDday = ({ deadline }) => {
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return (
      <div className="dday-box today">
        <div className="text">오늘마감</div>
      </div>
    );
  }

  const className =
    diffDays <= 7 ? "short-term" : "long-term";

  return (
    <div className={`dday-box ${className}`}>
      <div className="text">D-{diffDays}</div>
    </div>
  );
};
