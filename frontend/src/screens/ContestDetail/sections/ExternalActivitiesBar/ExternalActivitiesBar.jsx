// ExternalActivitiesBar.jsx

import React from "react";
import "./ExternalActivitiesBar.css";

const tabGroups = {
  "기본 정보": ["기본 정보"],
  "리뷰 모음": ["리뷰 모음", "ReviewMore"],
  "팀원 모집": ["팀원 모집", "TeamRecruitment"],
};

export const ExternalActivitiesBar = ({ selectedTab, onTabChange }) => {
  const tabs = Object.keys(tabGroups);

  return (
    <div className="basic-select">
      {tabs.map((tab) => {
        const isActive = tabGroups[tab].includes(selectedTab);

        return (
          <div
            key={tab}
            className={isActive ? "basic" : "text-wrapper"}
            onClick={() => onTabChange(tab)}
          >
            <div className={isActive ? "text" : "div"}>{tab}</div>
          </div>
        );
      })}
    </div>
  );
};
