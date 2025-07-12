import React from "react";
import "./SecondDetail.css";

export const SecondDetail = ({
  activityType,
  targetParticipants,
  activityPeriod,
  recruitTags,
  homepageUrl,
}) => {
  return (
    <div className="second-detail">
      <div className="div">
        <div className="text-wrapper">활동유형</div>
        <div className="text-wrapper-2">{activityType}</div>
      </div>

      <div className="target-box">
        <div className="text-wrapper">참여대상</div>
        <div className="text-wrapper-2">{targetParticipants}</div>
      </div>

      <div className="div">
        <div className="text-wrapper">활동기간</div>
        <div className="period-detail">
          <div className="text-wrapper-2">{activityPeriod}</div>
        </div>
      </div>

      <div className="form-box">
        <div className="text-wrapper">모임형태</div>
        <div className="text-wrapper-2">{recruitTags}</div>
      </div>

      <div className="homepage-box">
        <div className="text-wrapper">홈페이지</div>
        <div className="text-wrapper-2">{homepageUrl}</div>
      </div>
    </div>
  );
};
