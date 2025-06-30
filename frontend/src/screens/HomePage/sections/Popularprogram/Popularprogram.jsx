import React from "react";
import { BoxTitle } from "../../../../components/BoxTitle";
import { PopularprogramBox } from "../../../../components/PopularprogramBox";
import "./Popularprogram.css";

export const Popularprogram = () => {
  return (
    <div className="popularprogram">
      <BoxTitle className="box-title-instance" text="인기 프로그램" />
      <div className="box-list">
        <PopularprogramBox />
        <PopularprogramBox
          image="https://c.animaapp.com/yAzWyJNS/img/image-2@2x.png"
          text="2025년 게임웍스 Flow"
          text1="게임웍스 (GAMEWORKS)"
          text2="D-7"
          text3="조회 5,416"
          text4="모집글 8개"
        />
        <PopularprogramBox
          dateClassName="popularprogram-box-instance"
          image="https://c.animaapp.com/yAzWyJNS/img/image-3@2x.png"
          text="2025년도 IT 프로젝트 공모전"
          text1="미디어경영학과"
          text2="D-2"
          text3="조회 4,150"
          text4="모집글 21개"
        />
      </div>
    </div>
  );
};
