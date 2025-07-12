// Review.jsx

import React, { useState } from "react";
import profileImage from "./img/profile.png";
import arrow from "./img/arrow.svg";
import emptystar from "./img/emptystar.svg";
import star from "./img/star.svg";
import "./Review.css";

export const Review = ({ setSelectedTab, setSelectedReview }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const reviews = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nickname: `사용자${i + 1}`,
    date: "2025.07.01.",
    title: `신한은행 홍보대사 후기 ${i + 1}`,
    content: `후기 내용 ${i + 1}...`,
    likes: 30 + i * 5,
    comments: 3 + i,
    rating: (i % 5) + 1,
    profile: profileImage,
    intensity: "activity-intensity-hard", // 기존 문자열을 키 값으로
    system: "systematicity-systematic",
    feedback: "feedback-regularly",
    reward: "reward-accurate",
    help: "help-many",
    requirements: "requirements-not", // ✅ 새로 추가
  }));


  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);


  const renderStars = (score) =>
    Array.from({ length: 5 }, (_, i) => (
      <img key={i} className="star" alt="Star" src={i < score ? star : emptystar} />
    ));

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="review-page">
      {/* 제목 및 리뷰 수 */}
      <div className="review-title-box">
        <div className="title">
          <div className="reviewtitlebox-text">전체 리뷰</div>
        </div>
        <div className="review-count">
          <div className="contest-detail-text-wrapper">전체</div>
          <div className="contest-detail-text-wrapper">{reviews.length.toLocaleString()}개</div>
        </div>
      </div>

      {/* 리뷰 리스트 */}
      {currentReviews.map((review) => (
        <div key={review.id} className="review-box2">
          <div className="review-detail-box">
            <div className="profile-box">
              <img className="profile" alt="Profile" src={review.profile} />
              <div className="profile-info-box">
                <div className="contest-div">
                  <div className="nickname">{review.nickname}</div>
                  <img className="arrow" alt="Arrow" src={arrow} />
                </div>
                <div className="info-box">
                  <div className="review-star">{renderStars(review.rating)}</div>
                  <div className="contest-detail-text-wrapper">{review.date}</div>
                </div>
              </div>
            </div>

            <div className="contest-review-title-box">
              <div className="title">
                <div className="contest-text-wrapper-2">{review.title}</div>
              </div>
              <div
                className="contest-div more-button-right"
                onClick={() => {
                  setSelectedReview(review);
                  setSelectedTab("ReviewMore");
                }}
              >
                <div className="contest-text">더보기</div>
                <img className="img" alt="Arrow" src={arrow} />
              </div>
            </div>

            <div className="contest-text-box">
              <p className="p">{truncateText(review.content, 187)}</p>
            </div>

            <div className="like-comment">
              <div className="contest-div">
                <div className="contest-detail-text-wrapper">공감</div>
                <div className="contest-detail-text-wrapper">{review.likes}</div>
              </div>
              <div className="contest-div">
                <div className="contest-detail-text-wrapper">댓글</div>
                <div className="contest-detail-text-wrapper">{review.comments}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 페이지네이션 */}
      <div className="contest-detail-pagination-wrapper">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};
