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

export const ReviewBox = ({
  overallRating = 0,
  intensityClass = "",
  systematicityClass = "",
  feedbackClass = "",
  rewardClass = "",
  helpClass = "",
  requirementsClass = "",
}) => {
  // 별점 렌더링 함수 (0~5 점)
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 >= 0.5;
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, i) => {
      if (i < fullStars) {
        return <img key={i} className="star-2" alt="Star" src={star} />;
      } else if (i === fullStars && halfStar) {
        // 반별점 이미지가 있으면 교체 가능 (여기선 그냥 빈별)
        return <img key={i} className="star-2" alt="Star" src={emptystar} />;
      } else {
        return <img key={i} className="star-2" alt="Star" src={emptystar} />;
      }
    });
  };

  return (
    <div className="reviewmore-box">
      <div className="overall-rating-box">
        <p className="overall-rating">★ 전체 평점 및 분야별 태그</p>
      </div>

      <div className="star-box">
        <div className="star-point">{overallRating.toFixed(1)}</div>

        <div className="review-star">{renderStars(overallRating)}</div>
      </div>

      <div className="tag-box">
        <ActivityIntensity className={intensityClass} />
        <SystematicityLevel className={systematicityClass} />
        <FeedbackMentoring className={feedbackClass} />
        <RewardLevel className={rewardClass} />
        <HelpLevel className={helpClass} />
        <RequirementsLevel className={requirementsClass} />
      </div>
    </div>
  );
};
