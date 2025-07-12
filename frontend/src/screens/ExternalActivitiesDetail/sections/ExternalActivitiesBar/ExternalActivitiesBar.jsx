import React from "react";
import "./ExternalActivitiesBar.css";

export const ExternalActivitiesBar = ({ selectedTab, onTabChange }) => {
  const tabs = ["기본 정보", "리뷰 모음", "합격 사례", "팀원 모집"];

  // 👉 서브 탭을 메인 탭에 매핑
  const tabMap = {
    "ReviewMore": "리뷰 모음",
    "PassComment": "합격 사례",
    "TeamRecruitment": "팀원 모집",
  };

  const effectiveTab = tabMap[selectedTab] || selectedTab;

  return (
    <div className="basic-select">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={effectiveTab === tab ? "basic" : "text-wrapper"}
          onClick={() => onTabChange(tab)}
        >
          <div className={effectiveTab === tab ? "text" : "div"}>{tab}</div>
        </div>
      ))}
    </div>
  );
};
