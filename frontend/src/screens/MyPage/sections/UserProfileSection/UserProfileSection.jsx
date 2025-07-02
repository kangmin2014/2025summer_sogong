// UserProfileSection.jsx

import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import "./UserProfileSection.css";

export const UserProfileSection = () => {
  const userProfile = {
    nickname: "닉네임",
    username: "아이디",
    profileImage: "https://c.animaapp.com/OhEHVw08/img/picture@2x.png",
    participationRate: "96%",
    trustRating: "4.7",
  };

  return (
    <Card className="user-profile-card">
      <CardContent className="user-profile-content">
        <div className="user-profile-top">
          <div className="user-avatar">
            <img
              src={userProfile.profileImage}
              alt="User profile"
              className="user-avatar-img"
            />
          </div>

          <div className="user-info-box">
            <h2 className="user-nickname">{userProfile.nickname}</h2>
            <div className="user-id-box">
              <span className="user-id-at">@</span>
              <span className="user-id-text">{userProfile.username}</span>
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
            <span className="stat-value">{userProfile.participationRate}</span>
          </div>

          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Star"
              src="https://c.animaapp.com/OhEHVw08/img/star.svg"
            />
            <span className="stat-label">신뢰도 평가</span>
            <span className="stat-value">{userProfile.trustRating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
