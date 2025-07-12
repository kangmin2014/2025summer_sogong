import React from "react";
import companyIcon from "./img/company-icon.svg";
import hashtagIcon from "./img/hashtag-icon.svg";
import emptystar from "./img/emtpystar.svg";
import star from "./img/star.svg";
import "./FirstInformation.css";
import video from "./img/video.png";

export const FirstInformation = ({
  main_category,
  title,
  rating,
  rating_count,
  company,
  trust_tags,
  video_url, // 아직 사용 안함
  homepage_url,
  thumbnail,
  createdAt,
  views,
}) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const isNew = (now - createdDate) / (1000 * 60 * 60 * 24) <= 3;
  const isHot = views >= 1000;

  const parsedTags = typeof trust_tags === "string"
    ? trust_tags.split(",")
    : Array.isArray(trust_tags)
    ? trust_tags
    : [];

  return (
    <div className="first-information">
      <div className="information-box">
        <div className="classification">
          <div className="tag-row">
            {isHot && <div className="HOT-tag"><div className="text">HOT</div></div>}
            {isNew && <div className="NEW-tag"><div className="text">NEW</div></div>}
          </div>
          <div className="div">{main_category}</div>
        </div>

        <div className="basic-information">
          <p className="title">{title}</p>
          <p className="div">
            {"아무튼 세부설명인데 크롤링해올것도 딱히 없는데 없애면안될까"}
          </p>
        </div>

        <div className="plus-information">
          <div className="div-2">
            {[...Array(Math.floor(rating || 0))].map((_, i) => (
              <img key={i} className="star" alt="Star" src={star} />
            ))}
            {[...Array(5 - Math.floor(rating || 0))].map((_, i) => (
              <img key={i} className="star" alt="Star" src={emptystar} />
            ))}
            <div className="text-wrapper-2">({rating?.toFixed(1) || "0.0"})</div>
            <div className="text-wrapper-2">활동 리뷰글</div>
            <div className="text-wrapper-2">{rating_count || 0}개</div>
          </div>

          <div className="div-2">
            <img className="company-icon" alt="Company icon" src={companyIcon} />
            <div className="text-wrapper-3">{company}</div>
          </div>

          <div className="tag-information">
            <img className="hashtag-icon" alt="Hashtag icon" src={hashtagIcon} />
            <div className="tag-gather">
              {parsedTags.map((tag, index) => (
                <div className="div-wrapper" key={index}>
                  <div className="text-wrapper">#{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="video-box">
        {/* 아직 실제 video_url은 사용하지 않음 */}
        <img className="video" alt="Video" src={video} />
      </div>
    </div>
  );
};
