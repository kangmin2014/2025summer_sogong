// PassedPersonalBox.jsx

import React from "react";
import fireIcon from "./img/fire-icon.svg";
import picture from "./img/picture.png";
import star from "./img/star.svg";
import "./PassedPersonalBox.css";

export const PassedPersonalBox = ({ nickname, detail, participation, trust, picture }) => {
  return (
    <div className="passed-personal-box">
      <div className="profile-box">
        <div className="background" />
        <div className="profile-circle">
          <img className="picture" alt="Picture" src={picture} />
        </div>
      </div>

      <div className="information-box">
        <div className="information">
          <div className="nickname">{nickname}</div>
          <div className="detail">{detail}</div>
        </div>

        <div className="frame">
          <div className="passedpersonalbox-div">
            <img className="fire-icon" alt="Fire icon" src={fireIcon} />
            <div className="text-wrapper">참여율</div>
            <div className="text-wrapper">{participation}</div>
          </div>
          <div className="passedpersonalbox-div">
            <img className="star" alt="Star" src={star} />
            <div className="text-wrapper">신뢰도 평가</div>
            <div className="text-wrapper">{trust}</div>
          </div>
        </div>

        <div className="button">
          <div className="div-wrapper">
            <div className="text">프로필 방문</div>
          </div>
          <div className="div-wrapper">
            <div className="text">메시지 보내기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
