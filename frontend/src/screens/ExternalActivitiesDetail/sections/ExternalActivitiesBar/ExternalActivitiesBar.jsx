// ExternalActivitiesBar.jsx

import React from "react";
import "./ExternalActivitiesBar.css";

export const ExternalActivitiesBar = ({ selectedTab, onTabChange }) => {
  const tabs = ["기본 정보", "리뷰 모음", "합격 사례", "팀원 모집"];

  return (
    <div className="basic-select">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={selectedTab === tab ? "basic" : "text-wrapper"}
          onClick={() => onTabChange(tab)}
        >
          <div className={selectedTab === tab ? "text" : "div"}>{tab}</div>
        </div>
      ))}
    </div>
  );
};
