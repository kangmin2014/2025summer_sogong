// MyPage.jsx

import React from "react";
import { ActivityRecordsEditSection } from "./sections/ActivityRecordsEditSection";
import { ActivitySummaryEditSection } from "./sections/ActivitySummaryEditSection";
import { AvailableToolsEditSection } from "./sections/AvailableToolsEditSection";
import { InterestAreaEditSection } from "./sections/InterestAreaEditSection";
import { MyPageEditSection } from "./sections/MyPageEditSection";
import { ProjectAchievementsEditSection } from "./sections/ProjectAchievementsEditSection";
import { SkillSetEditSection } from "./sections/SkillSetEditSection";
import { UserProfileEditSection } from "./sections/UserProfileEditSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./MyPageEdit.css";

export const MyPageEdit = () => {
  return (
    <div className="mypageedit-container" data-model-id="247:364">
      <div className="mypageedit-content">
        <div className="mypageedit-header">
          <MyPageEditSection />
        </div>

        <div className="mypageedit-row user-profile">
          <UserProfileEditSection />
        </div>

        <div className="mypageedit-row activity-summary">
          <ActivitySummaryEditSection />
        </div>

        <div className="mypageedit-row project-achievements">
          <ProjectAchievementsEditSection />
        </div>

        <div className="mypageedit-row interest-area">
          <InterestAreaEditSection />
        </div>

        <div className="mypageedit-row skill-set">
          <SkillSetEditSection />
        </div>

        <div className="mypageedit-row available-tools">
          <AvailableToolsEditSection />
        </div>

        <div className="mypageedit-row activity-records">
          <ActivityRecordsEditSection />
        </div>

        <Header />
      </div>
      <Footer />
    </div>
  );
};
