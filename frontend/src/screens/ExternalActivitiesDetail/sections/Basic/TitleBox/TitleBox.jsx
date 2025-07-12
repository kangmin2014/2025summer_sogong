import React from "react";
import bubbleIcon from "./img/bubble_icon.svg";
import eyeIcon from "./img/eye_icon.svg";
import "./TitleBox.css";

export const TitleBox = ({ title, viewCount, ratingCount }) => {
  return (
    <div className="title-box">
      <div className="detail-basic-title">
        <div className="detail-basic-text">{title}</div>
      </div>

      <div className="serve-information">
        <div className="view-box">
          <img className="eye-icon" alt="Eye icon" src={eyeIcon} />
          <div className="text-wrapper">{viewCount.toLocaleString()}</div>
        </div>

        <div className="comment-box">
          <img className="bubble-icon" alt="Bubble icon" src={bubbleIcon} />
          <div className="text-wrapper">{ratingCount.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};
