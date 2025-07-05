import React from "react";
import { FirstDetail } from "./sections/FirstDetail";
import { SecondDetail } from "./sections/SecondDetail";
import "./BasicInformationBox.css";

export const BasicInformationBox = () => {
  return (
    <div className="basxiinformationbox">
      <div className="basic-information">
        <FirstDetail />
        <SecondDetail />
      </div>
    </div>
  );
};