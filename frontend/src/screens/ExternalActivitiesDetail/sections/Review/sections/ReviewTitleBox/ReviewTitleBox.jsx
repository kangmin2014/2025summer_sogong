import React from "react";
import "./ReviewTitleBox.css";

export const ReviewTitleBox = ({ totalCount = 0 }) => {
  return (
    <div className="review-title-box">
      <div className="title">
        <div className="basic-review-text">이전 기수 리뷰</div>
      </div>

      <div className="review-count">
        <div className="text-wrapper">전체</div>
        <div className="text-wrapper">{totalCount.toLocaleString()}개</div>
      </div>
    </div>
  );
};
