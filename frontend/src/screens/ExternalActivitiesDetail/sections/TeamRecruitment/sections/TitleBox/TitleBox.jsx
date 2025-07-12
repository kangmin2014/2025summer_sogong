import React from "react";
import link from "./link.svg";
import "./TitleBox.css";

export const TitleBox = ({ subtitle }) => {
  return (
    <div className="title-box">
      <div className="title">{subtitle}</div>
        <div className="link-box">
          <img className="icon" alt="Icon" src={link} />
        <div className="link-text">바로가기</div>
      </div>
    </div>
  );
};