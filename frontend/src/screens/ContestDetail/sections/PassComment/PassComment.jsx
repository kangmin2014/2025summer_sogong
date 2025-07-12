import React from "react";
import "./PassComment.css";

export const PassComment = ({ title, author, date, views, scraps, content, image, profile, fullText }) => {
  // 줄바꿈 처리
  const formattedText = fullText.split("\n").map((line, i) => <p key={i}>{line}</p>);

  return (
    <div className="passcomment-external-activities">
      <div className="overlap-group-wrapper">
        <div className="head-info-box">
          <div className="title">
            <p className="passcomment-text-wrapper">{title}</p>
          </div>

          <div className="information-box">
            <div className="profile-box">
              <img className="profile" alt="Profile" src={profile} />
              <div className="ID">{author}</div>
              <div className="date">{date}</div>
            </div>

            <div className="view-scrap">
              <div className="div">
                <div className="text-wrapper-2">조회수</div>
                <div className="text-wrapper-2">{views}</div>
              </div>
              <div className="div">
                <div className="text-wrapper-2">스크랩수</div>
                <div className="text-wrapper-2">{scraps}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="passcomment-introduction-box">
          <img className="image" alt="IntroImage" src={image} />
          <div className="introduction-detail">
            <div className="p">{formattedText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
