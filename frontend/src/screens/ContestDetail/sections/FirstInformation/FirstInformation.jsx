import React from "react";
import companyIcon from "./img/company-icon.svg";
import hashtagIcon from "./img/hashtag-icon.svg";
import emptystar from "./img/emtpystar.svg";
import star from "./img/star.svg";
import "./FirstInformation.css";
import video from "./img/video.png";

export const FirstInformation = ({ views, createdAt, tags }) => {
  const now = new Date();

  const createdDate = new Date(createdAt);

  const isNew = (now - createdDate) / (1000 * 60 * 60 * 24) <= 3;

  const isHot = views >= 1000;

  return (
    <div className="first-information">
      <div className="information-box">
        <div className="classification">
          <div className="tag-row">
            {isHot && (
              <div className="HOT-tag">
                <div className="text">HOT</div>
              </div>
            )}
            {isNew && (
              <div className="NEW-tag">
                <div className="text">NEW</div>
              </div>
            )}
          </div>
          <div className="div">기획, 경영, 마케팅</div>
        </div>


        <div className="basic-information">
          <p className="contest-title">제43기 신한은행 대학생 홍보대사 모집</p>
          <p className="div">
            신한은행과 함께라서 가능한 특별한 무대, 이번 여름, 세상을 바꿀 너의 이야기를 들려줘! 가장 빛나는 주인공은 바로 너야 💙
          </p>
        </div>

        <div className="plus-information">
          <div className="div-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} className="star" alt="Star" src={star} />
            ))}
            <img className="star" alt="Star" src={emptystar} />
            <div className="contest-text-wrapper-2">(4.4)</div>
            <div className="contest-text-wrapper-2">활동 리뷰글</div>
            <div className="contest-text-wrapper-2">2,930개</div>
          </div>

          <div className="div-2">
            <img className="company-icon" alt="Company icon" src={companyIcon} />
            <div className="contest-text-wrapper-3">주식회사 신한은행</div>
          </div>

          <div className="tag-information">
            <img className="hashtag-icon" alt="Hashtag icon" src={hashtagIcon} />
            <div className="tag-gather">
              {tags?.map((tag, index) => (
                <div className="div-wrapper" key={index}>
                  <div className="text-wrapper">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="video-box">
        <img className="video" alt="Video" src={video} />
      </div>
    </div>
  );
};
