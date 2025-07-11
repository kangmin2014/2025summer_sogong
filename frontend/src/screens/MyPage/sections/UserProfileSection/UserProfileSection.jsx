// UserProfileSection.jsx

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./UserProfileSection.css";

export const UserProfileSection = ({
  username,
  nickname,
  profile_img,
  participation_rate,
  trust_score
}) => {
  return (
    <Card className="user-profile-card">
      <CardContent className="user-profile-content">
        <div className="user-profile-top">
          <div className="user-avatar">
            <img
              src={profile_img || "https://c.animaapp.com/OhEHVw08/img/picture@2x.png"}
              alt="User profile"
              className="user-avatar-img"
            />
          </div>

          <div className="user-info-box">
            <h2 className="user-nickname">{nickname || "닉네임 없음"}</h2>
            <div className="user-id-box">
              <span className="user-id-at">@</span>
              <span className="user-id-text">{username || "아이디 없음"}</span>
            </div>
          </div>
        </div>

        <div className="user-stats">
          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Fire icon"
              src="https://c.animaapp.com/OhEHVw08/img/fire-icon.svg"
            />
            <span className="stat-label">참여율</span>
            <span className="stat-value">{participation_rate ?? 0}%</span>
          </div>

          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Star"
              src="https://c.animaapp.com/OhEHVw08/img/star.svg"
            />
            <span className="stat-label">신뢰도 평가</span>
            <span className="stat-value">{trust_score ?? 0}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
