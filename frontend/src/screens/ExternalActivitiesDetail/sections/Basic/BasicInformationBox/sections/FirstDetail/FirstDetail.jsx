import React from "react";
import line from "./line.svg";
import "./FirstDetail.css";

export const FirstDetail = ({
  company,
  applicationStart,
  applicationEnd,
  recruitCapacity,
  preferredQualifications,
  activityBenefits,
  activityFields,
}) => {
  return (
    <div className="first-detail">
      <div className="div">
        <div className="text-wrapper">주최기관</div>
        <div className="text-wrapper-2">{company}</div>
      </div>

      <div className="div-2">
        <div className="text-wrapper">접수기간</div>
        <div className="receipt-detail">
          <div className="div-3">
            <div className="text-wrapper-2">시작일</div>
            <img className="line" alt="Line" src={line} />
            <div className="text-wrapper-2">{applicationStart}</div>
          </div>
          <div className="div-3">
            <div className="text-wrapper-2">마감일</div>
            <img className="line" alt="Line" src={line} />
            <div className="text-wrapper-2">{applicationEnd}</div>
          </div>
        </div>
      </div>

      <div className="div">
        <div className="text-wrapper">모집인원</div>
        <div className="recruitment-detail">
          <div className="text-wrapper-2">{recruitCapacity}</div>
          <div className="text-wrapper-2">명</div>
        </div>
      </div>

      <div className="div-2">
        <div className="text-wrapper">우대역량</div>
        <p className="preference-detail">{preferredQualifications}</p>
      </div>

      <div className="div">
        <div className="text-wrapper">활동혜택</div>
        <div className="text-wrapper-2">{activityBenefits}</div>
      </div>

      <div className="div">
        <div className="text-wrapper">활동분야</div>
        <div className="text-wrapper-2">{activityFields}</div>
      </div>
    </div>
  );
};
