import React from "react";
import arrow from "./img/arrow.svg";
import emptystar from "./img/emptystar.svg";
import profile from "./img/profile.png";
import star from "./img/star.svg";
import "./ReviewBox.css";

export const ReviewBox = ({ review, onClick }) => {
  const {
    nickname,
    date,
    title,
    content,
    likes,
    comment_count = 0, // ✅ 변경: comment_count 사용 (기본값 0)
    rating,
    img,
    profile_img,
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
          <img  className="profile"
            alt="Profile"
            src={profile_img ? profile_img.trim() : profile} // profile_img 있으면 사용, 없으면 기본 이미지
          />

          <div className="profile-info-box">
            <div className="review-div">
              <div className="nickname">{nickname}</div>
              <img className="arrow" alt="Arrow" src={arrow} />
            </div>

            <div className="info-box">
              <div className="review-star">{renderStars(rating)}</div>
              <div className="review-text-wrapper">{date}</div>
            </div>
          </div>
        </div>

        <div className="title-box">
          <div className="title">
            <div className="basic-review-text-wrapper-2">{title}</div>
          </div>

          <div
            className="review-div"
            onClick={onClick}
            style={{ cursor: "pointer" }}
          >
            <div className="review-text">더보기</div>
            <img className="img" alt="Arrow" src={arrow} />
          </div>
        </div>

        <div className="text-box">
          <p className="p">{truncateText(content, 187)}</p>
        </div>

        <div className="like-comment">
          <div className="review-div">
            <div className="review-text-wrapper">공감</div>
            <div className="review-text-wrapper">{likes}</div>
          </div>
          <div className="review-div">
            <div className="review-text-wrapper">댓글</div>
            <div className="review-text-wrapper">{comment_count}</div> {/* ✅ 수정 */}
          </div>
        </div>
      </div>

    
    </div>
  );
};
