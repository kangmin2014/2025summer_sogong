import React from "react";
import "./ProfileTitleBox.css";

export const ProfileTitleBox = ({ count }) => {
  return (
    <div className="profile-title-box">
      <div className="title">팀원 프로필 보기</div>

      <div className="volunteer-info">
        <div className="text-wrapper">(현재 지원자</div>
        <div className="count-box">
          <div className="text-wrapper">{count}</div>
          <div className="text-wrapper">명)</div>
        </div>
      </div>
    </div>
  );
};
