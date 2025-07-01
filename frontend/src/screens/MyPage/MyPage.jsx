// MyPage.jsx

import React from "react";
import { ActivityRecordsSection } from "./sections/ActivityRecordsSection";
import { ActivitySummarySection } from "./sections/ActivitySummarySection";
import { AvailableToolsSection } from "./sections/AvailableToolsSection";
import { InterestAreaSection } from "./sections/InterestAreaSection";
import { MyPageSection } from "./sections/MyPageSection/MyPageSection";
import { ProjectAchievementsSection } from "./sections/ProjectAchievementsSection";
import { SkillSetSection } from "./sections/SkillSetSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./MyPage.css";

export const MyPage = () => {
  return (
    <div className="mypage-container" data-model-id="247:364">
      <div className="mypage-content">
        <div className="mypage-header">
          <MyPageSection />
        </div>

        <div className="mypage-row user-profile">
          <UserProfileSection />
        </div>

        <div className="mypage-row activity-summary">
          <ActivitySummarySection />
        </div>

        <div className="mypage-row project-achievements">
          <ProjectAchievementsSection />
        </div>

        <div className="mypage-row interest-area">
          <InterestAreaSection />
        </div>

        <div className="mypage-row skill-set">
          <SkillSetSection />
        </div>

        <div className="mypage-row available-tools">
          <AvailableToolsSection />
          <div className="tool-select">
            <select className="custom-select">
              <option value="planning">기획</option>
              <option value="frontend">프론트엔드</option>
              <option value="backend">백엔드</option>
              <option value="design">디자인</option>
              <option value="marketing">마케팅</option>
              <option value="startup">창업</option>
            </select>
          </div>
        </div>

        <div className="mypage-row activity-records">
          <ActivityRecordsSection />
        </div>

        <Header />
      </div>
      <Footer />
    </div>
  );
};
