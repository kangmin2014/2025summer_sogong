// ReportButton.jsx
import React from "react";
import reportIcon from "./report-icon.svg";
import "./ReportButton.css";

export const ReportButton = () => {
  return (
    <div className="frame">
      <img className="report-icon" alt="Report icon" src={reportIcon} />
    </div>
  );
};
