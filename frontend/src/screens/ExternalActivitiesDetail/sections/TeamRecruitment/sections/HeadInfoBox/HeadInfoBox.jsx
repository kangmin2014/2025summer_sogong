import React from "react";
import { ShortTermDday } from "../ShortTermDday";
import "./HeadInfoBox.css";

export const HeadInfoBox = ({ profile, title, nickname, views, deadline, current, total, picture }) => {
  return (
    <div className="head-info-box">
      <div className="title">
        <div className="text-wrapper">{title}</div>
      </div>

      <div className="information-box">
        <div className="profile">
          {profile && <img className="profile" alt="Profile" src={profile} />}
          <div className="ID">{nickname}</div>
        </div>

        <div className="info-section">
          <ShortTermDday deadline={deadline} />
          <div className="view-box">
            <div className="text-wrapper-2">조회</div>
            <div className="text-wrapper-2">{views}</div>
          </div>

          <div className="navbar">
            <div className="text-wrapper-3">모집현황</div>
            <div className="text-wrapper-3">{current}</div>
            <div className="text-wrapper-3">/</div>
            <div className="text-wrapper-3">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
