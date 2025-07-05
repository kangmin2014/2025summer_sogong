import React from "react";
import bubbleIcon from "./img/bubble_icon.svg";
import eyeIcon from "./img/eye_icon.svg";
import "./TitleBox.css";

export const TitleBox = () => {
  return (
    <div className="title-box">
      <div className="title">
        <div className="text">신한은행 대학생 홍보대사</div>
      </div>

      <div className="serve-information">
        <div className="view-box">
          <img className="eye-icon" alt="Eye icon" src={eyeIcon} />

          <div className="text-wrapper">23,608</div>
        </div>

        <div className="comment-box">
          <img className="bubble-icon" alt="Bubble icon" src={bubbleIcon} />

          <div className="text-wrapper">68</div>
        </div>
      </div>
    </div>
  );
};