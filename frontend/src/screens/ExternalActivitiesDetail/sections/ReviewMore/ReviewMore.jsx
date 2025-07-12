import React from "react";
import { HeadInfoBox } from "./sections/HeadInfoBox";
import { ReviewBox } from "./sections/ReviewBox";
import { ParnassusBox } from "./sections/ParnassusBox";
import "./ReviewMore.css";

export const ReviewMore = (props) => {
  const {
    title,
    nickname,
    date,
    content,
    likes,
    comment_count,
    rating,
    img,
    profile_img,
    tags = [],
  } = props;

  // 한글 텍스트를 컴포넌트에서 쓰는 className으로 매핑
  const textToClass = {
    "바쁘다": "activity-intensity-hard",
    "보통": "activity-intensity-normal",
    "여유로움": "activity-intensity-relaxed",
    "체계적": "systematicity-systematic",
    "정기적인 피드백": "feedback-regularly",
    "간단한 코멘트": "feedback-simple",
    "없음": "feedback-not",
    "정확 지급": "reward-accurate",
    "부분 지급": "reward-part",
    "미지급": "reward-not",
    "많이 배움": "help-many",
    "조금 도움": "help-little",
    "도움 없음": "help-not",
    "많았음": "requirements-many",
    "조금 있음": "requirements-little",
    "없었음": "requirements-not",
  };

  return (
    <div className="reviewmore-external-activities-screen">
      <div className="reviewmore-external-activities">
        <div className="reviewmore-overlap-group">
          <HeadInfoBox
            title={title}
            author={nickname}
            date={date}
            likes={likes}
            comments={comment_count}
            profile={profile_img}
          />

          <ReviewBox
            overallRating={rating}
            intensityClass={textToClass[tags[0]] || ""}
            systematicityClass={textToClass[tags[1]] || ""}
            feedbackClass={textToClass[tags[2]] || ""}
            rewardClass={textToClass[tags[3]] || ""}
            helpClass={textToClass[tags[4]] || ""}
            requirementsClass={textToClass[tags[5]] || ""}
          />

          {/* 리뷰 내용은 한 번만 보여줍니다 */}
          <ParnassusBox
            title="리뷰 내용"
            content={content || "내용이 없습니다."}
          />
        </div>
      </div>
    </div>
  );
};
