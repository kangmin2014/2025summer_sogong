// ReviewBox.jsx

import React from "react";
import arrow from "./img/arrow.svg";
import emptystar from "./img/emptystar.svg";
import profile from "./img/profile.png";
import star from "./img/star.svg";
import "./ReviewBox.css";

export const ReviewBox = ({ review }) => {
  const {
    nickname,
    date,
    title,
    content,
    likes,
    comments,
    rating,
    img,
  } = review;

  const renderStars = (score) => {
    return Array.from({ length: 5 }, (_, i) => (
      <img
        key={i}
        className="star"
        alt="Star"
        src={i < score ? star : emptystar}
      />
    ));
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="review-box2">
      <div className="review-detail-box">
        <div className="profile-box">
          <img className="profile" alt="Profile" src={profile} />

          <div className="profile-info-box">
            <div className="div">
              <div className="nickname">{nickname}</div>
              <img className="arrow" alt="Arrow" src={arrow} />
            </div>

            <div className="info-box">
              <div className="review-star">{renderStars(rating)}</div>
              <div className="text-wrapper">{date}</div>
            </div>
          </div>
        </div>

        <div className="title-box">
          <div className="title">
            <div className="text-wrapper-2">{title}</div>
          </div>

          <div className="div">
            <div className="text">더보기</div>
            <img className="img" alt="Arrow" src={arrow} />
          </div>
        </div>

        <div className="text-box">
          <p className="p">{truncateText(content, 187)}</p>
        </div>

        <div className="like-comment">
          <div className="div">
            <div className="text-wrapper">공감</div>
            <div className="text-wrapper">{likes}</div>
          </div>
          <div className="div">
            <div className="text-wrapper">댓글</div>
            <div className="text-wrapper">{comments}</div>
          </div>
        </div>
      </div>

      <img className="picture" alt="Picture" src={img} />
    </div>
  );
};
