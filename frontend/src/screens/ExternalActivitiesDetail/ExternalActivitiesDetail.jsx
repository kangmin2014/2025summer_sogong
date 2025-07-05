// ExternalActivitiesDetail.jsx

import React, { useState } from "react";

import { FirstInformation } from "./sections/FirstInformation";
import { PosterButton } from "./sections/PosterButton";
import { ExternalActivitiesBar } from "./sections/ExternalActivitiesBar";
import { Basic } from "./sections/Basic";
import { Review } from "./sections/Review";
import { Header } from "../Common/Header";

import posterImage from "./img/poster.png";
import "./ExternalActivitiesDetail.css";

export const ExternalActivitiesDetail = () => {
  const [selectedTab, setSelectedTab] = useState("기본 정보");

  const renderMainContent = () => {
    switch (selectedTab) {
      case "기본 정보":
        return <Basic />;
      case "리뷰 모음":
        return <Review />;
      case "합격 사례":
        return <div className="main-content">합격 사례 내용</div>;
      case "팀원 모집":
        return <div className="main-content">팀원 모집 내용</div>;
      default:
        return null;
    }
  };

  return (
    <div className="external-activities-screen">
      <div className="external-activities">
        <div className="overlap-group">
          <Header />
          <FirstInformation />
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
