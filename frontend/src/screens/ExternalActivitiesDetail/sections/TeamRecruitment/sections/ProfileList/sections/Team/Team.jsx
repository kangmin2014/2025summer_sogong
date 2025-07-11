import React from "react";
import "./Team.css";

export const Team = ({ className = "", profile, nickname }) => {
  return (
    <div className={`team ${className}`}>
      {profile && <img className="picture" alt="Profile" src={profile} />}
      <div className="nickname">{nickname}</div>
      <div className="position">팀원</div>
      <div className="visit-button">
        <div className="text">프로필 방문</div>
      </div>
    </div>
  );
};
