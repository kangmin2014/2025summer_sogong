import React from "react";
import { Badge } from "../../../../components/ui/badge1";
import { Button } from "../../../../components/ui/button1";
import "./ItemListSection.css";

export const ItemListSection = () => {
  const categoryTags = [
    { text: "보상/혜택", color: "tag-blue" },
    { text: "스펙/이력서", color: "tag-red" },
    { text: "효율/가성비", color: "tag-yellow" },
    { text: "리스크 회피", color: "tag-green" },
    { text: "투명성/검증", color: "tag-purple" },
  ];

  const stars = [
    { src: "https://c.animaapp.com/JL2GbBWa/img/star-1.svg", alt: "Filled star" },
    { src: "https://c.animaapp.com/JL2GbBWa/img/star-2.svg", alt: "Filled star" },
    { src: "https://c.animaapp.com/JL2GbBWa/img/star-3.svg", alt: "Filled star" },
    { src: "https://c.animaapp.com/JL2GbBWa/img/star-4.svg", alt: "Filled star" },
    { src: "https://c.animaapp.com/JL2GbBWa/img/star-5.svg", alt: "Filled star" },
  ];

  return (
    <article className="item-section">
      {/* Image */}
      <div className="item-image-wrapper">
        <div className="item-image-box">
          <button aria-label="Add to favorites">
            <img className="item-heart" alt="Heart" src="https://c.animaapp.com/JL2GbBWa/img/heart-2.svg" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="item-content">
        <div className="item-content-top">
          <h2 className="item-title">제43기 신한은행 홍보대사 모집</h2>
          <p className="item-subtitle">주식회사 신한은행</p>
          <p className="item-subtype">대기업</p>
          <div className="item-tags">
            {categoryTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="item-badge">
                <span className={`item-tag-text ${tag.color}`}>{tag.text}</span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="item-meta">
          <div className="item-meta-date">D-7</div>
          <div className="item-meta-views">
            <img src="https://c.animaapp.com/JL2GbBWa/img/eye-2.svg" alt="Views" className="icon" />
            <span className="item-meta-text">23,608</span>
          </div>
          <div className="item-meta-comments">
            <span className="item-meta-text">댓글</span>
            <span className="item-meta-text">68</span>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="item-action">
        <div className="item-action-box">
          <Button variant="outline" className="item-apply-btn">
            <span className="item-apply-text">신청하기</span>
          </Button>

          <div className="item-review-box">
            <div className="item-stars">
              {stars.map((star, index) => (
                <img key={index} className="star-icon" alt={star.alt} src={star.src} />
              ))}
            </div>
            <div className="item-review-meta">
              <span className="review-label">리뷰</span>
              <span className="review-count">2,930</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};