import React from "react";
import "./HeadInfoBox.css";

export const HeadInfoBox = ({ title, author, date, likes, comments, profile }) => {
  return (
    <div className="head-info-box">
      <div className="title">
        <div className="text">{title}</div>
      </div>

      <div className="information-box">
        <div className="profile-box">
          
          {profile && <img className="profile" alt="Profile" src={profile} />}
         
          <div className="ID">{author}</div>
          <div className="date">{date}</div>
        </div>

        <div className="view-scrap">
          <div className="div">
            <div className="text-wrapper">공감</div>
            <div className="text-wrapper">{likes}</div>
          </div>

          <div className="div">
            <div className="text-wrapper">댓글</div>
            <div className="text-wrapper">{comments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
