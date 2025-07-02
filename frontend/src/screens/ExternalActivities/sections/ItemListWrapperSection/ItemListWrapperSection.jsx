// ItemListWrapperSection.jsx

import React from "react";
import { Button } from "../../../../components/ui/button1";
import "./ItemListWrapperSection.css";

export const ItemListWrapperSection = () => {
  const tags = [
    { text: "보상/혜택", color: "#0077ff" },
    { text: "스펙/이력서", color: "#e50000" },
    { text: "효율/가성비", color: "#ecba00" },
    { text: "리스크 회피", color: "#12da00" },
    { text: "투명성/검증", color: "#bf00d4" },
  ];

  const stars = [
    "https://c.animaapp.com/JL2GbBWa/img/star-1-1.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-2-1.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-3-1.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-4-1.svg",
    "https://c.animaapp.com/JL2GbBWa/img/star-5-1.svg",
  ];

  return (
    <div className="item-wrapper">
      <div className="item-image-wrapper">
        <div className="item-image-box">
          <img
            className="item-heart-icon"
            alt="Heart"
            src="https://c.animaapp.com/JL2GbBWa/img/heart-2.svg"
          />
        </div>
      </div>

      <div className="item-content">
        <div className="item-text-group">
          <div className="item-title">제43기 신한은행 홍보대사 모집</div>
          <div className="item-subtitle">주식회사 신한은행</div>
          <div className="item-category">대기업</div>
          <div className="item-tags">
            {tags.map((tag, index) => (
              <div key={index} className="item-tag">
                <span className="item-tag-text" style={{ color: tag.color }}>
                  {tag.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="item-meta">
          <div className="item-deadline">D-7</div>
          <div className="item-views">
            <img
              className="item-eye-icon"
              alt="Eye"
              src="https://c.animaapp.com/JL2GbBWa/img/eye-2.svg"
            />
            <div className="item-meta-text">23,608</div>
          </div>
          <div className="item-comments">
            <span className="item-meta-text">댓글</span>
            <span className="item-meta-text">68</span>
          </div>
        </div>
      </div>

      <div className="item-action">
        <div className="item-action-box">
          <Button variant="outline" className="item-button">
            <span className="item-button-text">신청하기</span>
          </Button>

          <div className="item-review">
            <div className="item-stars">
              {stars.map((star, index) => (
                <img
                  key={index}
                  className="item-star"
                  alt="Star"
                  src={star}
                />
              ))}
            </div>
            <div className="item-review-text">
              <span className="item-review-label">리뷰</span>
              <span className="item-review-count">2,930</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};