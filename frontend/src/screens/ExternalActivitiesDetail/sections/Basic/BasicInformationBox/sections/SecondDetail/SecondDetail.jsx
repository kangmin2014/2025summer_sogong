import React from "react";
import "./SecondDetail.css";

export const SecondDetail = () => {
  return (
    <div className="second-detail">
      <div className="div">
        <div className="text-wrapper">활동유형</div>

        <div className="text-wrapper-2">개인</div>
      </div>

      <div className="target-box">
        <div className="text-wrapper">참여대상</div>

        <div className="text-wrapper-2">대학생</div>
      </div>

      <div className="div">
        <div className="text-wrapper">활동기간</div>

        <div className="period-detail">
          <div className="text-wrapper-2">25.8</div>

          <div className="and">~</div>

          <div className="text-wrapper-2">25.12</div>
        </div>
      </div>

      <div className="form-box">
        <div className="text-wrapper">모임형태</div>

        <div className="text-wrapper-2">오프라인</div>
      </div>

      <div className="homepage-box">
        <div className="text-wrapper">홈페이지</div>

        <div className="text-wrapper-2">https://www.s20/co/kr</div>
      </div>
    </div>
  );
};