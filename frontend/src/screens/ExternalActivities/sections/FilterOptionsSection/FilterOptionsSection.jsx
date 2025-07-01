import React, { useState } from "react";
import { Button } from "../../../../components/ui/button1";
import "./FilterOptionsSection.css";

export const FilterOptionsSection = () => {
  const [isLiked, setIsLiked] = useState(false);

  const tags = [
    { text: "보상/혜택", color: "#0077ff" },
    { text: "스펙/이력서", color: "#e50000" },
    { text: "효율/가성비", color: "#ecba00" },
    { text: "리스크 회피", color: "#12da00" },
    { text: "투명성/검증", color: "#bf00d4" },
  ];

  const stars = [
    "https://c.animaapp.com/JL2GbBWa/img/star-1-2.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-2-2.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-3-2.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-4-2.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-5-2.svg",
  ];

  return (
    <div className="filter-section">
      <div className="filter-image-wrapper">
        <div className="filter-image-box">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="heart-button"
            aria-label="Like this activity"
          >
            <img
              className="heart-icon"
              alt="Heart"
              src="https://c.animaapp.com/JL2GbBWa/img/heart-2.svg"
            />
          </button>
        </div>
      </div>

      <div className="filter-text-content">
        <div className="filter-text-wrapper">
          <div className="filter-title-group">
            <h2 className="filter-title">제43기 신한은행 홍보대사 모집</h2>
            <div className="filter-company">주식회사 신한은행</div>
            <div className="filter-type">대기업</div>

            <div className="filter-tags">
              {tags.map((tag, index) => (
                <div key={index} className="filter-tag">
                  <div className="tag-text" style={{ color: tag.color }}>
                    {tag.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="filter-info-bar">
          <div className="info-due">D-7</div>

          <div className="info-item">
            <img
              className="info-icon"
              alt="Eye"
              src="https://c.animaapp.com/JL2GbBWa/img/eye-2.svg"
            />
            <div className="info-text">23,608</div>
          </div>

          <div className="info-item">
            <div className="info-text">댓글</div>
            <div className="info-text">68</div>
          </div>
        </div>
      </div>

      <div className="filter-cta">
        <div className="filter-cta-inner">
          <Button variant="outline" className="apply-button">
            <div className="apply-text">신청하기</div>
          </Button>

          <div className="review-box">
            <div className="star-rating" role="img" aria-label="5 star rating">
              {stars.map((star, index) => (
                <img
                  key={index}
                  className="star-icon"
                  alt={`Star ${index + 1}`}
                  src={star}
                />
              ))}
            </div>

            <div className="review-text">
              <div className="review-label">리뷰</div>
              <div className="review-count">2,930</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};