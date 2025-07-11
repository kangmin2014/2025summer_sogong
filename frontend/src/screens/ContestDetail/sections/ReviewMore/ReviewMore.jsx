import React from "react";
import "./ReviewMore.css";
import star from "./star.svg";
import emptystar from "./emptystar.svg";

export const ReviewMore = ({
  title,
  nickname,
  date,
  content,
  likes,
  comments,
  rating,
  img,
  intensity,
  system,
  feedback,
  reward,
  help,
  profile,
  requirements,
}) => {
  const criteria = [
    { label: "활동 강도", content: intensity },
    { label: "운영 체계성", content: system },
    { label: "피드백 및 멘토링", content: feedback },
    { label: "보상 및 혜택", content: reward },
    { label: "실질적인 도움", content: help },
  ];

  return (
    <div className="reviewmore-external-activities-screen">
      <div className="reviewmore-external-activities">
        <div className="reviewmore-overlap-group">

          {/* HeadInfoBox */}
          <div className="head-info-box">
            <div className="title">
              <div className="text">{title}</div>
            </div>
            <div className="information-box">
              <div className="profile-box">
                {profile && <img className="profile" alt="Profile" src={profile} />}
                <div className="ID">{nickname}</div>
                <div className="date">{date}</div>
              </div>
              <div className="view-scrap">
                <div className="contest-reviewmore-div">
                  <div className="contest-reviewmore-text-wrapper">공감</div>
                  <div className="contest-reviewmore-text-wrapper">{likes}</div>
                </div>
                <div className="contest-reviewmore-div">
                  <div className="contest-reviewmore-text-wrapper">댓글</div>
                  <div className="contest-reviewmore-text-wrapper">{comments}</div>
                </div>
              </div>
            </div>
          </div>

          {/* ReviewBox */}
          <div className="reviewmore-box">
            <div className="overall-rating-box">
              <p className="overall-rating">★ 전체 평점 및 분야별 태그</p>
            </div>

            <div className="star-box">
              <div className="star-point">{rating || "4.0"}</div>
              <div className="review-star">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="star-2"
                    alt="Star"
                    src={i < Math.floor(rating || 4) ? star : emptystar}
                  />
                ))}
              </div>
            </div>

            {/* 태그 박스 */}
            <div className="tag-box">
              {[
                {
                  label: "활동 강도",
                  value: {
                    "activity-intensity-hard": "바쁘다",
                    "activity-intensity-normal": "보통",
                    "activity-intensity-relaxed": "여유로움",
                  }[intensity],
                },
                {
                  label: "운영 체계성",
                  value: {
                    "systematicity-systematic": "체계적",
                    "systematicity-normal": "보통",
                    "systematicity-disarray": "혼란",
                  }[system],
                },
                {
                  label: "피드백 및 멘토링",
                  value: {
                    "feedback-regularly": "정기적인 피드백",
                    "feedback-simple": "간단한 코멘트",
                    "feedback-not": "없음",
                  }[feedback],
                },
                {
                  label: "보상 및 혜택",
                  value: {
                    "reward-accurate": "정확 지급",
                    "reward-part": "부분 지급",
                    "reward-not": "미지급",
                  }[reward],
                },
                {
                  label: "실질적인 도움",
                  value: {
                    "help-many": "많이 배움",
                    "help-little": "조금 도움",
                    "help-not": "도움 없음",
                  }[help],
                },
                {
                  label: "예상 외 요구사항",
                  value: {
                    "requirements-many": "많았음",
                    "requirements-little": "조금 있음",
                    "requirements-not": "없었음",
                  }[requirements],
                },
              ].map((item, index) => (
                <div className="tag" key={index}>
                  <span className="tag-title">{item.label}</span>
                  <span className="tag-divider" />
                  <span className="tag-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ParnassusBox 반복 */}
          {criteria.map((item, index) => (
            <div className="parnassus-box" key={index}>
              <div className="parnassus-title-box">
                <div className="rectangle" />
                <div className="parnassus-title">{item.label}</div>
              </div>
              <div className="parnassus-text-box">
                <p className="parnassus-text">{item.content}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};
