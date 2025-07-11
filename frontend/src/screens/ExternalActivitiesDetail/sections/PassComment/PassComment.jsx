// PassComment.jsx
import React from "react";
import "./PassComment.css";

export const PassComment = ({
  title = "",
  nickname ,
  date = "",
  views = 0,
  scraps = 0,
  profile = "",
  image = "",
  content = "",
  profile_img,
}) => {
  // 줄바꿈 처리
  const formattedText = content?.split("\n").map((line, i) => <p key={i}>{line}</p>);

  return (
    <div className="passcomment-external-activities">
      <div className="overlap-group-wrapper">
        <div className="head-info-box">
          <div className="title">
            <p className="passcomment-text-wrapper">{title}</p>
          </div>

          <div className="information-box">
            <div className="profile-box">
              <img className="profile" alt="Profile" src={profile_img} />
              <div className="ID">{nickname}</div>
              <div className="date">{date}</div>
            </div>

            <div className="view-scrap">
              <div className="passcomment-div">
                <div className="text-wrapper-2">조회수</div>
                <div className="text-wrapper-2">{views}</div>
              </div>
              <div className="passcomment-div">
                <div className="text-wrapper-2">스크랩수</div>
                <div className="text-wrapper-2">{scraps}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="passcomment-introduction-box">
         
          <div className="introduction-detail">
            <div className="p">{formattedText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
