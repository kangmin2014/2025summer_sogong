/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./PopularprogramBox.css";

export const PopularprogramBox = ({
  image = "https://c.animaapp.com/yAzWyJNS/img/image-1@2x.png",
  text = "숭실대학교 교내 연합 해커톤 UNITON",
  text1 = "창업 동아리 시너지 X IT대학 학생회 EDIT",
  text2 = "D-20",
  text3 = "조회 7,204",
  text4 = "모집글 11개",
  dateClassName,
}) => {
  return (
    <div className="popularprogram-box">
      <img className="image" alt="Image" src={image} />

      <div className="content">
        <p className="content-title">{text}</p>

        <p className="content-detail">{text1}</p>

        <div className="label">
          <div className={`date ${dateClassName}`}>{text2}</div>

          <div className="dot">·</div>

          <div className="text-wrapper-4">{text3}</div>

          <div className="dot">·</div>

          <div className="text-wrapper-4">{text4}</div>
        </div>
      </div>
    </div>
  );
};
