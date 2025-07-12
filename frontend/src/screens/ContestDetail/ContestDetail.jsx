import React, { useState } from "react";

import { FirstInformation } from "./sections/FirstInformation";
import { PosterButton } from "./sections/PosterButton";
import { ExternalActivitiesBar } from "./sections/ExternalActivitiesBar";
import { Basic } from "./sections/Basic";
import { Review } from "./sections/Review";
import { Team } from "./sections/Team";
import { ReviewMore } from "./sections/ReviewMore";
import { TeamRecruitment } from "./sections/TeamRecruitment";
import { Header } from "../Common/Header";

import posterImage from "./img/poster.png";
import "./ContestDetail.css";

export const ContestDetail = () => {
  const [selectedTab, setSelectedTab] = useState("기본 정보");
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedRecruitment, setSelectedRecruitment] = useState(null);

  const renderMainContent = () => {
    switch (selectedTab) {
      case "기본 정보":
        return <Basic />;
      case "리뷰 모음":
        return (
          <Review
            setSelectedTab={setSelectedTab}
            setSelectedReview={setSelectedReview}
          />
        );
      case "팀원 모집":
        return (
          <Team
            setSelectedTab={setSelectedTab}
            setSelectedRecruitment={setSelectedRecruitment}
          />
        );
      case "ReviewMore":
        return selectedReview ? <ReviewMore {...selectedReview} /> : null;
      case "TeamRecruitment":
        return selectedRecruitment ? <TeamRecruitment {...selectedRecruitment} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="contest-screen">
      <div className="contest">
        <div className="overlap-group">
          <Header />
          <FirstInformation
            views={2300}
            createdAt="2025-07-06"
            tags={["보상/혜택", "스펙/이력서", "효율/가성비"]}
          />

          <ExternalActivitiesBar
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />
          <div className="content-row">
            {renderMainContent()}
            <PosterButton poster={posterImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
