// IntroductionBox.jsx
import React from "react";
import "./IntroductionBox.css";

export const IntroductionBox = ({ title, content, date, views, scraps, onMoreClick }) => {
  return (
    <div className="introduction-box">
      <div className="title-box">
        <div className="review-box-title">{title}</div>

        {/* 👉 오른쪽 "더보기 >" 버튼 */}
        <button className="in-more-button" onClick={onMoreClick}>
          더보기 &gt;
        </button>
      </div>

      <p className="text">{content}</p>

      <div className="info-box">
        <div className="date-box">
          <div className="introductionbox-text-wrapper">{date}</div>
        </div>
        <div className="introductionbox-div">
          <div className="introductionbox-text-wrapper">조회수</div>
          <div className="introductionbox-text-wrapper">{views}</div>
        </div>
        <div className="introductionbox-div">
          <div className="introductionbox-text-wrapper">스크랩수</div>
          <div className="introductionbox-text-wrapper">{scraps}</div>
        </div>
      </div>
    </div>
  );
};
