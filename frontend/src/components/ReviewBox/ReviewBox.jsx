import React from "react";
import "./ReviewBox.css";

const getStarImages = (rating) => {
  const filledStar = "https://c.animaapp.com/yAzWyJNS/img/star-1.svg";
  const emptyStar = "https://c.animaapp.com/yAzWyJNS/img/star-5-2.svg";
  const maxStars = 5;
  return Array.from({ length: maxStars }, (_, i) =>
    i < rating ? filledStar : emptyStar
  );
};

const reviews = [
  {
    title: "SK Careers Editor 21기 : SK그룹",
    detail: "자유롭게 근무할 수 있는 환경이 너무 좋았어요!",
    rating: 5,
  },
  {
    title: "SK Careers Editor 20기 : SK하이닉스",
    detail: "기회가 다양하고 자유로운 분위기였어요.",
    rating: 4,
  },
  {
    title: "SK Careers Editor 19기 : SK이노베이션",
    detail: "소통이 잘 되고 유연한 환경이었어요.",
    rating: 3,
  },
];

export const ReviewBox = ({ className }) => {
  return (
    <div className={`review-box ${className}`}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`review-list${index === 1 ? "-2" : index === 2 ? "-3" : ""}`}
        >
          <div className="review-star">
            {getStarImages(review.rating).map((src, i) => (
              <img key={i} className="star" alt="Star" src={src} />
            ))}
          </div>
          <p className="review-title">{review.title}</p>
          <p className="review-detail">{review.detail}</p>
        </div>
      ))}
    </div>
  );
};
