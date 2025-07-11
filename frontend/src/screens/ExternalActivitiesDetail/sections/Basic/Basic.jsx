// Basic.jsx
import React from "react";
import { TitleBox } from "./TitleBox";
import { BasicInformationBox } from "./BasicInformationBox";
import { InformationTagBox } from "./InformationTagBox";

import "./Basic.css";

export const Basic = ({ activity }) => {
  if (!activity) return <div>로딩 중...</div>;

  return (
    <div className="main-content">
      <TitleBox
        title={activity.title}
        viewCount={activity.view_count}
        ratingCount={activity.rating_count}
      />

      <BasicInformationBox
        company={activity.company}
        applicationStart={activity.application_start}
        applicationEnd={activity.application_end}
        recruitCapacity={activity.recruit_capacity}
        preferredQualifications={activity.preferred_qualifications}
        activityBenefits={activity.activity_benefits}
        activityFields={activity.activity_fields}
        activityType={activity.activity_type}
        targetParticipants={activity.target_participants}
        activityPeriod={activity.activity_period}
        recruitTags={activity.recruit_tags}
        homepageUrl={activity.homepage_url}
      />

      <div className="title-wrapper">
        <div className="title-2">
          <div className="basic-text-7">활동 정보 태그</div>
        </div>
      </div>

      <InformationTagBox infoTags={activity.info_tags} />

      <div className="overlap">
        <div className="title-box-2">
          <div className="basic-text-6">상세 내용</div>
        </div>
      </div>

      <div className="detail-information">
        <p className="element">
          {activity.description
            ? activity.description
            : "※ 상세 내용이 제공되지 않았습니다."}
        </p>
      </div>
    </div>
  );
};
