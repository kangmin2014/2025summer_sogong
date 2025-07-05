import React from "react";
import line from "./line.svg";
import "./FirstDetail.css";

export const FirstDetail = () => {
  return (
    <div className="first-detail">
      <div className="div">
        <div className="text-wrapper">주최기관</div>

        <div className="text-wrapper-2">대기업</div>
      </div>

      <div className="div-2">
        <div className="text-wrapper">접수기간</div>

        <div className="receipt-detail">
          <div className="div-3">
            <div className="text-wrapper-2">시작일</div>

            <img className="line" alt="Line" src={line} />

            <div className="text-wrapper-2">2025.06.03</div>
          </div>

          <div className="div-3">
            <div className="text-wrapper-2">마감일</div>

            <img className="line" alt="Line" src={line} />

            <div className="text-wrapper-2">2025.07.07</div>
          </div>
        </div>
      </div>

      <div className="div">
        <div className="text-wrapper">모집인원</div>

        <div className="recruitment-detail">
          <div className="text-wrapper-2">00</div>

          <div className="text-wrapper-2">명</div>
        </div>
      </div>

      <div className="div-2">
        <div className="text-wrapper">우대역량</div>

        <p className="preference-detail">
          파워블로거/SNS, 사진/영상/디자인툴, 콘텐츠 기획/제작 경험, 외국어,
          리더십, 행사 기획 경험
        </p>
      </div>

      <div className="div">
        <div className="text-wrapper">활동혜택</div>

        <div className="text-wrapper-2">활동비, 수료증 및 인증서</div>
      </div>

      <div className="div">
        <div className="text-wrapper">활동분야</div>

        <div className="text-wrapper-2">서포터즈, 기자단</div>
      </div>
    </div>
  );
};