import React from "react";
import { ShortTermDday } from "../ShortTermDday";
import "./RecruitmentBox.css";

export const RecruitmentBox = ({
  title,
  nickname,
  deadline,
  views,
  current,
  total,
  picture,
  onClick, // ✅ 추가
}) => {
  return (
    <div className="recruitment-box" onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="picture" alt="Picture" src={picture} />

      <div className="detail-box">
        <div className="title-nickname-box">
          <div className="title">{title}</div>
          <div className="nickname">{nickname}</div>
        </div>

        <div className="information-box">
          <ShortTermDday deadline={deadline} />

          <div className="view-box">
            <div className="recruit-text-wrapper">조회</div>
            <div className="recruit-text-wrapper">{views}</div>
          </div>

          <div className="situation-box">
            <div className="div">모집현황</div>
            <div className="div">{current}</div>
            <div className="div">/</div>
            <div className="div">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
