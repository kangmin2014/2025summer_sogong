import React from "react";
import "./Leader.css";

export const Leader = ({ className = "", profile, nickname }) => {
  return (
    <div className={`leader ${className}`}>
      {profile && <img className="picture" alt="Profile" src={profile} />}
      <div className="nickname">{nickname}</div>
      <div className="position">모집자</div>
      <div className="visit-button">
        <div className="text">프로필 방문</div>
      </div>
    </div>
  );
};
