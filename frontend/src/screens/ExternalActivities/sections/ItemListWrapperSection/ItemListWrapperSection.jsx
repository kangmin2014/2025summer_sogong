import React from "react";
import { Button } from "../../../../components/ui/button1";
import "./ItemListWrapperSection.css";

export const ItemListWrapperSection = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p className="no-results">결과가 없습니다.</p>;
  }

  return (
    <>
      {activities.map((item) => (
        <div key={item.id} className="item-wrapper">
          {/* 썸네일 이미지 */}
          <div className="item-image-wrapper">
            <div className="item-image-box">
              <img
                className="item-thumbnail"
                alt={item.title}
                src={item.thumbnail || "/img/default-thumbnail.jpg"}
              />
            </div>
          </div>

          {/* 활동 내용 */}
          <div className="item-content">
            <div className="item-text-group">
              <div className="item-title">{item.title}</div>
              <div className="item-subtitle">{item.company}</div>
              <div className="item-category">{item.institution_tags}</div>

              <div className="item-tags">
                {item.trust_tags &&
                  item.trust_tags.split(',').map((tag, index) => (
                    <div key={index} className="item-tag">
                      <span className="item-tag-text">{tag}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="item-meta">
              <div className="item-deadline">
                마감일: {item.deadline || "미정"}
              </div>

              <div className="item-views">
                <img
                  className="item-eye-icon"
                  alt="조회수"
                  src="https://c.animaapp.com/JL2GbBWa/img/eye-2.svg"
                />
                <div className="item-meta-text">{item.view_count}</div>
              </div>

              <div className="item-comments">
                <span className="item-meta-text">댓글</span>
                <span className="item-meta-text">{item.comment_count}</span>
              </div>
            </div>
          </div>

          {/* 리뷰 / 버튼 */}
          <div className="item-action">
            <div className="item-action-box">
              <Button variant="outline" className="item-button">
                <span className="item-button-text">신청하기</span>
              </Button>

              <div className="item-review">
                <div className="item-stars">
                  {Array.from({ length: Math.round(item.rating || 0) }).map(
                    (_, index) => (
                      <img
                        key={index}
                        className="item-star"
                        alt="Star"
                        src="https://c.animaapp.com/JL2GbBWa/img/star-1-1.svg"
                      />
                    )
                  )}
                </div>
                <div className="item-review-text">
                  <span className="item-review-label">리뷰</span>
                  <span className="item-review-count">
                    {item.rating_count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
