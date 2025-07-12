import React from "react";
import { FirstDetail } from "./sections/FirstDetail";
import { SecondDetail } from "./sections/SecondDetail";
import "./BasicInformationBox.css";

export const BasicInformationBox = ({
  company,
  applicationStart,
  applicationEnd,
  recruitCapacity,
  preferredQualifications,
  activityBenefits,
  activityFields,
  activityType,
  targetParticipants,
  activityPeriod,
  recruitTags,
  homepageUrl
}) => {
  return (
    <div className="basicinformationbox">
      <div className="basic-information">
        <FirstDetail
          company={company}
          applicationStart={applicationStart}
          applicationEnd={applicationEnd}
          recruitCapacity={recruitCapacity}
          preferredQualifications={preferredQualifications}
          activityBenefits={activityBenefits}
          activityFields={activityFields}
        />
        <SecondDetail
          activityType={activityType}
          targetParticipants={targetParticipants}
          activityPeriod={activityPeriod}
          recruitTags={recruitTags}
          homepageUrl={homepageUrl}
        />
      </div>
    </div>
  );
};
