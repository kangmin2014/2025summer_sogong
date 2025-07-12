import React from "react";
import { ActivityIntensity } from "./sections/ActivityIntensity";
import { FeedbackMentoring } from "./sections/FeedbackMentoring";
import { HelpLevel } from "./sections/HelpLevel";
import { RequirementsLevel } from "./sections/RequirementsLevel";
import { RewardLevel } from "./sections/RewardLevel";
import { SystematicityLevel } from "./sections/SystematicityLevel";
import emptystar from "./emptystar.svg";
import star from "./star.svg";
import "./ReviewBox.css";

export const ReviewBox = () => {
  return (
    <div className="reviewmore-box">
      <div className="overall-rating-box">
        {/* <img className="star" alt="Star" src={star} /> */}

        <p className="overall-rating">★ 전체 평점 및 분야별 태그</p>
      </div>

      <div className="star-box">
        <div className="star-point">4.0</div>

        <div className="review-star">
          <img className="star-2" alt="Star" src={star} />

          <img className="star-2" alt="Star" src={star} />

          <img className="star-2" alt="Star" src={star} />

          <img className="star-2" alt="Star" src={star} />

          <img className="star-2" alt="Star" src={emptystar} />
        </div>
      </div>

      <div className="tag-box">
        <ActivityIntensity
          className="activity-intensity-hard"
        />
        <SystematicityLevel
          className="systematicity-systematic"
        />
        <FeedbackMentoring
          className="feedback-regularly"
        />
        <RewardLevel
          className="reward-accurate"
        />
        <HelpLevel
          className="help-many"
        />
        <RequirementsLevel
          className="requirements-not"
        />
      </div>
    </div>
  );
};