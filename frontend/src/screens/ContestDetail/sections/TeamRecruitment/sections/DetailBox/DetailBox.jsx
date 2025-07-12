import React from "react";
import "./DetailBox.css";

export const DetailBox = ({ info }) => {
  if (!info) return null;

  return (
    <div className="detail-box">
      <div className="div">
        <div className="text-wrapper">활동분야</div>
        <div className="text-wrapper">{info.field}</div>
      </div>

      <div className="div">
        <div className="text-wrapper">모집인원</div>
        <p className="text-wrapper">{info.recruitment}</p>
      </div>

      <div className="div">
        <div className="text-wrapper">모집현황</div>
        <p className="text-wrapper">{info.status}</p>
      </div>

      <div className="how-box">
        <div className="text-wrapper">활동방식</div>
        <p className="text-wrapper">{info.method}</p>
      </div>

      <div className="want-box">
        <div className="text-wrapper">원하는 분</div>
        <p className="text-wrapper">{info.want}</p>
      </div>

      <div className="div">
        <div className="text-wrapper">지원기간</div>
        <p className="text-wrapper">{info.period}</p>
      </div>
    </div>
  );
};
